

import Image from "next/image";
// import * as React from "react";


type CarCardProps = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
  favoriteIcon: string;
};

// CarCard Component
export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
  favoriteIcon,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-4 bg-white rounded-xl w-full max-w-[300px] relative border border-gray-200 mx-auto">
      {/* Heart Icon */}
      <Image
        loading="lazy"
        src={favoriteIcon}
        alt="Favorite Icon"
        height={6}
        width={6}
        className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10 hover:text-red-600"
      />
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
        </div>
      </div>
      <Image
        loading="lazy"
        src={image}
        alt={`${name} car`}
        height={250}
        width={250}
        className="object-contain self-center mt-16 max-w-full w-[250px] max-md:mt-10"
      />
      <div className="flex gap-4 items-start mt-8 text-sm font-medium leading-5 text-slate-400">
        <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
          <Image
            loading="lazy"
            src="/images/5.svg"
            alt="Fuel Icon"
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <Image
            loading="lazy"
            src="/images/6.svg"
            alt="Transmission Icon"
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <Image
            loading="lazy"
            src="/images/7.svg"
            alt="Capacity Icon"
            height={6}
            width={6}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-5 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-900">day</span>
          </div>
          {discountedPrice && (
            <div className="mt-1 text-sm">${discountedPrice}.00</div>
          )}
        </div>

        <button
          className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
          aria-label={`Rent ${name} now`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

// Car Recommendation Page
export const CarRecommendationPage: React.FC = () => {
  const cars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      image: "/images/r1.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/images/r2.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/images/red.png",
    },
    {
            name: "BMW X5",
            type: "Diesel",
            image: "/images/r3.png",
            fuelCapacity: "70 L",
            transmission: "Automatic",
            capacity: "7 seats",
            price: 150,
           
            favoriteIcon: "/images/heart.png"
          },
          {
            name: "Audi A6",
            type: "Hybrid",
            image: "/images/r4.png",
            fuelCapacity: "50 L",
            transmission: "Automatic",
            capacity: "5 seats",
            price: 120,
           
            favoriteIcon: "/images/red.png"
          },
          {
            name: "Mercedes-Benz C-Class",
            type: "Gasoline",
            image: "/images/r5.png",
            fuelCapacity: "65 L",
            transmission: "Automatic",
            capacity: "5 seats",
            price: 140,
           
            favoriteIcon: "/images/heart.png"
          },
          {
            name: "Porsche 911",
            type: "Gasoline",
            image: "/images/r6.png",
            fuelCapacity: "60 L",
            transmission: "Manual",
            capacity: "4 seats",
            price: 200,
           
            favoriteIcon: "/images/red.png"
          },
          {
            name: "Chevrolet Camaro",
            type: "Gasoline",
            image: "/images/r7.png",
            fuelCapacity: "70 L",
            transmission: "Manual",
            capacity: "4 seats",
            price: 110,
            
            favoriteIcon: "/images/heart.png"
          },
          {
            name: "Nissan Altima",
            type: "Hybrid",
            image: "/images/r8.png",
            fuelCapacity: "50 L",
            transmission: "Automatic",
            capacity: "5 seats",
            price: 90,
            
            favoriteIcon: "/images/red.png"
          }
    
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-slate-400 text-left ml-4 mb-8">
        Recommended Car
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
      <div className="justify-center flex mt-12">
        <button
          className="gap-2 px-6 py-3 text-base font-medium tracking-tight flex justify-center text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[170px] whitespace-nowrap"
        >
          Show more cars
        </button>
      </div>
    </div>
  );
};
