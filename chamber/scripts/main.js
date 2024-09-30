const $year = document.querySelector("#currentYear");
const $lastModified = document.querySelector("#lastModified");
const $btnBurguerMenu = document.querySelector("#menu-button");
const $menuLinks = document.querySelector("#navbar");

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
