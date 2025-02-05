/*"use client";

import { useEffect, useState } from "react";
import { getRentalItems } from "@/app/actions/action";
import type { Car } from "@/types/car";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [rentals, setRentals] = useState<Car[]>([]);
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const router = useRouter();

  useEffect(() => {
    setRentals(getRentalItems());
  }, []);

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.email) {
      alert("Please fill in all details.");
      return;
    }
  
    alert("Order placed successfully!");
    localStorage.removeItem("rentals"); // ✅ Rentals clear kar do
    router.refresh(); // ✅ Page refresh karne ka built-in Next.js method
    router.push("/"); // ✅ Redirect home
  };
  
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {rentals.length === 0 ? (
        <p className="text-gray-500">No rentals to checkout.</p>
      ) : (
        <>
          <div className="border p-4 rounded-lg mb-4">
            {rentals.map((rental) => (
              <div key={rental._id} className="mb-2">
                <p className="font-bold">{rental.name} - ${rental.totalAmount}</p>
              </div>
            ))}
            <p className="font-bold mt-2">Total: ${rentals.reduce((acc, car) => acc + (car.totalAmount || 0), 0)}</p>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />

          <button
            onClick={handleCheckout}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRentalItems } from "@/app/actions/action";
import type { Car } from "@/types/car";

export default function CheckoutPage() {
  const [rentals, setRentals] = useState<Car[]>([]);
  const router = useRouter();

  useEffect(() => {
    setRentals(getRentalItems());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Checkout Summary</h2>

        {rentals.length === 0 ? (
          <p className="text-gray-500">No rentals added.</p>
        ) : (
          <div className="border p-3 rounded-lg bg-gray-50">
            {rentals.map((rental) => (
              <div key={rental._id} className="mb-2">
                <p className="text-gray-700 font-medium">{rental.name} - ${rental.totalAmount}</p>
              </div>
            ))}
            <p className="font-bold text-gray-900 mt-2 text-lg">
              Total: ${rentals.reduce((acc, car) => acc + (car.totalAmount || 0), 0)}
            </p>
          </div>
        )}

        {/* Proceed to Billing Button (Redirect to RentalForm) */}
        <button
          onClick={() => router.push("/rental-form")}
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Billing
        </button>
      </div>
    </div>
  );
}
