"use client";

import { FunnelIcon } from "@heroicons/react/24/outline";

export default function LocationFilter({ filters, setFilters }) {
  const locations = ["California", "Texas", "New York", "Florida", "Iowa"];
  const commodities = ["Vegetables", "Fruits", "Grains", "Dairy", "Meat"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-base-200 rounded-box p-4 mb-6">
      <div className="flex items-center mb-4">
        <FunnelIcon className="h-5 w-5 mr-2" />
        <h3 className="font-medium">Filter Trading Options</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <select
            name="commodity"
            value={filters.commodity}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">All Commodities</option>
            {commodities.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="origin"
            value={filters.origin}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Any Origin</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="destination"
            value={filters.destination}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Any Destination</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 px-3 md:mt-0 md:px-0">
          <label className="label">
            <span className="label-text">Min Profit: {filters.minProfit}%</span>
          </label>
          <input
            type="range"
            name="minProfit"
            min="0"
            max="100"
            value={filters.minProfit}
            onChange={handleChange}
            className="range text-c2"
          />
        </div>
      </div>
    </div>
  );
}
