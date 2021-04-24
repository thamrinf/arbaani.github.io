// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

//  active dan remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Dinda Safira Arba'ani"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*SCROLL HOME*/
    sr.reveal('.home__title', {});
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });

/*SCROLL ABOUT*/
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 400 });
    sr.reveal('.about__text', { delay: 400 });

/*SCROLL WORK*/
    sr.reveal('.work__img', { interval: 200 });
    sr.reveal('.work__input', { interval: 200 });

/*SCROLL DESIGN*/
    sr.reveal('.design__img', { interval: 200 });
 
/*PRELOADING*/ 
    window.onload = () => {
        setTimeout(() => {
          document.querySelector("body").classList.add("display");
        }, 4000);
      };
