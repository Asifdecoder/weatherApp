let input = document.querySelector("input");
let button = document.querySelector("button");
const temp = document.getElementById("temp");
const feel_like = document.getElementById("feel_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");

button.addEventListener("click", function () {
  searchedCity = input.value;

  fetchRequest(searchedCity);
});

let fetchRequest = (searchedCity) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchedCity}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "482b5b7accmsh455002886076e04p103d8djsnec52f0c3b6e6",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.temp)
      manipulateDom(data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

function manipulateDom(data) {
  temp.innerText = data.temp;
  feel_like.innerText = data.feels_like;
  humidity.innerText = data.humidity;
  min_temp.innerText = data.min_temp;
}
