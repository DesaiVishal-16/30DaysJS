(()=>{"use strict";const e={currentTime:document.getElementById("current-time"),currentCity:document.getElementById("current-city"),currentRegion:document.getElementById("current-region"),currentCountry:document.getElementById("current-country"),displayDiv:document.getElementById("current-weather-data"),temp:document.getElementById("tempInC"),feelsLike:document.getElementById("feels-like"),upTemp:document.getElementById("upTemp"),downTemp:document.getElementById("downTemp"),inputField:document.getElementById("input-field"),navCity:document.getElementById("nav-city"),hourlyWeather:document.getElementById("hourly-weather"),form:document.getElementById("form")},t=e=>{const t=new Date(e),n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][t.getDay()]} (${r}.${a}.${n})`},n=(e,t={})=>{const n=document.createElement(e);return t.id&&(n.id=t.id),t.className&&(n.className=t.className),t.textContent&&(n.textContent=t.textContent),t.src&&(n.src=t.src),t.innerHTML&&(n.innerHTML=t.innerHTML),t.children&&t.children.forEach((e=>n.appendChild(e))),n};function a(e){return n("div",{children:[n("img",{src:e.day.condition.icon}),n("span",{textContent:e.day.condition.text}),n("span",{textContent:t(e.date)})]})}function r(e){return n("div",{children:[n("span",{textContent:`${e.day.avgtemp_c}°C`}),n("span",{textContent:`Feels Like: ${e.hour[0].feelslike_c}°C`}),n("span",{textContent:`${e.day.maxtemp_c}°C↑`}),n("span",{textContent:`${e.day.mintemp_c}°C↓`})]})}function o(e){const t=[{label:"Visibility",icon:"fa-eye",value:`${e.day.avgvis_km}km`},{label:"Humidity",icon:"fa-droplet",value:`${e.day.avghumidity}%`},{label:"Wind Speed",icon:"fa-wind",value:`${e.day.maxwind_kph}km/hr`},{label:"Rain",icon:"fa-umbrella",value:`${e.day.daily_chance_of_rain}%`},{label:"Sunrise",icon:"fa-sun",value:e.astro.sunrise},{label:"Sunset",icon:"fa-moon",value:e.astro.sunset}];return n("div",{id:"nextDayDivThree",children:t.map((e=>n("div",{innerHTML:`<span>${e.label}</span><span class="fa-solid ${e.icon}"></span><span>${e.value}</span>`})))})}document.addEventListener("DOMContentLoaded",(()=>{e.inputField.focus()})),e.form.addEventListener("submit",(async i=>{i.preventDefault();const c=e.inputField.value;try{const i=await(async e=>{const t=`https://api.weatherapi.com/v1/forecast.json?key=499b9a8cf7d54ad8bff123409231004&q=${encodeURIComponent(e)}&days=5&aqi=yes`;try{const e=await fetch(t);if(!e.ok)throw new Error("HTTP error! status: ${response.status}");return await e.json()}catch(e){throw console.error("Failed to fetch Weather Data:",e),e}})(c);(d=i)&&(function(n){e.navCity.textContent=n.location.name,e.currentTime.textContent=t(n.location.localtime),e.currentCity.textContent=`${n.location.name},`,e.currentRegion.textContent=`${n.location.region},`,e.currentCountry.textContent=n.location.country,e.temp.textContent=`${n.current.temp_c}°C`,e.feelsLike.textContent=`Feels Like ${n.current.feelslike_c}°C`,e.upTemp.textContent=`${n.forecast.forecastday[0].day.maxtemp_c}°C↑`,e.downTemp.textContent=`${n.forecast.forecastday[0].day.mintemp_c}°C↓`}(d),s=d.forecast.forecastday[0].hour,e.hourlyWeather.innerHTML="",s.forEach((t=>{const a=n("div",{children:[n("span",{textContent:(r=t.time,new Date(r).toLocaleDateString("en-us",{hour:"2-digit",minute:"2-digit",hour12:!1}))}),n("img",{src:t.condition?.icon}),n("span",{textContent:t.condition?.text})]});var r;e.hourlyWeather.appendChild(a)})),function(e){const t={"aqi-index-data":e.current?.air_quality["us-epa-index"],"visibility-data":`${e.current.vis_km}km`,"humidity-data":`${e.current.humidity}%`,"wind-speed-data":`${e.current.wind_kph}km/hr`,"rain-data":`${e.forecast.forecastday[0]?.day.daily_chance_of_rain}%`,"sunrise-data":e.forecast.forecastday[0]?.astro.sunrise,"sunset-data":e.forecast.forecastday[0]?.astro.sunset};Object.entries(t).forEach((([e,t])=>{document.getElementById(e).textContent=t}))}(d),function(e){const t=document.getElementById("forecast-detail");t.innerHTML="",e.slice(1).forEach((e=>{const i=n("div",{id:"eachDiv",children:[a(e),r(e),o(e)]});t.appendChild(i)}))}(d.forecast.forecastday)),e.inputField.value=""}catch(e){console.error("Failed to fetch weather data:",e)}var d,s}))})();