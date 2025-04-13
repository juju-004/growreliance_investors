"use client";

import {
  ArrowRightIcon,
  TruckIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function GoodsCard({ item, onPurchaseClick }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative h-48">
        <img
          src={item.image || "/goods-placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-4 text-white border-none right-4 badge ${
            item.profitMargin > 30
              ? "badge-success"
              : item.profitMargin > 15
              ? "badge-warning"
              : "badge-error"
          }`}
        >
          {item.profitMargin}% Profit
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <div className="badge badge-outline">{item.type}</div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Origin Price</div>
            <div className="font-bold text-lg">
              ${item.currentPrice}/{item.unit}
            </div>
            <div className="text-xs text-gray-500">{item.origin}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Destination Price</div>
            <div className="font-bold text-lg text-success">
              ${item.destinationPrice}/{item.unit}
            </div>
            <div className="text-xs text-gray-500">{item.destination}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center text-sm">
            <TruckIcon className="h-4 w-4 mr-1" />
            <span>
              Transport: ${item.transportCost}/{item.unit}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>Shelf Life: {item.shelfLife}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn bg-c2 text-white btn-sm"
            onClick={() => onPurchaseClick(item)}
          >
            Trade Now <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
