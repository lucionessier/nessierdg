// SHOW AND HIDE MENU

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// SHOW MENU

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// HIDE MENU
// Constant validation

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*  REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each navLink, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))