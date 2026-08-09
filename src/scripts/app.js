"use strict"
//flash carte
document.querySelectorAll('.flashCard__carte').forEach(carte => {
    const card = carte.querySelector('.flashCard__inner');
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

//nav
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

if(menuToggle){
    // click sur le bouton
    menuToggle.addEventListener("click", menuOpen);

    // click sur les liens 
    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", menuOpen);
    }
}
// function pour ouvrir et fermer le menu
function menuOpen(){
    menu.classList.toggle("menu--open");
}
