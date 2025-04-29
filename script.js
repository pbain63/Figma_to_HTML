const hamburger = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

//Open Menu(Hamburger Clicks)
hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

// Close Menu (Close Button Click)
closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});
