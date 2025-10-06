const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
let isOpen = false;

navToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  navList.classList.toggle("nav--visible");
  navToggle.textContent = isOpen ? "✖" : "☰";
  navToggle.setAttribute("aria-expanded", isOpen);
});
