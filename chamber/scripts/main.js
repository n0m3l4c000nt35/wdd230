const $year = document.querySelector("#currentYear");
const $lastModified = document.querySelector("#lastModified");
const $btnBurguerMenu = document.querySelector("#menu-button");
const $menuLinks = document.querySelector("#navbar");

const lat = "-34.66";
const lon = "-58.67";
const appid = "6cb1908f96a8d0de94dc16dd4b788fe2";
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}`;

const today = new Date();

$year.innerHTML = `&copy;${today.getFullYear()} Ituzaingó Chamber`;
$lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

$btnBurguerMenu.addEventListener("click", () => {
  $menuLinks.classList.toggle("open");
  $btnBurguerMenu.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    const lastVisitKey = "lastVisitDate";
    const now = Date.now();

    const lastVisit = localStorage.getItem(lastVisitKey);
    let message;

    if (lastVisit) {
      const lastVisitDate = new Date(parseInt(lastVisit));
      const daysSinceLastVisit = Math.floor((now - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24));

      if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
      } else {
        const dayText = daysSinceLastVisit === 1 ? "day" : "days";
        message = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
      }
    } else {
      message = "Welcome!";
    }

    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = message;
    sidebar.appendChild(welcomeMessage);
    localStorage.setItem(lastVisitKey, now.toString());
  }
});

const $timestampInput = document.querySelector("#timestamp");

if ($timestampInput) {
  $timestampInput.setAttribute("value", Date.now());
}

async function getWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const currentTemp = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    document.querySelector("#weather").innerHTML += `<p>${currentTemp.toFixed(1)}°C</p>`;
    document.querySelector("#weather").innerHTML += `<p>${description}</p>`;

    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(1, 4);
    const forecastContainer = document.createElement("div");
    forecast.forEach(day => {
      const date = new Date(day.dt * 1000).toLocaleDateString("es-AR", { weekday: "short" });
      const temp = day.main.temp;
      forecastContainer.innerHTML += `<p>${date}: ${temp.toFixed(1)}°C</p>`;
    });
    document.querySelector("#weather").appendChild(forecastContainer);
  } catch (error) {
    const weatherContainer = document.querySelector("#weather");
    const errorContent = document.createElement("p");
    errorContent.textContent = "Error fetching weather data";
    weatherContainer.appendChild(errorContent);
  }
}
if (window.location.pathname.includes("index.html")) {
  document.getElementById("close-banner").addEventListener("click", function () {
    document.getElementById("event-banner").style.display = "none";
  });
  getWeatherData();
  loadSpotlights();
  showEventBanner();
}

async function loadSpotlights() {
  const response = await fetch("https://n0m3l4c000nt35.github.io/wdd230/chamber/data/members.json");
  const data = await response.json();
  const qualifiedMembers = data.members.filter(
    member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
  );

  const spotlights = document.querySelector("#spotlightsContainer");
  spotlights.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    if (qualifiedMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
      const member = qualifiedMembers.splice(randomIndex, 1)[0];
      spotlights.innerHTML += `
        <div class="spotlight">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <a href="${member.website}" target="_blank">Website</a>
        </div>
      `;
    }
  }
}

function showEventBanner() {
  const today = new Date().getDay();
  if (today >= 1 && today <= 3) {
    document.getElementById("event-banner").style.display = "block";
  }
}
