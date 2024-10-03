const iconWeather = document.querySelector("#iconWeather");
const temperatureWeather = document.querySelector("#temperatureWeather");
const descriptionWeather = document.querySelector("#descriptionWeather");

const appid = "6cb1908f96a8d0de94dc16dd4b788fe2";
const lat = "-34.66";
const lon = "-58.67";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  iconWeather.setAttribute("src", iconsrc);
  iconWeather.setAttribute("alt", data.weather[0].description);
  temperatureWeather.innerHTML = `${data.main.temp}&deg;F`;
  descriptionWeather.innerHTML = data.weather[0].description;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();
