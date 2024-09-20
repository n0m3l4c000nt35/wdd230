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
