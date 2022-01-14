//creates an XMLHttpRequest object
var xhr = new XMLHttpRequest();
//Initializes a request.
xhr.open("GET", "https://restcountries.com/v2/regionalbloc/eu");
//Send the request to server
xhr.send();
//set up listners to process the request
xhr.onload = function () {
  if (xhr.status <= 200 && xhr.status <= 300) {
    // Typical action to be performed when the document is ready:
    var countries = JSON.parse(this.response);
    html = document.getElementById("div");
    html.innerHTML = "";
    countries.forEach((country) => {
      var list = document.createElement("div");
      var flag = document.createElement("img");
      flag.src = country.flag;
      list.appendChild(flag);
      html.appendChild(list);
    });
  } else {
    console.log(this.response);
  }
};
