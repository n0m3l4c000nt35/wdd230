const main = document.querySelector("#directory");
const gridViewButton = document.querySelector("#gridViewButton");
const listViewButton = document.querySelector("#listViewButton");

const urlMembers = "https://n0m3l4c000nt35.github.io/wdd230/chamber/data/members.json";

const displayMembers = members => {
  members.forEach(({ name, image, address, website, phone }) => {
    main.innerHTML += `
      <div class="memberCard">
        <img src="https://n0m3l4c000nt35.github.io/wdd230/chamber/images/${image}" alt="${name}" width="500" height="500" loading="lazy">
        <h2>${name}</h2>
        <p>
          <span class="phone">${phone}</span>
          <span>${address}</span>
        </p>
        <a href="${website}" target="_blank">Website</a>
      </div>
    `;
  });
};

const fetchMembers = async () => {
  const response = await fetch(urlMembers);
  const { members } = await response.json();
  displayMembers(members);
};

gridViewButton.addEventListener("click", () => {
  main.classList.remove("directoryListView");
  main.classList.add("directoryGridView");
});
listViewButton.addEventListener("click", () => {
  main.classList.remove("directoryGridView");
  main.classList.add("directoryListView");
});

fetchMembers();
