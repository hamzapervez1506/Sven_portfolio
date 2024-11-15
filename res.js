let burger= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

burger.onclick = () => {
    burger.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  }