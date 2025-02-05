
//import Image from "next/image";
//import * as React from "react";

//type CarCardProps = {
 // name: string;
//  type: string;
  //image: string;
 // fuelCapacity: string;
 // transmission: string;
 // capacity: string;
 // price: number;
  
 // favoriteIcon: string;
//};

//export const CarCard: React.FC<CarCardProps> = ({
  //name,
  //type,
  //image,
  //fuelCapacity,
 // transmission,
  //capacity,
 // price,
 
//  favoriteIcon,
//}) => {
  //return (
    //<div className="flex flex-col p-4 bg-white rounded-xl w-full max-w-[280px] mx-auto relative border border-gray-100 shadow-md">
     // {/* Favorite Icon */}
     // <Image
     //   loading="lazy"
       // src={favoriteIcon}
       // alt="Favorite Icon"
       // height={6}
       // width={6}
       // className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
   //   />
   //   {/* Car Details */}
   //   <div className="flex flex-col mb-4">
     //   <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
       // <p className="text-sm text-slate-400">{type}</p>
   //   </div>
      //{/* Car Image */}
     // <Image
       // loading="lazy"
       // src={image}
      //  alt={`${name} car`}
      //  height={50}
      //  width={50}
      //  className="object-contain mx-auto w-full h-40"
     // />
     // {/* Features */}
     // <div className="flex justify-between items-center mt-4 text-sm text-slate-400">
      //  <div className="flex items-center gap-2">
       //   <Image
        //    loading="lazy"
         //   src="/images/5.svg"
         //   alt="Fuel"
          //  height={6}
           // width={6}
          //  className="w-5 h-5"
         // />
         // <span>{fuelCapacity}</span>
       // </div>
       // <div className="flex items-center gap-2">
         // <Image
           // loading="lazy"
      //      src="/images/6.svg"
        //    alt="Transmission"
          //  height={6}
       //     width={6}
    //        className="w-5 h-5"
       //   />
     //     <span>{transmission}</span>
    //    </div>
    //    <div className="flex items-center gap-2">
    //      <Image
    //        loading="lazy"
    //        src="/images/7.svg"
     //       alt="Capacity"
     //       height={6}
      //      width={6}
       //     className="w-5 h-5"
    //      />
      //    <span>{capacity}</span>
        //</div>
  //    </div>
  //    {/* Pricing and Button */}
    //  <div className="flex items-center justify-between mt-6">
      //  <div className="text-lg font-bold text-gray-900">${price}/day</div>
        //<button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
       //   Rent Now
      //  </button>
     // </div>
    //</div>
 // );
//};

 // export const PopularCarPage: React.FC = () => {
 // const cars = [
    //{
      //name: "Koenigsegg",
    //  type: "Electric",
     // image: "/images/p1.png",
     // fuelCapacity: "90L",
      //transmission: "Manual",
      //capacity: "2 People",
      //price: 120,
      //favoriteIcon: "/images/red.png",
    //},
   // {
     // name: "Nissan GT-R",
  //    type: "Gasoline",
   //   image: "/images/p2.png",
    //  fuelCapacity: "60L",
   //   transmission: "Manual",
  //    capacity: "2 People",
  //    price: 80,
   //   favoriteIcon: "/images/heart.png",
   // },
   // {
     // name: "Rolls-Royce",
     // type: "Gasoline",
     // image: "/images/p3.png",
     // fuelCapacity: "70L",
     // transmission: "Manual",
      //capacity: "4 People",
     // price: 150,
     // favoriteIcon: "/images/red.png",
   // },
   // {
    //  name: "Mercedes-Benz E-Class",
    //  type: "Hybrid",
    //  image: "/images/p4.png",
    //  fuelCapacity: "55L",
     // transmission: "Manual",
     // capacity: "2 People",
      //price: 130,
     // favoriteIcon: "/images/heart.png",
    //},
  //];

  //return (
    //<div className="p-4 bg-gray-50">
      //<h2 className="text-xl font-bold text-gray-700 mb-6">
        //Popular Cars <span className="text-blue-600 font-medium justify-end flex ">View All</span>
     // </h2>
     // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       // {cars.map((car, index) => (
       //   <CarCard key={index} {...car} />
       // ))}
     // </div>
   // </div>
  //);
//};
