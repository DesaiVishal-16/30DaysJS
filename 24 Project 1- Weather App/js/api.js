import { CONFIG } from "./config.js";

export const fetchWeatherData = async (cityName) => {
  const url = `${CONFIG.API_BASE_URL}?key=${
    CONFIG.API_KEY
  }&q=${encodeURIComponent(cityName)}&days=${CONFIG.Days_TO_FORECAST}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error! status: ${response.status}");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch Weather Data:", error);
    throw error;
  }
};
