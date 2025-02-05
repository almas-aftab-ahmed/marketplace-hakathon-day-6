/*import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
// import * as React from "react"; // Optional React import (not needed in Next.js since it's already included)

// Defining the type for CarCardProps to ensure strong typing for the component's props
type CarCardProps = {
  name: string; // Car name
  type: string; // Car type (e.g., Electric, Gasoline)
  image: string; // Image URL for the car
  fuelCapacity: string; // Fuel capacity specification
  transmission: string; // Transmission type (Automatic/Manual)
  capacity: string; // Number of seats or capacity
  price: number; // Rental price per day
  discountedPrice?: number; // Optional discounted price
  favoriteIcon: string; // Icon indicating if the car is a favorite
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
      /* Favorite/Heart Icon */
     //<Image
       // loading="lazy" // Lazy load the image for performance optimization
        //src={favoriteIcon} // Favorite icon source
        //alt="Favorite Icon" // Accessibility: Alt text for screen readers
        //height={6}
        //width={6}
        //className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10 hover:text-red-600" // Styling for icon
      ///>
      //<div className="flex gap-5 justify-between font-bold">
     //   {/* Car Name and Type */}
       // <div className="flex flex-col">
         // <div className="text-xl tracking-tight text-gray-900">{name}</div> {/* Car Name */}
          //<div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div> {/* Car Type */}
        //</div>
      //</div>
      {/* Car Image */}
      //<Image
       // loading="lazy"
        //src={image}
        //alt={`${name} car`} // Dynamic alt text for accessibility
       // height={250}
        //width={250}
        //className="object-contain self-center mt-16 max-w-full w-[250px] max-md:mt-10"
      ///>
      //{/* Car Specifications */}
      //<div className="flex gap-4 items-start mt-8 text-sm font-medium leading-5 text-slate-400">
        {/* Fuel Capacity */}
    //    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
      //    <Image
        //    loading="lazy"
          //  src="/images/5.svg" // Icon for fuel capacity
            //alt="Fuel Icon"
            //height={6}
           // width={6}
           // className="object-contain shrink-0 w-6 aspect-square"
         // />
          //<div className="w-7">{fuelCapacity}</div>
        //</div>
        //{/* Transmission */}
        //<div className="flex gap-1 items-start whitespace-nowrap">
         // <Image
           // loading="lazy"
            //src="/images/6.svg" // Icon for transmission
            //alt="Transmission Icon"
           // height={6}
          //  width={6}
            //className="object-contain shrink-0 w-6 aspect-square"
         // />
       //   <div className="w-12">{transmission}</div>
       // </div>
        //{/* Capacity */}
        //<div className="flex gap-1.5 items-start">
          //<Image
           // loading="lazy"
            //src="/images/7.svg" // Icon for capacity
            //alt="Capacity Icon"
           // height={6}
           // width={6}
           // className="object-contain shrink-0 w-6 aspect-square"
         // />
         // <div className="w-[60px]">{capacity}</div>
        //</div>
      //</div>
     // {/* Pricing and Rent Button */}
     // <div className="flex gap-3 mt-5 w-full">
       // <div className="flex flex-col font-bold text-slate-900">
        //  <div className="text-xl">
         //   ${price}.00/ <span className="text-sm text-slate-900">day</span> {/* Price per day */}
          //</div>
         // {discountedPrice && (
          //  <div className="mt-1 text-sm">${discountedPrice}.00</div> // Optional discounted price
         // )}
       // </div>
       // {/* Rent Now Button */}
       // <button
        //  className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
         // aria-label={`Rent ${name} now`} // Accessibility label
       // >
         // Rent Now
       // </button>
     // </div>
   // </div>
//  );
//};

// Car Recommendation Page
//export const CarRecommendationPage: React.FC = () => {
 // const cars = [
    // Array of car objects with details such as name, type, image, etc.
   // {
     // name: "Tesla Model 3",
     // type: "Electric",
     // image: "/images/r1.png",
     // fuelCapacity: "100 kWh",
     // transmission: "Automatic",
      //capacity: "5 seats",
      //price: 100,
     // favoriteIcon: "/images/heart.png",
    //},
    //{
      //name: "Ford Mustang",
      //type: "Gasoline",
     // image: "/images/r2.png",
     // fuelCapacity: "60 L",
     // transmission: "Manual",
     // capacity: "4 seats",
     // price: 80,
     // favoriteIcon: "/images/red.png",
   // },
    // Additional car objects omitted for brevity
  //];

  //return (
    //<div className="p-6 bg-gray-100">
     // {/* Page Title */}
      //<h2 className="text-xl font-bold text-slate-400 text-left ml-4 mb-8">
        //Recommended Car
      //</h2>
    //    {/* Car Grid */}
     // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
       // {cars.map((car, index) => (
        //  <CarCard key={index} {...car} /> // Render CarCard for each car
       // ))}
     // </div>
     // {/* Show More Button */}
     // <div className="justify-center flex mt-12">
      //  <button
        //  className="gap-2 px-6 py-3 text-base font-medium tracking-tight flex justify-center text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[170px] whitespace-nowrap"
       // >
         // Show more cars
       // </button>
     // </div>
   // </div>
  //);
//};