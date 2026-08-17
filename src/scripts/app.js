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


//calculateur

const substence = {
    "D_Bol": {dose: 10, rmax: 500},
    "EPO": {dose: 0.02, rmax: 250},
    "Amphet": {dose: 5, rmax: 40},
    "Modafinil": {dose: 100, rmax: 60},
    "Nicotine": {dose: 20, rmax: 40},
    "Cafeine": {dose: 100, rmax: 4},
    "Ritaline": {dose: 20, rmax: 25},
    "LSD": {dose: 0.05, rmax: 60},
    "THC": {dose: 7.5, rmax: 25},
    "Cocaïne": {dose: 100, rmax: 600},
    "MDMA": {dose: 40, rmax: 50},
    "CBD": {dose: 10, rmax: 4},
    "Alcool": {dose: 10000, rmax: 12},
    "Sucre": {dose: 20000, rmax: 3},
    "Viagra": {dose: 50, rmax: 24},
};

const btnCalcul = document.querySelector('.btn__click--calcule');

if(btnCalcul){
    // click sur le bouton
    btnCalcul.addEventListener("click", resulta);
}

function resulta() {
    var drogue = document.getElementById('drogue-select').value;
    var poids = document.getElementById('poids').value;
    var taille = document.getElementById('taille').value;
    var heures = document.getElementById('heures').value;

    const { dose, rmax } = substence[drogue];
    const tailleMetre = taille / 100;
    const imc = poids/(tailleMetre ** 2)

    //clacule final

    const df = dose * (imc/25) * (1 / (1 + (rmax / (1 + heures))));

    console.log(df);
}