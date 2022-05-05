const navbarToggle = document.querySelector('.navbarToggle');
const navRight = document.querySelector('.nav-right');
const home = document.querySelector('.home');
const navItems = document.querySelectorAll('.navbar a');

function openNav() {
  if (navRight.style.visibility === "hidden" && window.screen.width <= 1200) {
    navRight.style.visibility = "visible";
    home.style.visibility = "visible";

  } else {
    navRight.style.visibility = "hidden";
    home.style.visibility = "hidden";
  }
}

function setActive(){
  let current = document.querySelector('.active');
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    current.classList.remove('active');
  } else {
    this.classList.add('active');
    current.classList.remove('active');
  }
}

for(let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', setActive);
}

navbarToggle.addEventListener("click", openNav);