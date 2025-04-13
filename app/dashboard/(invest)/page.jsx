"use client";

import { useState, useEffect } from "react";
import FarmCard from "./components/FarmCard";
import FarmFilter from "./components/FarmFilter";
import FarmModal from "./components/FarmModal";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function FarmsPage() {
  const [farms, setFarms] = useState([]);
  const [filteredFarms, setFilteredFarms] = useState([]);
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    farmType: "",
    minROI: 0,
    maxInvestment: 1000000,
    sortBy: "roi-desc",
  });

  useEffect(() => {
    // API fetch
    const fetchFarms = async () => {
      setIsLoading(true);
      try {
        // Mock data
        const mockFarms = [
          {
            id: 1,
            name: "Sunny Acres Organic",
            location: "California, USA",
            type: "Organic Vegetables",
            image: "/farm1.jpg",
            roi: 12.5,
            minInvestment: 5000,
            totalFunding: 250000,
            fundedPercent: 65,
            description:
              "Specializing in organic tomatoes, cucumbers, and leafy greens.",
            riskLevel: "Medium",
            duration: "3 years",
            totalInvestors: 42,
          },
          {
            id: 2,
            name: "Golden Dairy Farms",
            location: "Wisconsin, USA",
            type: "Dairy",
            image: "/farm2.jpg",
            roi: 8.2,
            minInvestment: 10000,
            totalFunding: 500000,
            fundedPercent: 80,
            description:
              "Premium organic dairy farm producing milk, cheese, and yogurt.",
            riskLevel: "Low",
            duration: "5 years",
            totalInvestors: 68,
          },
          {
            id: 3,
            name: "Blueberry Hills Orchard",
            location: "Oregon, USA",
            type: "Fruits",
            image: "/farm3.jpg",
            roi: 15.2,
            minInvestment: 7500,
            totalFunding: 350000,
            fundedPercent: 45,
            description:
              "Specializing in organic blueberries and raspberries with sustainable farming practices.",
            riskLevel: "Medium",
            duration: "4 years",
            totalInvestors: 28,
          },
          {
            id: 4,
            name: "Green Pastures Cattle Co.",
            location: "Texas, USA",
            type: "Livestock",
            image: "/farm4.jpg",
            roi: 9.8,
            minInvestment: 15000,
            totalFunding: 600000,
            fundedPercent: 75,
            description:
              "Grass-fed beef cattle ranch with humane treatment and premium meat production.",
            riskLevel: "Low",
            duration: "5 years",
            totalInvestors: 52,
          },
          {
            id: 5,
            name: "Misty Valley Vineyards",
            location: "Napa Valley, USA",
            type: "Vineyard",
            image: "/farm5.jpg",
            roi: 18.5,
            minInvestment: 20000,
            totalFunding: 800000,
            fundedPercent: 90,
            description:
              "Premium wine grape vineyard producing award-winning Cabernet Sauvignon and Chardonnay grapes.",
            riskLevel: "High",
            duration: "7 years",
            totalInvestors: 64,
          },
          // Add more farms as needed
        ];
        setFarms(mockFarms);
        setFilteredFarms(mockFarms);
      } catch (error) {
        console.error("Error fetching farms:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFarms();
  }, []);

  useEffect(() => {
    // Apply filters and search
    let filtered = [...farms];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(
        (farm) =>
          farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          farm.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          farm.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    filtered = filtered.filter((farm) => {
      return (
        (filters.location === "" || farm.location.includes(filters.location)) &&
        (filters.farmType === "" || farm.type.includes(filters.farmType)) &&
        farm.roi >= filters.minROI &&
        farm.minInvestment <= filters.maxInvestment
      );
    });

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "roi-desc":
          return b.roi - a.roi;
        case "roi-asc":
          return a.roi - b.roi;
        case "investment-asc":
          return a.minInvestment - b.minInvestment;
        case "investment-desc":
          return b.minInvestment - a.minInvestment;
        default:
          return 0;
      }
    });

    setFilteredFarms(filtered);
  }, [filters, searchQuery, farms]);

  const handleInvestClick = (farm) => {
    setSelectedFarm(farm);
  };

  const handleCloseModal = () => {
    setSelectedFarm(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input input-bordered pl-5 md:pl-10 w-full"
              placeholder="Search farms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <FarmFilter filters={filters} setFilters={setFilters} />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredFarms.length > 0 ? (
                filteredFarms.map((farm) => (
                  <FarmCard
                    key={farm.id}
                    farm={farm}
                    onInvestClick={handleInvestClick}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-xl font-medium text-gray-500">
                    No farms match your search criteria
                  </div>
                  <button
                    className="btn btn-ghost mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({
                        location: "",
                        farmType: "",
                        minROI: 0,
                        maxInvestment: 1000000,
                        sortBy: "roi-desc",
                      });
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {selectedFarm && (
              <FarmModal farm={selectedFarm} onClose={handleCloseModal} />
            )}
          </>
        )}
      </div>
    </>
  );
}
