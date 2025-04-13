"use client";

import {
  FunnelIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function FarmFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-base-200 rounded-box p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <FunnelIcon className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Filter Farms</h3>
        </div>

        <div className="flex flex-row sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex-1">
            <select
              name="farmType"
              value={filters.farmType}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">All Farm Types</option>
              <option value="Organic">Organic</option>
              <option value="Dairy">Dairy</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Livestock">Livestock</option>
            </select>
          </div>

          <div className="flex-1">
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">All Locations</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Iowa">Iowa</option>
              <option value="Wisconsin">Wisconsin</option>
            </select>
          </div>

          <div className="flex-1">
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="roi-desc">ROI (High to Low)</option>
              <option value="roi-asc">ROI (Low to High)</option>
              <option value="investment-asc">Investment (Low to High)</option>
              <option value="investment-desc">Investment (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Maximum Investment</span>
          </label>
          <select
            name="maxInvestment"
            value={filters.maxInvestment}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="10000">Up to $10,000</option>
            <option value="25000">Up to $25,000</option>
            <option value="50000">Up to $50,000</option>
            <option value="100000">Up to $100,000</option>
            <option value="1000000">No limit</option>
          </select>
        </div>
      </div>
    </div>
  );
}
