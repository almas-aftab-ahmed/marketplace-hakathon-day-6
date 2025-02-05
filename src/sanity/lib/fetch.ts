// fetch.ts
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "q4n4hthk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

export async function sanityfetch({ query, params = {} }: { query: string, params?: any }) {
  try {
    // Attempt to fetch the data
    return await client.fetch(query, params);
  } catch (error) {
    // If an error occurs, log it and throw it
    console.error('Error fetching data from Sanity:', error);
    throw new Error('Failed to fetch data from Sanity');
  }
}
