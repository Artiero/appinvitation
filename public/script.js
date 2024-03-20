// Navbar-Fix

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fix');
    } else{
        header.classList.remove('navbar-fix');
    }
}

// Humberger

const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');
const header = document.querySelector('#home');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
    header.classList.toggle('header-home');
});