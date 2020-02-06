import { callApi } from "./functions/callApi.js";
import { getCityWeather } from "./functions/getCityWeather.js";

// const getCityWeather = async (city = "london") => {
//   let cityToUpper = city[0].toUpperCase() + city.slice(1);
//   cityTitle.innerHTML = cityToUpper + "'s  Weather  ";
//   await callApi(city);
// };

// getCityWeather("cairo");

/*generator function */

function* getWeatherOf(city = "london") {
  yield callApi(city);
  yield getCityWeather(city);
}

const parisWeather = getWeatherOf("paris");
parisWeather.next();
parisWeather.next();

const londonWeather = getWeatherOf("london");
londonWeather.next();
londonWeather.next();

const cairoWeather = getWeatherOf("cairo");
cairoWeather.next();
cairoWeather.next();
