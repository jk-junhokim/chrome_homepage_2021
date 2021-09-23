const API_KEY = "84bcbe8d9d70e4646add98d762be5c30";

function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  console.log(fetch(url));
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} F`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);