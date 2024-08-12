import { DOM } from "./dom.js";
import { fetchWeatherData } from "./api.js";
import { displayWeatherData } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  DOM.inputField.focus();
});

DOM.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cityName = DOM.inputField.value;
  try {
    const weatherData = await fetchWeatherData(cityName);
    displayWeatherData(weatherData);
    DOM.inputField.value = "";
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
});
