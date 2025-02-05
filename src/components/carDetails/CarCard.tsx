/*import * as React from 'react';
import { CarType } from './types';
import Image from 'next/image';

interface CarCardProps {
  car: CarType;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[317px] max-md:px-5">
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{car.name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{car.type}</div>
        </div>
        <button 
          aria-label={`${car.isFavorite ? 'Remove from favorites' : 'Add to favorites'}`}
          className="object-contain shrink-0 self-start w-6 aspect-square"
        >
          <Image
            loading="lazy"
            src={car.isFavorite ? "/images/heart.png" : "/images/red.png"}
            alt=""
            height={6}
            width={6}
          />
        </button>
      </div>
      <Image
        loading="lazy"
        src={car.image}
        alt={car.name}
        height={100}
        width={100}
        className="mt-14 max-md:mt-10 aspect-[3.16] w-[228px]"
      />
      <div className="flex gap-4 items-start mt-14 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-2 items-start whitespace-nowrap">
          <Image
            loading="lazy"
            src="/images/c1.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{car.specs.gasoline}</div>
        </div>
        <div className="flex gap-2 items-start whitespace-nowrap">
          <Image
            loading="lazy"
            src="/images/c2.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[52px]">{car.specs.steering}</div>
        </div>
        <div className="flex gap-2 items-start">
          <Image
            loading="lazy"
            src="/images/c3.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{car.specs.capacity}</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          <div className="text-xl">
            ${car.price.current.toFixed(2)}/ <span className="text-sm text-slate-400">day</span>
          </div>
          {car.price.original && (
            <div className="mt-1 text-sm">${car.price.original.toFixed(2)}</div>
          )}
        </div>
       
         <button
  className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
  
>
  Rent Now
</button>

      </div>
    </div>
  );
}*/

/*"use client";

import Link from "next/link";
import Image from "next/image";
import { RentalControls } from "../RentalControls";
import type { Car } from "@/types/car";

const CarCard = ({ car }: { car: Car }) => (
  
  <div className="border rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white">
    <Link href={`/car/${car.slug.current}`} className="block">


      <div className="relative h-48">
        {car.imageUrl ? (
          <Image
            src={car.imageUrl || car.image?.asset?.url || "/fallback-image.jpg"}
            alt={`${car.name} image`}
            width={300}
            height={200}
            className="w-82 h-38 object-cover rounded-md"
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h2>
        <p className="text-lg font-semibold text-gray-900">
          ${car.pricePerDay}/day
        </p>
      </div>
    </Link>
    <div className="px-4 pb-4">
      <RentalControls car={car} />
    </div>
  </div>
);

export default CarCard;/*/





"use client";

import Link from "next/link";
import Image from "next/image";
import { RentalControls } from "../RentalControls";
import type { Car } from "@/types/car";
import { useWishlist } from "@/app/context/wishlistcontext";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ✅ React Icons import

const CarCard = ({ car }: { car: Car }) => {
  console.log("Car received in CarCard:", car); // ✅ Debugging line

  if (!car.slug) {
    console.warn("🚨 Car slug is missing for:", car.name);
  }

  const { toggleWishlist, isWishlisted } = useWishlist(); // ✅ Get wishlist functions

  // ✅ Debugging Wishlist State
  console.log("isWishlisted State:", isWishlisted(car.slug));

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white relative">
      {/* ✅ Wishlist Button */}
      <button
        onClick={() => {
          console.log("💖 Toggle Wishlist Clicked for:", car.slug);
          toggleWishlist(car); // ✅ Call toggleWishlist
        }}
        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        {isWishlisted(car.slug) ? (
          <FaHeart className="text-red-500 text-2xl transition duration-300" /> // ✅ Filled Heart
        ) : (
          <FaRegHeart className="text-gray-500 text-2xl transition duration-300" /> // ✅ Empty Heart
        )}
      </button>

      <Link href={`/car/${car.slug ?? "error-slug"}`} className="block">
        <div className="relative h-48">
          <Image
            src={car.imageUrl || "/fallback-image.jpg"}
            alt={`${car.name} image`}
            width={300}
            height={300}
            className="object-cover rounded-md justify-center items-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h2>
          <p className="text-lg font-semibold text-gray-900">${car.pricePerDay}/day</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <RentalControls car={car} />
      </div>
    </div>
  );
};

export default CarCard;
