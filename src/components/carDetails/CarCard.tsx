import * as React from 'react';
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
}