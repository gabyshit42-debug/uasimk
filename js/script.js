// Toggle class active <Toggel membuat tdk ada menjadi ada.. ada menjadi tdk ada>

const navbarNav = document.querySelector ('.navbar-nav');//untuk aktikan navbar <<active

// ketika hamburger menu di klik
document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klikk di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});