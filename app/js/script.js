const btnCheckbox = document.getElementById("checkbox");
const menu = document.getElementById("linksMenu");
function toggleMenu() {
  menu.classList.toggle("visible");
}
btnCheckbox.addEventListener("click", toggleMenu);
