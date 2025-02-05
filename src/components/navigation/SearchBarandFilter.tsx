"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";
import { Car } from "@/types/car";
import { sanityfetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";

const SearchBarAndFilter: React.FC<{ onFilter: (filteredCars: Car[]) => void }> = ({ onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await sanityfetch({ query: allCars });
        const uniqueCars = Array.from(new Map(fetchedCars.map((car) => [car.slug, car])).values());
        setCars(uniqueCars);
        setFilteredCars(uniqueCars);
      } catch (error) {
        console.error("Car data fetch error:", error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    let updatedCars = cars;

    if (searchQuery) {
      updatedCars = updatedCars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterType !== "All") {
      updatedCars = updatedCars.filter((car) => car._type === filterType);
    }

    if (priceRange !== "All") {
      const [min, max] = priceRange.split("-").map(Number);
      updatedCars = updatedCars.filter((car) => car.price >= min && car.price <= max);
    }

    setFilteredCars(updatedCars);
    onFilter(updatedCars);
  }, [searchQuery, filterType, priceRange, cars, onFilter]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 px-6 py-4 bg-blue-50 border border-gray-300 rounded-lg shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-2/5 bg-white shadow-sm">
        <Icon src="/images/search.png" alt="Search icon" className="w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search for cars..."
          className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Type Filter */}
      <select
        className="border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm text-gray-700"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="All">All Cars</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Truck">Truck</option>
        <option value="Coupe">Coupe</option>
      </select>

      {/* Price Filter */}
      <select
        className="border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm text-gray-700"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="All">All Prices</option>
        <option value="0-20000">$0 - $20,000</option>
        <option value="20000-50000">$20,000 - $50,000</option>
        <option value="50000-100000">$50,000 - $100,000</option>
        <option value="100000-500000">$100,000 - $500,000</option>
      </select>
    </div>
  );
};

export default SearchBarAndFilter;
