// let bigJar = document.querySelector("#jar")
// let cupJar = document.getElementsByClassName("ingredients")

let actualJar = document.querySelectorAll("div")[1] //partie jar vide

//Buttons + and -
// let buttonAdding = document.querySelector(".add") //teste avec le 1er

let allbuttonAdding = document.querySelectorAll(".add")
console.log(allbuttonAdding);
// let buttonRemoving = document.querySelector(".remove")
let allbuttonRemoving = document.querySelectorAll(".remove")
console.log(allbuttonRemoving);

//Content of jar
let cupIngredient = 0
let mlIngredient = 0
let percentIngredient = 0

//Jar : container
let maxCup;
let minCup;

//Actual content
let actualContentCup = document.querySelector(".actualPercent")
let actualContentMl = document.querySelector(".actualPercent")
let actualContentPercent = document.querySelector(".actualPercent")
let levelPercent = document.querySelector(".progressingPercent")

//Addlistener : adding/removing with click 
allbuttonAdding.forEach(element =>{
    element.addEventListener('click', (adding))
    maxCup=8
    minCup = 0
})

allbuttonRemoving.forEach(index => {
    index.addEventListener('click', (removing))
    maxCup=8
    minCup = 0
})


//Functions : adding / removing
function adding() {
    cupIngredient ++;
    mlIngredient +=125;
    percentIngredient = (cupIngredient/maxCup)*100;

    //Actual fill in
    actualContentCup.textContent = `${cupIngredient/8}/`;
    actualContentMl.textContent = `${mlIngredient/1000}`;
    actualContentPercent.textContent = `${percentIngredient}%`;
    levelPercent.style.height = `${percentIngredient}%` //assigner la hauteur de la jar de progression au pourcentage ajouté (100% = jar complète)

    console.log(cupIngredient,mlIngredient,percentIngredient);

    if (cupIngredient === maxCup) { //stop l'action du bouton(rendu inactif) quand on a atteint le max
        allbuttonAdding.forEach(element => {
            element.disabled = true
        });
        levelPercent.style.backgroundColor="green";
        levelPercent.style.width="99%"
        levelPercent.style.borderRadius ="0px 0px 50px 50px"


    } else {
        allbuttonRemoving.forEach(element => {
            element.disabled = false
        });
        // element.disabled = false //ok appuyer dessus (désactivation du bouton n'est pas activé)
    }
}

function removing() {
    cupIngredient --;
    mlIngredient -=125;
    percentIngredient = (cupIngredient/maxCup)*100;

    //Removing fill in
    actualContentCup.textContent = `${cupIngredient/8}/`;
    actualContentMl.textContent = `${mlIngredient/1000}`;
    actualContentPercent.textContent = `${percentIngredient}%`;
    levelPercent.style.height = `${percentIngredient}%` //assigner la hauteur de la jar de progression au pourcentage ajouté (100% = jar complète)
    console.log(cupIngredient,mlIngredient,percentIngredient);

    if (cupIngredient == minCup) { //stop l'action du bouton(rendu inactif) quand on a atteint le max
        allbuttonRemoving.forEach(element => {
            element.disabled = true
        });
        // allbuttonRemoving.disabled = true //mettre le bouton en inactif dans le HTML : par défaut on ne peut retirer quelque chose si on a rien de base !!!
        
    } else {
        allbuttonAdding.forEach(element => {
            element.disabled = false
        });
        // element.disabled = true //ok appuyer dessus pour ajouter
    }

}