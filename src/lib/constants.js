export const API_URL = 'https://api.rawg.io/api/games';
export const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

if (!API_KEY) {
  console.error("API Key is missing! Check your .env file.");
}