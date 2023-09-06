// toggle class active navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};
