import { initData } from "./functions/filterSearch.js";
import { callApi } from "./functions/callApi.js";
import { getCityWeather } from "./functions/getCityWeather.js";

function* getWeatherOf(city = "london") {
  const api = yield callApi(city);
  const weather = yield getCityWeather(city);
}

initData();

const citiesSelector = [...document.querySelectorAll(".suggestion")];
citiesSelector.map(city => {
  return city.addEventListener("click", () => {
    console.log(city.textContent);
    getWeatherOf(city.textContent).next();
  });
});
console.log(citiesSelector);
