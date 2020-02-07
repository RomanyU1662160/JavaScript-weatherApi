const searchInput = document.querySelector("#searchInput");

let cities = ["cairo", "london", "leeds", "paris", "huddersfield"];

const getCitiesList = arrList => {
  const resultsDiv = document.querySelector("#results");
  let p = "";

  arrList.map(city => {
    p += `<p class="alert alert-info suggestion "> ${city[0].toUpperCase() +
      city.slice(1)} </p> `;
  });
  resultsDiv.innerHTML = p;
};

// getCitiesList(cities);

const filterResults = (filtered = [], term) => {
  const suggestions = filtered.filter(item => {
    return item.includes(term.toLowerCase());
  });
  return suggestions;
};

export const initData = () => {
  getCitiesList(cities);
  searchInput.addEventListener("keyup", e => {
    const results = filterResults(cities, e.target.value);
    getCitiesList(results);

    return results;
  });
};
