const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

const navs = [...document.getElementsByTagName("nav")];

openMenuBtn.addEventListener("click", () => {
  navs[0].classList.add("menu-active");
});

closeMenuBtn.addEventListener("click", () => {
  navs[0].classList.remove("menu-active");
});
