"use client";

import { Car } from "@/types/car";

const isServer = typeof window === "undefined";

// Add to rentals
export const addToRentals = (car: Car, rentalDays: number) => {
  if (isServer) return;

  const rentals: Car[] = JSON.parse(localStorage.getItem("rentals") || "[]");

  const existingIndex = rentals.findIndex(item => item._id === car._id);

  if (existingIndex > -1) {
    rentals[existingIndex].rentalDays = rentalDays;
    rentals[existingIndex].totalAmount = Number(car.pricePerDay) * rentalDays;
  } else {
    rentals.push({ ...car, rentalDays, totalAmount: Number(car.pricePerDay) * rentalDays });
  }

  localStorage.setItem("rentals", JSON.stringify(rentals));
};

// Remove from rentals
export const removeFromRentals = (carId: string) => {
  if (isServer) return;

  const rentals: Car[] = JSON.parse(localStorage.getItem("rentals") || "[]");
  const filtered = rentals.filter(item => item._id !== carId);
  localStorage.setItem("rentals", JSON.stringify(filtered));
};

// Get rentals
export const getRentalItems = (): Car[] => {
  if (isServer) return [];
  return JSON.parse(localStorage.getItem("rentals") || "[]");
};
