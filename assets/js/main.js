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