/*import { sanityfetch } from "@/sanity/lib/fetch";
import { carBySlug } from "@/sanity/lib/queries";
import { RentalControls } from "@/components/RentalControls";
const CarPage = async ({ params }: { params: { slug: string } }) => {
  console.log("Received params:", params); // ✅ Debugging
  
  // Check if slug is provided
  if (!params?.slug) {
    return <p className="text-center mt-10 text-red-500">Error: Slug is missing!</p>;
  }

  // Fetch the car details based on the slug
  const car = await sanityfetch({ query: carBySlug, params: { slug: params.slug } });

  // Check if the car was found
  if (!car) {
    return <p className="text-center mt-10 text-red-500">Car not found!</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
      <p><strong>Brand:</strong> {car.brand || "N/A"}</p>
      <p><strong>Type:</strong> {car.type || "N/A"}</p>
      <p><strong>Fuel Capacity:</strong> {car.fuelCapacity || "N/A"}</p>
      <p><strong>Transmission:</strong> {car.transmission || "N/A"}</p>
      <p><strong>Seating Capacity:</strong> {car.seatingCapacity || "N/A"}</p>
      <p><strong>Price Per Day:</strong> ${car.pricePerDay ? car.pricePerDay.toFixed(2) : "N/A"}</p>

      {/* Rent Now Button */
      //<div className="mt-6">
      //  <RentalControls car={car} />
      //</div>
   // </div>
 // );
//};

//export default CarPage;//*


/*import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Car } from "@/types/car";
import Image from "next/image";
 interface carpageprops {
  params: Promise<{slug:string}>
 }



 async function getCars(slug:string): Promise<Car > {
  return client.fetch(
    `*[_type == "car" && slug.current == $slug][0]{
    _id,
    car,
    _type,
    image,
    originalPrice,
    pricePerDay,
    brand,
    fuelcapacity,
    trasmission,
    seatingCapacity,
    }`, {slug}
  )
 }
 export default async function CarPage({params}:carpageprops){
  const {slug} = await params;
  const car = await getCars(slug);
  return(
    <div>
      <div>
        <div>
          {car.image && 
          (
            <Image
            src={urlFor(car.image).url()}
            alt={car.name}
            width={300}
            height={200}
            className="w-82 h-38 object-cover  rounded-md"
            
            />

          )}
        </div>
        <div>
          <h2>
            {car.name}
          </h2>
          <p>
            {car.pricePerDay}
          </p>
          <p>
            {car.originalPrice}
          </p>
          <h1>
            {car.brand}
          </h1>
          <p>
            {car.fuelCapacity}
          </p>
          <p>
            {car.transmission}
          </p>
          <p>
            {car.seatingCapacity}
          </p>
        
        </div>
      </div>
    </div>
  )


 }*/


//right code which show dynamic components which i am getting errors for a week
import { client } from "@/sanity/lib/client";
import { carBySlug } from "@/sanity/lib/queries"; // ✅ Import query
import { Car } from "@/types/car";
import Image from "next/image";
import { RentalControls } from "@/components/RentalControls";

interface CarPageProps {
  params: { slug: string }; // ✅ Ensure correct type
}

// ✅ Fetch car data using the slug
async function getCar(slug: string): Promise<Car | null> {
  const car = await client.fetch(carBySlug, { slug });
  console.log('Fetched car:', car); // Debug Sanity response

  if (!car) {
    console.error(`Car not found for slug: ${slug}`); // 🔍 Debugging
    return null;
  }
  return car;
}

// ✅ Car page component
export default async function CarPage({ params }: CarPageProps) {
  console.log("Fetching car with slug:", params.slug); // 🔍 Debugging

  const car = await getCar(params.slug);

  if (!car) {
    return <p className="text-center text-red-500">Car not found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* ✅ Car Image */}
        {car.imageUrl && (
          <Image
            src={car.imageUrl}
            alt={car.name}
            width={300}
            height={200}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}

        {/* ✅ Car Details */}
        <div className="mt-4">
          <h2 className="text-3xl font-bold">{car.name}</h2>
          <p className="text-xl text-gray-600">${car.pricePerDay} / day</p>
          <p className="text-gray-500">Original Price: ${car.originalPrice}</p>
          <p className="text-gray-500">Brand: {car.brand}</p>
          <p className="text-gray-500">Fuel Capacity: {car.fuelCapacity}</p>
          <p className="text-gray-500">Transmission: {car.transmission}</p>
          <p className="text-gray-500">Seating Capacity: {car.seatingCapacity}</p>
        </div>

        {/* ✅ Rent Now Button */}
        <div className="mt-6">
          <RentalControls car={car} />
        </div>

      </div>
    </div>
  );
}
