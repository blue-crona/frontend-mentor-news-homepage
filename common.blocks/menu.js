const menuHamburger = document.querySelector(".hamburger");
const menuClose = document.querySelector(".menu--close");
const menu = document.querySelector(".menu");

menuHamburger.addEventListener("click", () => {
  menu.classList.add("menu--open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});
