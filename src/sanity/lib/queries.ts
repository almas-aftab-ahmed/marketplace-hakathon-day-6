import { defineQuery } from 'next-sanity';

// Query to fetch all cars
/*export const allCars = defineQuery(`
  *[_type == "car"] {
    _id,
    name,
    "slug": slug.current,
    brand,
    type,
    pricePerDay,
    "imageUrl": image.asset->url
  } | order(_createdAt desc)
`);/*/

// Query to fetch a car by its slug
/*/export const carBySlug = defineQuery(`
  *[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }
`);*/


//Query to fetch all cars
export const allCars = defineQuery(`
  *[_type == "car"] {
    _id,
    name,
    "slug": slug.current,
    brand,
    type,
    pricePerDay,
    "imageUrl": image.asset->url
  } | order(_createdAt desc)
`);

// Query to fetch a car by its slug
export const carBySlug = defineQuery(`
  *[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }
`);
