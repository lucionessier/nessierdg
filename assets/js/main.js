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


/* ACCORDION SKILLS */

const skillsContent = document.getElementsByClassName('skillsContent'),
      skillsHeader = document.querySelectorAll('.skillsHeader')


function toggleSkills () {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skillsContent skillsClose'
    }

    if (itemClass === 'skillsContent skillsClose') {
        this.parentNode.className = 'skillsContent skillsOpen'
    }
    
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// QUALIFICATIONS TABS

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');


tabs.forEach(tab => {
    tab.addEventListener('click' , () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualificationActive')
        })

        target.classList.add('qualificationActive');

        tabs.forEach(tab => {
            tab.classList.remove('qualificationActive');
        })

        tab.classList.add('qualificationActive')
    })
})     


/* SERVICES MODAL */

const modalViews = document.querySelectorAll('.servicesModal'),
      modalBtns = document.querySelectorAll('.servicesButton'),
      modalCloses = document.querySelectorAll('.servicesModalClose')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('activeModal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('activeModal');
        })
    })
})


/* PORTFOLIO SWIPER */

let swiper = new Swiper('.portfolioContainer', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*CHANGE BACKGROUND HEADER */ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* SHOW SCROLL UP */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)