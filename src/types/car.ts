/*export interface car {
  _id: string;
  name: string;
  _type:"car";
  image?:{
    asset:{
      _ref:string;
      _type:"image";
      
    }
  };
  originalprice:string;
  priceperday:string;
  brand:string;
  description:string;
  seatingcapacity:string;
  fuelcapacity:string;
  transmission:string;
  imageUrl?:string;

  slug: {
    _type: 'slug';
    current: string;
  };
}*/




export interface Car {
  totalAmount: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
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
  transmission: string;
  tags?: string[];
  imageUrl?: string;
  //slug: {
   // _type: "slug";
    //current: string;
  //};
}
