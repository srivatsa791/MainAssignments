var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status <= 200 && xhr.status <= 300) {
    var countries = JSON.parse(this.response);

    //Get all the countries from Asia continent /region using Filter function
    let result = countries
      .filter((country) => country.region === "Asia")
      .map((country) => country.name);
    console.log("\nCountries from Asia continent/region:\n", result);
    html = document.getElementById("api1");
    html.innerHTML = "";
    result.forEach((element) => {
      let list = document.createElement("li");
      list.innerHTML = element;
      html.append(list);
    });

    //Get all the countries with a population of less than 2 lakhs using Filter function
    result = countries
      .filter((country) => country.population < 200000)
      .map((country) => country.name);
    console.log(
      "\ncountries with a population of less than 2 lakhs:\n",
      result
    );
    html = document.getElementById("api2");
    html.innerHTML = "";
    result.forEach((element) => {
      let list = document.createElement("li");
      list.innerHTML = element;
      html.append(list);
    });

    //Print the total population of countries using reduce function
    let totalPopulation = countries
      .map((country) => country.population)
      .reduce(function (result, item) {
        return result + item;
      }, 0);
    console.log("\nTotal population \t: ", totalPopulation);
    html = document.getElementById("api4");
    html.innerHTML = "";
    totalPopulation = `Total population : ${totalPopulation}`;
    html.append(totalPopulation);

    //Print the country which uses US Dollars as currency
    result = [];
    countries.map((country) => {
      country.currencies.map((currency) => {
        if (currency.code === "USD") {
          result.push(country.name);
        }
      });
    });
    console.log("\nCountries which use US Dollars as currency", result);
    html = document.getElementById("api3");
    html.innerHTML = "";
    result.forEach((element) => {
      let list = document.createElement("li");
      list.innerHTML = element;
      html.append(list);
    });
  }
};
