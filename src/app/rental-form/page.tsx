"use client";

//import { RentalForm } from '@/components/rentalForm/RentalForm';
import React from 'react';

//const page = () => {
  //return (
    //<div>
      //<RentalForm/>
    //</div>
  //);
//}

//export default page/



import { RentalForm } from "@/components/rentalForm/RentalForm"; 

export default function RentalFormPage() {
  return (
    <div className="min-h-screen  bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Billing & Rental Details</h2>
        <RentalForm />  {/* RentalForm ko render kar diya */}
      </div>
    </div>
  );
}
