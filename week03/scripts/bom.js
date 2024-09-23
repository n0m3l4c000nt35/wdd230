const $input = document.querySelector("#favchap");
const $button = document.querySelector("button");
const $list = document.querySelector("#list");

$button.addEventListener("click", () => {
  if ($input.value != "") {
    displayList($input.value);
    chaptersArray.push($input.value);
    setChapterList();
    $input.value = "";
    $input.focus();
  } else {
    alert("Enter Book and Chapter!");
    $input.focus();
  }
});

function displayList(item) {
  let $li = document.createElement("li");
  let $deletebutton = document.createElement("button");
  $li.textContent = item;
  $deletebutton.textContent = "❌";
  $deletebutton.classList.add("delete");
  $li.append($deletebutton);
  $list.append($li);
  $deletebutton.addEventListener("click", () => {
    $list.removeChild($li);
    deleteChapter($li.textContent);
    $input.focus();
  });
}

const setChapterList = () =>
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));

const getChapterList = () => JSON.parse(localStorage.getItem("myFavBOMList"));

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));
