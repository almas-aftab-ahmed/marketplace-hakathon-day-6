"use client";

import React from "react";
import { Car } from "@/types/car";
import { useWishlist } from "@/app/context/wishlistcontext";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ✅ React Icons import

interface CarDetailProps {
  car?: Car; // ✅ Car optional
}

const CarDetail: React.FC<CarDetailProps> = ({ car }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  if (!car) {
    return <p className="text-center text-red-500 justify-center items-center">Cars EMPTY in WishList</p>;
  }

  console.log("🔍 CarDetail Rendered for:", car.name, " | Slug:", car.slug);
  console.log("❤️ Is Wishlisted:", isWishlisted(car.slug));

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md">
      {/* ✅ Wishlist Button with React Icons */}
      <button
        onClick={() => toggleWishlist(car)}
        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        {isWishlisted(car.slug) ? (
          <FaHeart className="text-red-500 text-2xl" />
        ) : (
          <FaRegHeart className="text-gray-500 text-2xl" />
        )}
      </button>

      {/* Car Image */}
      <div className="w-full h-60 relative">
        <img
          src={car.imageUrl || "/fallback-image.jpg"}
          alt={car.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Car Details */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold">{car.name}</h3>
        <p className="text-gray-500">{car.brand}</p>
        <p className="text-blue-600 font-bold text-xl">${car.pricePerDay}/day</p>

        {/* ✅ Rent Now & Remove Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Rent Now</button>
          {isWishlisted(car.slug) && (
            <button onClick={() => toggleWishlist(car)} className="px-4 py-2 bg-red-500 text-white rounded-md">
              Remove from Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
