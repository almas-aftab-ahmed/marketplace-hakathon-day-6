/*import { title } from "process";

export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
    },
    {
      name:'slug',
      type:'slug',
      title:'slug',
      Options:{
        source:'car',
      }
    },
    {
      name: 'type',
      type: 'string',
      title: 'Car Type',
      description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
    },
    {
      name: 'fuelCapacity',
      type: 'string',
      title: 'Fuel Capacity',
      description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
    },
    {
      name: 'transmission',
      type: 'string',
      title: 'Transmission',
      description: 'Type of transmission (e.g., Manual, Automatic)',
    },
    {
      name: 'seatingCapacity',
      type: 'string',
      title: 'Seating Capacity',
      description: 'Number of seats (e.g., 2 People, 4 seats)',
    },
    {
      name: 'pricePerDay',
      type: 'string',
      title: 'Price Per Day',
      description: 'Rental price per day',
    },
    {
      name: 'originalPrice',
      type: 'string',
      title: 'Original Price',
      description: 'Original price before discount (if applicable)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., popular, recommended)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Car Image',
      options: {
        hotspot: true
      }
    }
  ],
};*/




export default {
  name: "car",
  type: "document",
  title: "Car",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Car Name",
    },
    {
      name: "brand",
      type: "string",
      title: "Brand",
      description: "Brand of the car (e.g., Nissan, Tesla, etc.)",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name", // ✅ Fix: Correct source
        maxLength: 96,
      },
    },
    {
      name: "type",
      type: "string",
      title: "Car Type",
    },
    {
      name: "fuelCapacity",
      type: "string",
      title: "Fuel Capacity",
    },
    {
      name: "transmission",
      type: "string",
      title: "Transmission",
    },
    {
      name: "seatingCapacity",
      type: "string",
      title: "Seating Capacity",
    },
    {
      name: "pricePerDay",
      type: "string",
      title: "Price Per Day",
    },
    {
      name: "originalPrice",
      type: "string",
      title: "Original Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      type: "image",
      title: "Car Image",
      options: { hotspot: true },
    },
  ],
};
