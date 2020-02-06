import { displayWeather } from "./displayWeather.js";

export const callApi = async city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50a7aa80fa492fa92e874d23ad061374`;

  const response = await fetch(url);
  const data = await response.json();
  const { weather, wind, clouds, sys, name } = data;
  displayWeather(weather, name);
  // console.log(data);
};
