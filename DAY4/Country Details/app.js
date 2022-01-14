var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/regionalbloc/eu");
xhr.send();
xhr.onload = function () {
  if (xhr.status <= 200 && xhr.status <= 300) {
    var countries = JSON.parse(this.response);
    html = document.getElementById("image");
    html.innerHTML = "";

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);

    html.appendChild(table);

    let row_1 = document.createElement("tr");
    let heading_1 = document.createElement("th");
    heading_1.innerHTML = "Country Name";
    let heading_2 = document.createElement("th");
    heading_2.innerHTML = "Region";
    let heading_3 = document.createElement("th");
    heading_3.innerHTML = "Subregion";
    let heading_4 = document.createElement("th");
    heading_4.innerHTML = "Population";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    countries.forEach((country) => {
      let row = document.createElement("tr");
      let countryName = document.createElement("td");
      countryName.innerHTML = country.name;
      let region = document.createElement("td");
      region.innerHTML = country.region;
      let subregion = document.createElement("td");
      subregion.innerHTML = country.subregion;
      let population = document.createElement("td");
      population.innerHTML = country.population;

      row.appendChild(countryName);
      row.appendChild(region);
      row.appendChild(subregion);
      row.appendChild(population);
      tbody.appendChild(row);
    });
  } else {
    console.log(this.response);
  }
};
