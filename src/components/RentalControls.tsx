"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Router import karo
import { addToRentals } from "../app/actions/action";
import type { Car } from "@/types/car";

export const RentalControls = ({ car }: { car: Car }) => {
  const [days, setDays] = useState(1);
  const router = useRouter(); // ✅ Router initialize

  const handleRent = () => {
    console.log(`Renting ${car.name} for ${days} days`); // ✅ Debugging
    if (window.confirm(`Rent ${car.name} for ${days} days?`)) {
      addToRentals(car, days);
      alert(`${car.name} added to rentals successfully!`);
      console.log("Navigating to /rentals..."); // ✅ Debugging
      router.push("/rentals"); // ✅ Check karo ke ye kaam kar raha hai ya nahi
    }
  };
  
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-20 px-2 py-1 border rounded"
        />
        <span>days</span>
      </div>
      <button
        onClick={handleRent}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Rent Now
      </button>
    </div>
  );
};
