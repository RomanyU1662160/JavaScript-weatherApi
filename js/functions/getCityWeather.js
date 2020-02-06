// import { callApi } from "./callApi";

export const getCityWeather = city => {
  let cityTitle = document.querySelector("#cityTitle");
  let cities = [];
  cities = [...cities, city];
  cities.map(city => {
    let cityToUpper = city[0].toUpperCase() + city.slice(1);
    cityTitle.innerHTML += cityToUpper + "'s  Weather | ";
  });
  console.log(cities);

  //await callApi(city);
};
