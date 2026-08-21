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
const menuListe = document.querySelector('.menu__liste');

if (window.innerWidth <= 950) {
    if(menuToggle){
        // click sur le bouton
        menuToggle.addEventListener("click", ()=>{
            menu.classList.toggle("menu--open")
        });
    
        // click sur les liens 
        for(let menuLink of menuLinks){
            menuLink.addEventListener("click",() =>{
                menu.classList.remove("menu--open")
            } );
        }

    }
}
//si on ne sort pas du if aux desu il ne marche pas aux desu de 950 px
for (let menuLink of menuLinks) {
    const lien = new URL(menuLink.href).pathname;
    const chemain = window.location.pathname;

    if ( lien === chemain) {
        menuLink.classList.add("active")
    }
}



// function pour ouvrir et fermer le menu
function menuOpen(){
    menu.classList.toggle("menu--open");
}


//calculateur
//reprendre la dose et le rmax et le texte de chac substence pour le mettre dans le calcule
const substence = {
    "D_Bol": {dose: 10, rmax: 500, texte:"Augmentation de la masse musculaire et amélioration des performances physiques. Dépassement : En cas de dépassement il y a des risques accrus de troubles hormonaux, gynécomastie et atrophie testiculaire."},
    "EPO": {dose: 0.02, rmax: 250, texte:"Augmentation de l’endurance et amélioration du transport d’oxygène Dépassement : Risque de thrombose, hypertension, arrêt cardiaque et douleurs musculaires."},
    "Amphet": {dose: 5, rmax: 40, texte:"Augmentation de l’énergie, réduction de la fatigue et stimulation Dépassement : En cas de dépassement, risque d’agitation, troubles du sommeil, anxiété et problèmes cardiovasculaires."},
    "Modafinil": {dose: 100, rmax: 60, texte:"Amélioration de la vigilance, de la concentration et du temps de réaction Dépassement : En cas de dépassement, risque d’insomnie, agitation, anxiété, maux de tête et troubles digestifs.Amélioration de la vigilance, de la concentration et du temps de réaction Dépassement : En cas de dépassement, risque d’insomnie, agitation, anxiété, maux de tête et troubles digestifs."},
    "Nicotine": {dose: 20, rmax: 40, texte:"Les sachets de Nicotine améliorent la concentration et la vigilance sans les inconvénients du tabac et de la cigarette.Dépassement : En cas de dépassement, risque de nausées, maux de tête, palpitations et malaise."},
    "Cafeine": {dose: 100, rmax: 4, texte:"Amélioration de la vigilance et réduction de la fatigue. Dépassement : En cas de dépassement, risque de nervosité, troubles du sommeil, palpitations et troubles cardiovasculaires."},
    "Ritaline": {dose: 20, rmax: 25, texte:"Amélioration de la concentration, de l’attention et de la vigilance Dépassement : En cas de dépassement, risque d’agitation, troubles du sommeil, anxiété et problèmes cardiovasculaires."},
    "LSD": {dose: 0.05, rmax: 60, texte:"Modification des perceptions, créativité et imagination accrue. Dépassement : En cas de dépassement, risque d’hallucinations intenses, d’anxiété, de confusion et de bad trip."},
    "THC": {dose: 7.5, rmax: 25, texte:"Relaxation, détente et modification des perceptions Dépassement : En cas de dépassement, risque d’anxiété, confusion, troubles de la mémoire et perte de coordination."},
    "Cocaïne": {dose: 100, rmax: 600, texte:"Euphorie, augmentation de l'énergie et de la confiance en soi. Dépassement : En cas de dépassement, risque d’addiction, de convulsion, de crise cardiaque ou d’accident vasculaire cérébral."},
    "MDMA": {dose: 40, rmax: 50, texte:"Euphorie, empathie et stimulation sociale. Dépassement : En cas de dépassement, risque d’anxiété, troubles du sommeil, malaise et effets indésirables."},
    "CBD": {dose: 10, rmax: 4, texte:"Relaxation, détente et réduction du stress. Dépassement : En cas de dépassement, risque de légère somnolence, et troubles digestifs. "},
    "Alcool": {dose: 10000, rmax: 12, texte:"Désinhibition, détente et sensation de bien-être. Dépassement : En cas de dépassement, risque de perte de coordination, troubles du jugement, malaise et dépendance."},
    "Sucre": {dose: 20000, rmax: 3, texte:"Augmentation rapide de l’énergie et sensation de plaisir. Dépassement : En cas de dépassement, risque de fatigue, déséquilibre alimentaire et problèmes métaboliques."},
    "Viagra": {dose: 50, rmax: 24, texte:"Amélioration de la fonction érectile.Dépassement : En cas de dépassement, risque de maux de tête, vertiges, troubles visuels, palpitations et chute de tension."},
};
//recupe le bouton le titre et le texte
const btnCalcul = document.querySelector('.btn__click--calcule');
const reponce = document.querySelector('.calculateur__reponce--titre');
const texte = document.querySelector('.calculateur__reponce--texte');


if(btnCalcul){
    // click sur le bouton
    btnCalcul.addEventListener("click", resulta);
}
//fonction pour le calcule
function resulta() {
    //variable dans la fonction pour mettre .value a la fin
    var drogue = document.getElementById('drogue-select').value;
    var poids = document.getElementById('poids').value;
    var taille = document.getElementById('taille').value;
    var heures = document.getElementById('heures').value;

    //on reprens la dose et le rmax dans substense en reprene l'input drogue ( la reponce utilisateur)
    const { dose, rmax, texte } = substence[drogue];
    //on converti la taille pour la calcul et on calcule l'imc
    const tailleMetre = taille / 100;
    const imc = poids/(tailleMetre ** 2)

    //clacule final
    const df = dose * (imc/25) * (1 / (1 + (rmax / (1 + heures))));

    document.querySelector(".calculateur__reponce--titre").textContent = Math.round(df) + " mg";
    document.querySelector(".calculateur__reponce--texte").textContent = texte;
    console.log(df);
}


// equilibre nationale

const number = document.querySelector('.menu__valeur');

setInterval(function(){
    var aleatoir = (Math.random() * (99 - 80)+ 80).toFixed(1);
    document.querySelector(".menu__valeur").textContent = aleatoir + "%";
  }, 2000);

