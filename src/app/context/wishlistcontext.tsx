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
  const [wishlist, setWishlist] = useState<Car[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  // ✅ Update localStorage when wishlist changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    console.log("🆕 Wishlist Updated:", wishlist);
  }, [wishlist]);

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
