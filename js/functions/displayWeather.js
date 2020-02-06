export const displayWeather = (weather, name) => {
  let weatherInfoTable = document.createElement("table");
  weatherInfoTable.className += "table table-hover"; // create a table
  weather.map(obj => {
    let tableHeader = document.createElement("tr");
    tableHeader.className = "text-warning bg-info text-left";

    let nameTd = document.createElement("td");
    nameTd.className = "text-warning bg-info text-left";
    nameTd.innerHTML = "Weather Of :  ";
    tableHeader.appendChild(nameTd);

    let cityTitle = document.createElement("td");
    cityTitle.className = "text-warning bg-info text-left";
    cityTitle.innerHTML = name;
    tableHeader.appendChild(cityTitle);

    let weatherTr = document.createElement("tr");
    let mainTh = document.createElement("th");
    mainTh.innerHTML = "Main: ";

    let mainTd = document.createElement("td");
    mainTd.innerHTML = obj.main;

    weatherTr.appendChild(mainTh);
    weatherTr.appendChild(mainTd);

    weatherInfoTable.appendChild(tableHeader);
    weatherInfoTable.appendChild(weatherTr);

    let descTr = document.createElement("tr");
    let descTh = document.createElement("th");
    let descTd = document.createElement("td");

    descTh.innerHTML = "Description: ";
    descTd.innerHTML = obj.description;
    descTr.appendChild(descTh);
    descTr.appendChild(descTd);

    weatherInfoTable.appendChild(descTr);
  });
  info.appendChild(weatherInfoTable);
};
