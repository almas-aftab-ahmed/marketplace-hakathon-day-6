"use client";
import { ChangeEvent, useState } from "react";
import { InputField } from "./components/InputField";
import { StepHeader } from "./components/StepHeader";
import { RentalSummary } from "./components/RentalSummary";
import { client } from "@/sanity/lib/client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CITIES = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

export const RentalForm: React.FC = () => {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    setRentalConfirmed(true);

    try {
      // Save order to Sanity
      const order = await client.create({
        _type: "order",
        ...orderData,
        status: "payment_pending",
        cars: orderData.cars.map((carId) => ({ _type: "reference", _ref: carId })),
      });

      // Stripe checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: orderData.total * 100, // Convert to cents
          metadata: { sanityOrderId: order._id },
        }),
      });

      const session = await response.json();

      if (session.id) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: session.id });
      } else {
        alert("Error creating checkout session");
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Payment processing failed. Please try again.");
    }
  };

  return (
    <div className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 flex-wrap max-md:flex-col">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full bg-white rounded-xl max-w-[852px]">
            <StepHeader title="Billing Info" subtitle="Please enter your billing info" step="Step 1 of 4" />
            
            {/* Input Fields */}
            <InputField label="First Name" name="firstName" placeholder="Your first name" value={orderData.firstName} onChange={handleChange} />
            <InputField label="Last Name" name="lastName" placeholder="Your last name" value={orderData.lastName} onChange={handleChange} />
            <InputField label="Address" name="address" placeholder="Your address" value={orderData.address} onChange={handleChange} />
            <InputField label="Zip Code" name="zipCode" placeholder="Zip Code" value={orderData.zipCode} onChange={handleChange} />
            <InputField label="Phone Number" name="phoneNumber" placeholder="Phone number" value={orderData.phoneNumber} onChange={handleChange} />
            <InputField label="Email Address" name="email" placeholder="Email address" value={orderData.email} onChange={handleChange} />

            {/* Pickup & Dropoff Location Dropdowns */}
            <label className="font-medium">Pickup Location</label>
            <select
              name="pickupLocation"
              value={orderData.pickupLocation}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select City</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <label className="font-medium mt-4">Dropoff Location</label>
            <select
              name="dropoffLocation"
              value={orderData.dropoffLocation}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select City</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {/* Rental Confirmation */}
            {rentalConfirmed && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                Car successfully rented! Redirecting to payment...
              </div>
            )}
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
