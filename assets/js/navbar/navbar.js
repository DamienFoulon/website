const navbarToggle = document.querySelector('.navbarToggle');
const navRight = document.querySelector('.nav-right');
const home = document.querySelector('.home');

navbarToggle.addEventListener("click", openNav);

function openNav() {
  if (navRight.style.visibility === "hidden" && window.screen.width <= 1200) {
    navRight.style.visibility = "visible";
    home.style.visibility = "visible";

  } else {
    navRight.style.visibility = "hidden";
    home.style.visibility = "hidden";
  }
} 