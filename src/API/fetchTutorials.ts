import API_ENDPOINTS from "./endpoints";
import { Tutorial } from "./types";

export async function fetchTutorials(): Promise<Tutorial[]> {
  try {
    const response = await fetch(API_ENDPOINTS.getTutorials);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data as Tutorial[]; // Type assertion for clarity
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    throw error; // Re-throw the error for `useQuery` to handle
  }
}
