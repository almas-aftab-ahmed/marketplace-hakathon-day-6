"use client";

import { useEffect, useState } from "react";
import { sanityfetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";
import Hero from "@/components/Hero";
import CarCard from "@/components/carDetails/CarCard";
import type { Car } from "@/types/car";
import SearchBarAndFilter from "@/components/navigation/SearchBarandFilter";
import { useWishlist } from "@/app/context/wishlistcontext"; // ✅ Import wishlist

const Page = () => {
  const { wishlist } = useWishlist(); // ✅ Ensure wishlist state is available
  const [, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await sanityfetch({ query: allCars });
        const uniqueCars = Array.from(new Map(fetchedCars.map((car) => [car.slug, car])).values());
        setCars(uniqueCars);
        setFilteredCars(uniqueCars);
      } catch (error) {
        setErrorMessage("Failed to load car data. Please try again later.");
        console.error("Car data fetch error:", error);
      }
    };

    fetchCars();
  }, []);

  console.log("🛒 Wishlist State:", wishlist); // ✅ Debug Wishlist State

  return (
    <div>
      <SearchBarAndFilter onFilter={setFilteredCars} />
      <Hero />
      <div className="my-10 px-6">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Cars For Rent</h1>

        {errorMessage ? (
          <div className="text-center text-red-500">{errorMessage}</div>
        ) : filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {filteredCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No cars available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
