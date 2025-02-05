"use client";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { StepHeader } from "./components/StepHeader";
import { RentalSummary } from "./components/RentalSummary";
import { client } from "@/sanity/lib/client";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CITIES = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

export const RentalForm: React.FC = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    cars: [],
    total: 0,
    status: "pending",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
  });

  const [rentalConfirmed, setRentalConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  // Updated handleCheckout with Stripe and Sanity
  const handleCheckout = async () => {
    setRentalConfirmed(true);

    try {
      // Save the order data to Sanity
      const order = await client.create({
        _type: "order",
        ...orderData,
        status: "payment_pending",
        cars: orderData.cars.map((carId) => ({ _type: "reference", _ref: carId })),
      });

      // Now proceed with Stripe checkout
      const stripe = await stripePromise;
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        body: JSON.stringify({
          total: orderData.total,
          metadata: { sanityOrderId: order._id },
        }),
        headers: { "Content-Type": "application/json" },
      });

      const session = await response.json();

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
        if (error) {
          console.error("Checkout error:", error);
        }
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Payment processing failed. Please try again.");
    }
  };

  // CitySelect component
  const CitySelect = ({ name, label }: { name: string; label: string }) => (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        value={orderData[name as keyof typeof orderData]}
        onChange={handleChange}
        className="p-2 border rounded-md"
        required
      >
        <option value="">Select City</option>
        {CITIES.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await client.create({
        _type: "order",
        ...orderData,
        cars: orderData.cars.map((carId) => ({ _type: "reference", _ref: carId })),
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 flex-wrap max-md:flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full bg-white rounded-xl max-w-[852px]">
            <StepHeader title="Billing Info" subtitle="Please enter your billing info" step="Step 1 of 4" />
            
            {/* Input Fields */}
            <InputField label="First Name" name="firstName" placeholder="Your first name" value={orderData.firstName} onChange={handleChange} />
            <InputField label="Last Name" name="lastName" placeholder="Your last name" value={orderData.lastName} onChange={handleChange} />
            <InputField label="Address" name="address" placeholder="Your address" value={orderData.address} onChange={handleChange} />
            <InputField label="Zip Code" name="zipCode" placeholder="Zip Code" value={orderData.zipCode} onChange={handleChange} />
            <InputField label="Phone Number" name="phoneNumber" placeholder="Phone number" value={orderData.phoneNumber} onChange={handleChange} />
            <InputField label="Email Address" name="email" placeholder="Email address" value={orderData.email} onChange={handleChange} />

            {/* Rental Confirmation */}
            {rentalConfirmed && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                Car successfully rented! Redirecting to payment...
              </div>
            )}

            <CitySelect name="pickupLocation" label="Pickup Location" />
            <InputField label="Pickup Date" name="pickupDate" type="date" value={orderData.pickupDate} onChange={handleChange} />
            <InputField label="Pickup Time" name="pickupTime" type="time" value={orderData.pickupTime} onChange={handleChange} />
            
            <CitySelect name="dropoffLocation" label="Dropoff Location" />
            <InputField label="Dropoff Date" name="dropoffDate" type="date" value={orderData.dropoffDate} onChange={handleChange} />
            <InputField label="Dropoff Time" name="dropoffTime" type="time" value={orderData.dropoffTime} onChange={handleChange} />
          </div>

          {/* Payment Section */}
          <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
            <StepHeader title="Payment Method" subtitle="Please select your payment method" step="Step 3 of 4" />
            <button
              type="button"
              onClick={handleCheckout}
              className="gap-2 self-start px-6 py-3 mt-4 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
            >
              Rent Now
            </button>
          </div>
        </form>

        {/* Rental Summary */}
        <RentalSummary 
          carName="Nissan GT - R" 
          carImage="/images/tick2.png" 
          rating={4} 
          reviews={440} 
          subtotal={80.00} 
          tax={0} 
          total={80.00} 
        />
      </div>
    </div>
  );
};
