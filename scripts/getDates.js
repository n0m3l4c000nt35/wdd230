const $year = document.querySelector("#currentyear");
const $lastModified = document.querySelector("#lastModified");
const $btnBurguerMenu = document.querySelector("#btnBurguerMenu");
const $menuLinks = document.querySelector("#animated");
const $modeButton = document.querySelector("#mode");
const $main = document.querySelector("main");
const $visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
const today = new Date();

$year.innerHTML = today.getFullYear();
$lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

$btnBurguerMenu.addEventListener("click", () => {
  $menuLinks.classList.toggle("open");
  $btnBurguerMenu.classList.toggle("open");
});

$modeButton.addEventListener("click", () => {
  if ($modeButton.textContent.includes("☀️")) {
    document.body.style.backgroundColor = "#fff";
    $main.style.background = "#fff";
    $main.style.color = "#000";
    $main.querySelector("h1").style.color = "#3b3b3b";
    $main.querySelectorAll("li").forEach(el => (el.style.color = "#000"));
    $main.querySelectorAll("a").forEach(el => (el.style.color = "#000"));
    $modeButton.textContent = "🌙";
  } else {
    document.body.style.backgroundColor = "#1a1a1a";
    $main.style.backgroundColor = "#1a1a1a";
    $main.querySelector("h1").style.color = "#fff";
    $main.querySelectorAll("li").forEach(el => (el.style.color = "#fff"));
    $main.querySelectorAll("a").forEach(el => (el.style.color = "#fff"));
    $main.style.color = "#fff";
    $modeButton.textContent = "☀️";
  }
});

if ($visitsDisplay) {
  if (numVisits !== 0) {
    $visitsDisplay.textContent = `Visit Count: ${numVisits}`;
  } else {
    $visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
  }
  numVisits++;
  localStorage.setItem("numVisits", numVisits);
}
