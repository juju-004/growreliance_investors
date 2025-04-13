"use client";

import { useState, useEffect } from "react";
import {
  XMarkIcon,
  CalculatorIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import PriceChart from "./PriceChart";

export default function PurchaseModal({ item, onClose, priceHistory }) {
  const [quantity, setQuantity] = useState(item.minPurchase);
  const [totalCost, setTotalCost] = useState(
    item.currentPrice * item.minPurchase
  );
  const [potentialProfit, setPotentialProfit] = useState(
    (item.destinationPrice - item.currentPrice - item.transportCost) *
      item.minPurchase
  );

  useEffect(() => {
    setTotalCost((quantity * item.currentPrice).toFixed(2));
    setPotentialProfit(
      (
        quantity *
        (item.destinationPrice - item.currentPrice - item.transportCost)
      ).toFixed(2)
    );
  }, [quantity, item]);

  const handleQuantityChange = (e) => {
    const value = Math.max(
      item.minPurchase,
      parseInt(e.target.value) || item.minPurchase
    );
    setQuantity(value);
  };

  // Format price history data for the chart
  const chartData =
    item.priceHistory?.map((entry) => ({
      date: entry.date,
      price: parseFloat(entry.price.toFixed(2)),
    })) || [];

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
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <div className="flex items-center text-gray-500 mt-1">
              <span className="badge badge-outline mr-2">{item.type}</span>
              <span>
                {item.origin} → {item.destination}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-base-200 p-4 rounded-box">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                  <span className="font-medium">Current Price</span>
                </div>
                <div className="text-2xl font-bold">
                  ${item.currentPrice}/{item.unit}
                </div>
                <div className="text-sm text-gray-500">
                  {item.origin} market
                </div>
              </div>

              <div className="bg-base-200 p-4 rounded-box">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2 text-success" />
                  <span className="font-medium">Destination Price</span>
                </div>
                <div className="text-2xl font-bold text-success">
                  ${item.destinationPrice}/{item.unit}
                </div>
                <div className="text-sm text-gray-500">
                  {item.destination} market
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-lg mb-2">
                Price History (Last 6 Months)
              </h3>
              <PriceChart data={chartData} />
            </div>
          </div>

          <div>
            <div className="bg-base-200 rounded-box p-6">
              <h3 className="font-bold text-lg mb-4">Purchase Details</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity ({item.unit})</span>
                  <span className="label-text-alt">
                    Min: {item.minPurchase}
                  </span>
                </label>
                <input
                  type="number"
                  min={item.minPurchase}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="input input-bordered"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CalculatorIcon className="h-5 w-5 mr-2" />
                    <span>Total Cost</span>
                  </div>
                  <span className="font-bold">${totalCost}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 mr-2" />
                    <span>Transport Cost</span>
                  </div>
                  <span className="font-bold">
                    ${(quantity * item.transportCost).toFixed(2)}
                  </span>
                </div>

                <div className="divider"></div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-success" />
                    <span className="font-medium">Potential Profit</span>
                  </div>
                  <span className="font-bold text-success">
                    ${potentialProfit}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2" />
                    <span>Profit Margin</span>
                  </div>
                  <span className="font-bold">{item.profitMargin}%</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="btn btn-ghost bg-black/5">
                  Save for Later
                </button>
                <button className="btn bg-c2 text-white">
                  Confirm Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
