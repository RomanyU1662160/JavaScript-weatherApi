import { callApi } from "./callApi.js";

export const getCityWeather = city => {
  let cityTitle = document.querySelector("#cityTitle");
  let cities = [];
  cities = [...cities, city];
  cities.map(city => {
    let cityToUpper = city[0].toUpperCase() + city.slice(1);
    cityTitle.innerHTML += cityToUpper + "'s  Weather | ";
  });
  // console.log(cities);

  //await callApi(city);
};

function* getWeatherOf(city = "london") {
  const api = yield callApi(city);
  const weather = yield getCityWeather(city);
}

export const displayWeatherOf = city => {
  return getWeatherOf(city).next();
};
