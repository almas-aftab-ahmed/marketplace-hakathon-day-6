"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Car } from "@/types/car";

interface WishlistContextType {
  wishlist: Car[];
  toggleWishlist: (car: Car) => void;
  isWishlisted: (slug: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  // ✅ Load Wishlist from LocalStorage only on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      } catch (error) {
        console.error("🚨 Error parsing wishlist from localStorage:", error);
      }
    }
  }, []);

  // ✅ Save Wishlist to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      } catch (error) {
        console.error("🚨 Error saving wishlist to localStorage:", error);
      }
    }
  }, [wishlist]);

  // ✅ Toggle Wishlist Function
  const toggleWishlist = (car: Car) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some((c) => c.slug === car.slug);
      if (isAlreadyInWishlist) {
        console.log(`❌ Removing ${car.name} from wishlist`); 
        return prevWishlist.filter((c) => c.slug !== car.slug);
      } else {
        console.log(`✅ Adding ${car.name} to wishlist`); 
        return [...prevWishlist, car];
      }
    });
  };

  // ✅ Check if Car is Wishlisted
  const isWishlisted = (slug: string) => {
    return wishlist.some((car) => car.slug === slug);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
