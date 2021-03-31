const countryName = "India";
const apiURL = "https://covid-19-data.p.rapidapi.com/report/country/name?date=2020-04-01&name=" + countryName + "&format=json";

var dataset;
const country = document.getElementById("country");
const confirmed = document.getElementById("confirmed");
const recovered = document.getElementById("recovered");
const deaths = document.getElementById("deaths");
const active = document.getElementById("active");

const inputCountry = document.querySelector("#inputCountry");
const buttonSubmit = document.querySelector("#buttonSubmit");
const getDate = document.getElementById("getDate");

function getData() {
  console.log(inputCountry);
  country.textContent = dataset.province;
  confirmed.textContent = dataset.confirmed;
  recovered.textContent = dataset.recovered;
  deaths.textContent = dataset.deaths;
  active.textContent = dataset.active;
}

function updateDate() {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  getDate.textContent = "Last Updated: " + today;
}

fetch(apiURL, {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b58c64c6c6mshbd18efc464cc629p135b41jsnddfc1f902463",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dataset = data[0].provinces[0];
    console.log(dataset);

    updateDate();
    getData();
  })
  .catch((err) => {
    console.error(err);
  });
var inputValue;
document.getElementById("inputForm").onsubmit = function () {
  inputValue = inputCountry.value;
  console.log(inputValue);
  //country = inputvalue;
  // return false;
};

/*
async function getData() {
  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b58c64c6c6mshbd18efc464cc629p135b41jsnddfc1f902463",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
*/
