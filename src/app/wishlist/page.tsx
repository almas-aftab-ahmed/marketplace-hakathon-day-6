"use client";

import React from "react";
import { useWishlist } from "@/app/context/wishlistcontext";
import CarDetails from "@/components/carDetails/CarDetails";

const CarDetailPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <p className="text-center text-red-500">Wishlist is empty</p>;
  }

  return (
    <div>
      {wishlist.map((car) => (
        <CarDetails key={car.slug} car={car} />
      ))}
    </div>
  );
};

export default CarDetailPage;
