const feedBtn = document.getElementById("feedBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const feedText = document.getElementById("feedText");
const feedLine = document.getElementById("feedLine");

feedBtn.addEventListener("click", openMenu);

function openMenu(e) {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "flex";
    feedLine.style.display = "flex";
    feedText.style.color = "#0275b1";
  } else {
    dropdownMenu.style.display = "none";
    feedLine.style.display = "none";
    feedText.style.color = "#181818";
  }
  e.preventDefault();
}
