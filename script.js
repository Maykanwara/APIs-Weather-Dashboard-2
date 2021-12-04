

var temperature = document.getElementById("current-temperature");
var clickme = document.getElementById("clickme");
var cityTitle = document.querySelector(".city-title")
var currentDate = document.querySelector("#current-date")
function getCurrentWeather() {
  const cityName = document.getElementById("cityName");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1469af63617ec2a2f93918eb6da3efe8&units=imperial`

  )
  .then((response) => response.json())
  .then((data) => {
    console.log('CURRENT WEATHER DATA $$$',data)
    console.log(data.main.temp)
    temperature.textContent = "Temperature: " + data.main.temp

    var iconurl =
        "http://openweathermap.org/img/w/" +
        data.weather[0].icon+
        ".png";
      console.log('ICON URL!',iconurl);
      document.getElementById("current-img").setAttribute('src',iconurl)

  }
  )} 

function GetInfo() {

getCurrentWeather()
  const cityName = document.getElementById("cityName");





  console.log(cityName.value)
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}+&appid=1469af63617ec2a2f93918eb6da3efe8&units=imperial`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA!!!! FROM OPEN WEATHER API!!!", data);
      cityTitle.textContent = data.city.name;
      var today = new Date().toString().slice(0, 15);
      currentDate.textContent = today
      for (i = 0; i <= 5; i++) {
        
        document.getElementsByClassName("city-title")[i].textContent =
          data.city.name;
          var forecastDate = new Date()
          forecastDate.setDate((forecastDate.getDate() + i + 1))
          document.getElementById("date" + (i + 1)).innerHTML = forecastDate.toString().slice(0,15)
      }

      for (i = 0; i < 5; i++) {
       
         
        "min: " + data.list[0].main.temp

        console.log("i inside max!!", i);
        document.getElementById("day" + (i + 1) + "max").innerHTML =
          "max:" + Number(data.list[i].main.temp_max ).toFixed(1) + "°";

        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/w/" +
          data.list[i].weather[0].icon +
          ".png";

        

        console.log("I AM i at the end", i);
      }
      
    })
    .catch((err) => {
      console.log("ERRRRRRR!!!!", err);
      alert("Something Went Wrong");
    });
}

function DefaultScreen() {

clickme.addEventListener("click", GetInfo )
}
const d = new DataTransfer();
const weekly = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}





