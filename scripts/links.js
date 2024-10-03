const weekList = document.querySelector("#weekList");

const baseURL = "https://n0m3l4c000nt35.github.io/wdd230/";
const linksURL = "https://n0m3l4c000nt35.github.io/wdd230/data/links.json";

function displayLinks(weeks) {
  weeks.forEach(({ week, links }) => {
    const li = document.createElement("li");
    const b = document.createElement("b");
    b.textContent = `${week}: `;
    li.appendChild(b);
    links.forEach(({ title, url }, index) => {
      const a = document.createElement("a");
      a.textContent = title;
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      li.appendChild(a);
      if (index !== links.length - 1) {
        a.insertAdjacentText("afterend", " | ");
      }
    });
    weekList.appendChild(li);
  });
}

async function getLinks() {
  const response = await fetch(linksURL);
  const { weeks } = await response.json();
  displayLinks(weeks);
}

getLinks();
