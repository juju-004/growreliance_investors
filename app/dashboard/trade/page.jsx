"use client";

import { useState, useEffect } from "react";
import GoodsCard from "./components/GoodCard";
import LocationFilter from "./components/LocationFilter";
import PurchaseModal from "./components/PurchaseModal";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function TradingPage() {
  const [goods, setGoods] = useState([]);
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [selectedGood, setSelectedGood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    commodity: "",
    origin: "",
    destination: "",
    minProfit: 0,
  });
  const [priceHistory, setPriceHistory] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchGoods = async () => {
      setIsLoading(true);
      try {
        // Mock data
        const mockGoods = [
          {
            id: 1,
            name: "Organic Tomatoes",
            type: "Vegetables",
            origin: "California",
            destination: "New York",
            currentPrice: 2.45,
            destinationPrice: 3.8,
            unit: "per lb",
            image: "/tomatoes.jpg",
            profitMargin: 55.1,
            priceHistory: [
              { date: "2023-01", price: 2.3 },
              { date: "2023-02", price: 2.4 },
              { date: "2023-03", price: 2.45 },
            ],
            availableQuantity: 1500,
            minPurchase: 100,
            transportCost: 0.35,
            shelfLife: "14 days",
          },
          {
            id: 2,
            name: "Premium Arabica Coffee",
            type: "Beverages",
            origin: "Colombia",
            destination: "United States",
            currentPrice: 3.2,
            destinationPrice: 6.5,
            unit: "per lb",
            image: "/coffee.jpg",
            profitMargin: 103.1,
            priceHistory: [
              { date: "2023-01", price: 3.1 },
              { date: "2023-02", price: 3.25 },
              { date: "2023-03", price: 3.2 },
            ],
            availableQuantity: 800,
            minPurchase: 50,
            transportCost: 0.75,
            shelfLife: "6 months",
          },
          {
            id: 3,
            name: "Organic Avocados",
            type: "Fruits",
            origin: "Mexico",
            destination: "Canada",
            currentPrice: 1.8,
            destinationPrice: 3.25,
            unit: "per lb",
            image: "/avocado.jpg",
            profitMargin: 80.6,
            priceHistory: [
              { date: "2023-01", price: 1.75 },
              { date: "2023-02", price: 1.85 },
              { date: "2023-03", price: 1.8 },
            ],
            availableQuantity: 2000,
            minPurchase: 100,
            transportCost: 0.4,
            shelfLife: "3 weeks",
          },
          {
            id: 4,
            name: "Grass-Fed Beef",
            type: "Meat",
            origin: "Argentina",
            destination: "Europe",
            currentPrice: 4.5,
            destinationPrice: 9.8,
            unit: "per lb",
            image: "/beef.jpg",
            profitMargin: 117.8,
            priceHistory: [
              { date: "2023-01", price: 4.4 },
              { date: "2023-02", price: 4.55 },
              { date: "2023-03", price: 4.5 },
            ],
            availableQuantity: 1200,
            minPurchase: 200,
            transportCost: 1.2,
            shelfLife: "Frozen: 1 year",
          },
          // Add more goods data...
        ];
        setGoods(mockGoods);
        setFilteredGoods(mockGoods);
      } catch (error) {
        console.error("Error fetching goods:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoods();
  }, []);

  useEffect(() => {
    // Apply filters
    const filtered = goods.filter((item) => {
      return (
        (filters.commodity === "" || item.type.includes(filters.commodity)) &&
        (filters.origin === "" || item.origin.includes(filters.origin)) &&
        (filters.destination === "" ||
          item.destination.includes(filters.destination)) &&
        item.profitMargin >= filters.minProfit
      );
    });
    setFilteredGoods(filtered);
  }, [filters, goods]);

  const handlePurchaseClick = (good) => {
    setSelectedGood(good);
    setPriceHistory(good.priceHistory);
  };

  const handleCloseModal = () => {
    setSelectedGood(null);
    setPriceHistory(null);
  };

  const handleRefresh = () => {
    // Simulate price updates
    const updatedGoods = goods.map((item) => ({
      ...item,
      currentPrice: (item.currentPrice * (0.98 + Math.random() * 0.04)).toFixed(
        2
      ),
      destinationPrice: (
        item.destinationPrice *
        (0.98 + Math.random() * 0.04)
      ).toFixed(2),
      profitMargin: (
        (item.destinationPrice / item.currentPrice - 1) *
        100
      ).toFixed(1),
    }));
    setGoods(updatedGoods);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex w-full md:w-auto justify-between items-center gap-2">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input input-bordered pl-10 w-full"
              placeholder="Search goods..."
            />
          </div>
          <button
            onClick={handleRefresh}
            className="btn btn-ghost"
            title="Refresh prices"
          >
            <ArrowPathIcon className="h-5 w-5" />
            refresh
          </button>
        </div>
      </div>

      <LocationFilter filters={filters} setFilters={setFilters} />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredGoods.length > 0 ? (
              filteredGoods.map((item) => (
                <GoodsCard
                  key={item.id}
                  item={item}
                  onPurchaseClick={handlePurchaseClick}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-xl font-medium text-gray-500">
                  No goods match your filters
                </div>
                <button
                  className="btn btn-ghost mt-4"
                  onClick={() =>
                    setFilters({
                      commodity: "",
                      origin: "",
                      destination: "",
                      minProfit: 0,
                    })
                  }
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {selectedGood && (
            <PurchaseModal
              item={selectedGood}
              onClose={handleCloseModal}
              priceHistory={priceHistory}
            />
          )}
        </>
      )}
    </div>
  );
}
