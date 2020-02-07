import { initData } from "./functions/filterSearch.js";
import { callApi } from "./functions/callApi.js";
import { displayWeatherOf } from "./functions/getCityWeather.js";

initData();

const citiesSelector = [...document.querySelectorAll(".suggestion")];
citiesSelector.map(city => {
  return city.addEventListener("click", () => {
    console.log(city.textContent);
    displayWeatherOf(city.textContent).next();
  });
});
console.log(citiesSelector);
