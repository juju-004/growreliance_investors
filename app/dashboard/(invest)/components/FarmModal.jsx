"use client";

import {
  XMarkIcon,
  MapPinIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function FarmModal({ farm, onClose }) {
  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="carousel w-full h-64 rounded-box">
              <div className="carousel-item w-full">
                <img
                  src={farm.image || "/farm-placeholder.jpg"}
                  className="w-full object-cover"
                  alt="Farm main image"
                />
              </div>
              {/* Add more images if available */}
            </div>

            <h2 className="text-2xl font-bold mt-4">{farm.name}</h2>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1" />
              {farm.location}
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-lg">About This Farm</h3>
              <p className="mt-2 text-gray-700">{farm.description}</p>
            </div>
          </div>

          <div>
            <div className="bg-base-200 rounded-box p-4">
              <h3 className="font-bold text-lg mb-4">Investment Details</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ChartBarIcon className="h-6 w-6 text-green-500 mr-2" />
                    <span>Projected ROI</span>
                  </div>
                  <span className="font-bold">{farm.roi}%</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-yellow-500 mr-2" />
                    <span>Minimum Investment</span>
                  </div>
                  <span className="font-bold">
                    ${farm.minInvestment.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-blue-500 mr-2" />
                    <span>Investment Duration</span>
                  </div>
                  <span className="font-bold">{farm.duration}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <UsersIcon className="h-6 w-6 text-purple-500 mr-2" />
                    <span>Total Investors</span>
                  </div>
                  <span className="font-bold">{farm.totalInvestors}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-orange-500 mr-2" />
                    <span>Risk Level</span>
                  </div>
                  <span
                    className={`badge ${
                      farm.riskLevel === "Low"
                        ? "badge-success"
                        : farm.riskLevel === "Medium"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {farm.riskLevel}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span>Funding Progress</span>
                  <span>{farm.fundedPercent}%</span>
                </div>
                <progress
                  className="progress text-c1 w-full"
                  value={farm.fundedPercent}
                  max="100"
                ></progress>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="btn btn-outline">Save for Later</button>
                <button className="btn bg-c2 text-white">Invest Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
