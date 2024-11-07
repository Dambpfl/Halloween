/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// const navLogo = document.querySelector(".nav__logo")     " Test Rotation du Menu Halloween"

// navLogo.addEventListener("click", () => {
//     navLogo.classList.toggle("rotate")
// })


/*MENU SHOW */
/* Permet de faire dérouler le menu en cliquant sur l'icone d'ouverture' */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Permet de faire dérouler le menu en cliquant sur l'icone de fermeture */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quand on clique sur l'un des boutons du menu, le menu se ferme
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ATROPOS JS ===============*/
const myAtropos = Atropos({
    el: '.home__images',
    shadow: false,
    highlight: false,
  })

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Ajoute le menu lors du scrool sur un petit écran
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

