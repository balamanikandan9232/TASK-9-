//Get all the countries from Asia continent /region using Filter function
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = JSON.parse(request1.response);
  var asia = data1.filter((element) => {
    if (element.region === "Asia") {
      return element.name;
    }
  });
  console.log(asia);
};
//Get all the countries with a population of less than 2 lakhs using Filter function
var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data2 = JSON.parse(request1.response);
  var countpolu = data2.filter((element) => {
    return element.population < 200000;
  });
  console.log(countpolu);
};
//Print the following details name, capital, flag using forEach function
var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data3 = JSON.parse(request3.response);
  data3.forEach((element) => {
    console.log(element.name, element.capital, element.flag);
  });
};
//Print the total population of countries using reduce function
var red = new XMLHttpRequest();
red.open("GET", "https://restcountries.com/v3.1/all", true);
red.send();
red.onload = function () {
  var data4 = JSON.parse(red.response);
  const population = data4.reduce((acc, element) => {
    return acc + element.population;
  }, 0);
  console.log(population);
};
//Print the country which uses US Dollars as currency.

var request4 = new XMLHttpRequest();
request4.open(
  "Get",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request4.send();
request4.onload = function () {
  var data5 = JSON.parse(request4.response);
  var cur = [];
  for (i = 0; i < data5.length; i++) {
    if (data5[i].currencies[0].code === "USD") {
      console.log("name:", data5[i].name, "==>", data5[i].currencies[0].code);
    }
  }
};
