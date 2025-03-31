const btnCheckbox = document.getElementById("checkbox");
const menu = document.getElementById("linksMenu");
function toggleMenu() {
  menu.classList.toggle("visible");
}
btnCheckbox.addEventListener("click", toggleMenu);

window.addEventListener("offline", () => {
  alert("Você esta offline");
});

window.addEventListener("online", () => {
  alert("Você esta online");
});
