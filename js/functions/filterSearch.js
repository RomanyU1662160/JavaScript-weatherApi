import { displayWeatherOf, getWeatherOf } from "./getCityWeather.js";

const searchInput = document.querySelector("#searchInput");

let cities = ["cairo", "london", "leeds", "paris", "huddersfield"];

/* 
 view list on searchable cities in the search page 
 */

const getCitiesList = arrList => {
  const resultsDiv = document.querySelector("#results");
  let p = "";

  arrList.map(city => {
    p += `<p class="alert alert-info suggestion "> ${city[0].toUpperCase() +
      city.slice(1)} </p> `;
  });
  resultsDiv.innerHTML = p;
  return handleOnClickCity();
};

/* 
      Display init searchable data 
      HINT :::  uncomment first line to display list of searchable cities 
*/
export const initData = () => {
  // getCitiesList(cities);
  searchInput.addEventListener("keyup", e => {
    if (e.target.value.length > 0) {
      const results = filterResults(cities, e.target.value);
      return getCitiesList(results);
    }
    getCitiesList([]);
  });
};

const filterResults = (filtered = [], term) => {
  const suggestions = filtered.filter(item => {
    return item.includes(term.toLowerCase());
  });
  return suggestions;
};

// display city's weather on click
export const handleOnClickCity = () => {
  const citiesSelector = [...document.querySelectorAll(".suggestion")];
  citiesSelector.map(city => {
    return city.addEventListener("click", () => {
      console.log(city.textContent);
      displayWeatherOf(city.textContent);
    });
  });
};
