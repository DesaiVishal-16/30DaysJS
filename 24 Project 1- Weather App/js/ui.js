import { formatDate, formatTime, createElement } from "./utils.js";
import { DOM } from "./dom.js";

export function displayWeatherData(data) {
  if (!data) return;

  updateCurrentWeather(data);
  updateHourlyWeather(data.forecast.forecastday[0].hour);
  updateWeatherStats(data);
  updateForecast(data.forecast.forecastday);
}

function updateCurrentWeather(data) {
  DOM.navCity.textContent = data.location.name;
  DOM.currentTime.textContent = formatDate(data.location.localtime);
  DOM.currentCity.textContent = `${data.location.name},`;
  DOM.currentRegion.textContent = `${data.location.region},`;
  DOM.currentCountry.textContent = data.location.country;
  DOM.temp.textContent = `${data.current.temp_c}°C`;
  DOM.feelsLike.textContent = `Feels Like ${data.current.feelslike_c}°C`;
  DOM.upTemp.textContent = `${data.forecast.forecastday[0].day.maxtemp_c}°C↑`;
  DOM.downTemp.textContent = `${data.forecast.forecastday[0].day.mintemp_c}°C↓`;
}

function updateHourlyWeather(hourArray) {
  DOM.hourlyWeather.innerHTML = "";
  hourArray.forEach((hour) => {
    const hourlyWeatherDetails = createElement("div", {
      children: [
        createElement("span", { textContent: formatTime(hour.time) }),
        createElement("img", { src: hour.condition?.icon }),
        createElement("span", { textContent: hour.condition?.text }),
      ],
    });
    DOM.hourlyWeather.appendChild(hourlyWeatherDetails);
  });
}

function updateWeatherStats(data) {
  const stats = {
    "aqi-index-data": data.current?.air_quality["us-epa-index"],
    "visibility-data": `${data.current.vis_km}km`,
    "humidity-data": `${data.current.humidity}%`,
    "wind-speed-data": `${data.current.wind_kph}km/hr`,
    "rain-data": `${data.forecast.forecastday[0]?.day.daily_chance_of_rain}%`,
    "sunrise-data": data.forecast.forecastday[0]?.astro.sunrise,
    "sunset-data": data.forecast.forecastday[0]?.astro.sunset,
  };

  Object.entries(stats).forEach(([id, value]) => {
    document.getElementById(id).textContent = value;
  });
}

function updateForecast(forecastData) {
  const forecastDetail = document.getElementById("forecast-detail");
  forecastDetail.innerHTML = "";

  forecastData.slice(1).forEach((day) => {
    const forecastDay = createElement("div", {
      id: "eachDiv",
      children: [
        createForecastDayHeader(day),
        createForecastDayTemperature(day),
        createForecastDayDetails(day),
      ],
    });
    forecastDetail.appendChild(forecastDay);
  });
}

function createForecastDayHeader(day) {
  return createElement("div", {
    children: [
      createElement("img", { src: day.day.condition.icon }),
      createElement("span", { textContent: day.day.condition.text }),
      createElement("span", { textContent: formatDate(day.date) }),
    ],
  });
}

function createForecastDayTemperature(day) {
  return createElement("div", {
    children: [
      createElement("span", { textContent: `${day.day.avgtemp_c}°C` }),
      createElement("span", {
        textContent: `Feels Like: ${day.hour[0].feelslike_c}°C`,
      }),
      createElement("span", { textContent: `${day.day.maxtemp_c}°C↑` }),
      createElement("span", { textContent: `${day.day.mintemp_c}°C↓` }),
    ],
  });
}

function createForecastDayDetails(day) {
  const details = [
    { label: "Visibility", icon: "fa-eye", value: `${day.day.avgvis_km}km` },
    { label: "Humidity", icon: "fa-droplet", value: `${day.day.avghumidity}%` },
    {
      label: "Wind Speed",
      icon: "fa-wind",
      value: `${day.day.maxwind_kph}km/hr`,
    },
    {
      label: "Rain",
      icon: "fa-umbrella",
      value: `${day.day.daily_chance_of_rain}%`,
    },
    { label: "Sunrise", icon: "fa-sun", value: day.astro.sunrise },
    { label: "Sunset", icon: "fa-moon", value: day.astro.sunset },
  ];

  return createElement("div", {
    id: "nextDayDivThree",
    children: details.map((detail) =>
      createElement("div", {
        innerHTML: `<span>${detail.label}</span><span class="fa-solid ${detail.icon}"></span><span>${detail.value}</span>`,
      })
    ),
  });
}
