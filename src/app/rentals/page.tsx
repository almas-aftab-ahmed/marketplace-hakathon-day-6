"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getRentalItems, removeFromRentals } from "../actions/action";
import type { Car } from "@/types/car";

export default function RentalsPage() {
  const [rentals, setRentals] = useState<Car[]>([]);

  useEffect(() => {
    const fetchRentals = () => {
      console.log("Fetching rentals from localStorage:", getRentalItems()); // ✅ Debugging
      setRentals(getRentalItems());
    };

    fetchRentals();
    window.addEventListener("storage", fetchRentals); // ✅ LocalStorage change detect karega

    return () => {
      window.removeEventListener("storage", fetchRentals);
    };
  }, []);

  const handleRemove = (carId: string) => {
    removeFromRentals(carId);
    setRentals(getRentalItems()); // ✅ State update karo
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">My Rentals</h1>

      {rentals.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No rentals found</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Browse cars
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {rentals.map((rental) => (
            <div key={rental._id} className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold">{rental.name}</h3>
              <p>Price per day: ${rental.pricePerDay}</p>
              <p>Days: {rental.rentalDays}</p>
              <p className="font-bold">Total: ${(rental.totalAmount || 0).toFixed(2)}</p>

              <button
                onClick={() => handleRemove(rental._id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {rentals.length > 0 && (
        <div className="mt-6 text-center">
          <Link
            href="/checkout"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
