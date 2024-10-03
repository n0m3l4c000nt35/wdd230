const weekList = document.querySelector("#weekList");

const baseURL = "https://n0m3l4c000nt35.github.io/wdd230/";
const linksURL = "https://n0m3l4c000nt35.github.io/wdd230/data/links.json";

function displayLinks(weeks) {
  console.log(weeks);
}

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();
