"use client";

import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function FarmCard({ farm, onInvestClick }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative h-48">
        <img
          src={farm.image || "/farm-placeholder.jpg"}
          alt={farm.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 badge bg-c1 text-white border-none">
          {farm.fundedPercent}% Funded
        </div>
      </figure>

      <div className="card-body">
        <div className="flex items-start justify-between">
          <h2 className="card-title">{farm.name}</h2>
          <span className="badge badge-outline">{farm.type}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mt-1">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {farm.location}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <ChartBarIcon className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <div className="text-xs text-gray-500">ROI</div>
              <div className="font-bold">{farm.roi}%</div>
            </div>
          </div>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 text-yellow-500 mr-2" />
            <div>
              <div className="text-xs text-gray-500">Min Investment</div>
              <div className="font-bold">
                ${farm.minInvestment.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-c1 h-2.5 rounded-full"
              style={{ width: `${farm.fundedPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn bg-c2 text-white btn-sm"
            onClick={() => onInvestClick(farm)}
          >
            View Details <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
