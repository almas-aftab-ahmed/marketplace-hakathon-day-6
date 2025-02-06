
export interface Car {
  price: number;
  _id: string;
  name: string;
  _type: "car";
  slug: string;
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  originalPrice: string;
  pricePerDay: string;
  brand: string;
  seatingCapacity: string;
  fuelCapacity: string;
  rentalDays?: number;  // ✅ Add this
  totalAmount?: number; // ✅ Add this

  transmission: string;
  tags?: string[];
  imageUrl?: string;
  //slug: {
   // _type: "slug";
    //current: string;
  //};
}
