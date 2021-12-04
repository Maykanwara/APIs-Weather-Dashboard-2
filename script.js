//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city

var temperature = document.getElementById("current-temperature");
var clickme = document.getElementById("clickme");
var cityTitle = document.querySelector(".city-title")
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
//   const newName = document.getElementById("cityInput");
getCurrentWeather()
  const cityName = document.getElementById("cityName");
//   cityName.innerHTML = "--" + newName.value + "--";

//   console.log(newName);
  console.log(cityName.value)
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}+&appid=1469af63617ec2a2f93918eb6da3efe8&units=imperial`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA!!!! FROM OPEN WEATHER API!!!", data);
      cityTitle.textContent = data.city.name;
      

      for (i = 0; i <= 5; i++) {
        //     document.getElementById("day" +(i+0)+"min").innerHTML ="min:" +Number(data.list[i].main.temp_min -283.54).toFixed(1)+"°";
        document.getElementsByClassName("city-title")[i].textContent =
          data.city.name;
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "min").innerHTML =
          // "min:" + Number(data.list[i].main.temp_min - 283.54).toFixed(1) + "°";
        "min: " + data.list[0].main.temp

        console.log("i inside max!!", i);
        document.getElementById("day" + (i + 1) + "max").innerHTML =
          "max:" + Number(data.list[i].main.temp_max ).toFixed(1) + "°";

        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/w/" +
          data.list[i].weather[0].icon +
          ".png";

        //   "http://openweathermap.org/img/w/" + iconcode + ".";

        console.log("I AM i at the end", i);
      }
      //   for (i = 0; i < 5; i++) {
      //       console.log('i inside max!!')
      //     document.getElementById("day" + (i + 1) + "max").innerHTML =
      //       "max:" + Number(data.list[i].main.temp_max - 286.33).toFixed(1) + "°";
      //   }

      //   for (i = 0; i < 5; i++) {
      //     document.getElementById("img" + (i + 1)).src =
      //       "http://openweathermap.org/img/wn/" +
      //       data.list[i].weather[0].icon +
      //       ".jpeg";
      //   }
    })
    .catch((err) => {
      console.log("ERRRRRRR!!!!", err);
      alert("Something Went Wrong");
    });
}

function DefaultScreen() {
//   document.getElementById("cityInput").defaultValue = "Marysville";
//   GetInfo();""
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

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}



