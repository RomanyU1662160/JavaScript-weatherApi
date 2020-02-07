import { callApi } from "./callApi.js";

export const handleCityTitle = city => {
  let cityTitle = document.querySelector("#cityTitle");
  let cities = [];
  cities = [...cities, city];
  cities.map(city => {
    let cityToUpper = city[0].toUpperCase() + city.slice(1);
    cityTitle.innerHTML += cityToUpper + "'s  Weather | ";
  });
  // console.log(cities);
};

export function* getWeatherOf(city = "london") {
  const api = yield callApi(city);
  const title = yield handleCityTitle(city);
}

export const displayWeatherOf = city => {
  getWeatherOf(city).next();
};
