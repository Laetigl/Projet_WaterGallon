//Buttons + and -
let allbuttonAdding = document.querySelectorAll(".add")
console.log(allbuttonAdding);
let allbuttonRemoving = document.querySelectorAll(".remove")
console.log(allbuttonRemoving);

//Content of jar
let cupIngredient = 0
let percentIngredient = 0
let maxrestant = 100

//Jar : container
let maxCup = 8;
let minCup = 0;

//Actual content
let actualContentCup = document.querySelector(".actualPercent")
// let actualContentMl = document.querySelector(".actualPercent")
let actualContentPercent = document.querySelector(".actualPercent")
let levelPercent = document.querySelector(".progressingPercent")
let remain = document.querySelector(".remainPercent")

//Color blend
let colorFillin = ["#a5f2bf","#d98d3d","d9713d","f28dd5","#b84d6a",'#e3cad6',"#b7caf7","#a2f5f3"]

// function randomColorJar() {
//     let rainbow = Math.floor(Math.random()* colorFillin.length) //getting the index but not the value
//     return colorFillin[rainbow]
// }


//Addlistener : adding/removing with click 
allbuttonAdding.forEach(element =>{
    element.addEventListener('click', (adding))
    
    function randomColorJar() {
        let rainbow = Math.floor(Math.random()* colorFillin.length) //getting the index but not the value
        return colorFillin[rainbow]
    }
    levelPercent.style.backgroundColor= randomColorJar()
})

allbuttonRemoving.forEach(index => {
    index.addEventListener('click', (removing))
})


//Functions : adding / removing
function adding() {
    cupIngredient ++;
    percentIngredient = (cupIngredient/maxCup)*100;
    left = 100

    //Actual fill in
    actualContentCup.textContent = `${cupIngredient/8}`;
    actualContentPercent.textContent = `${percentIngredient}%`;
    levelPercent.style.height = `${percentIngredient}%` //assigner la hauteur de la jar de progression au pourcentage ajouté (100% = jar complète)
    remain.innerText = (`${left}` - `${percentIngredient}`)+ `%`
    
    console.log(cupIngredient,percentIngredient);
    console.log(remain.innerText);

    if (cupIngredient === maxCup) { //stop l'action du bouton(rendu inactif) quand on a atteint le max
        allbuttonAdding.forEach(element => {
            element.disabled = true
        });
        levelPercent.style.width="99%"
        // levelPercent.innerText="Ready to drink"
        levelPercent.style.backgroundImage="linear-gradient(to top,rgb(123, 211, 234), rgb(255, 155, 210))"
        actualContentPercent.textContent=""
        remain.innerText="100% ready to drink !"
        remain.style.fontFamily="Arial"
        remain.style.fontSize="20px"
        remain.style.color="white"
        remain.style.paddingTop="40%"
        remain.style.fontFamily="Josefin Sans', sans-serif"

    
    } else {
        allbuttonRemoving.forEach(element => {
            element.disabled = false
        });
    }
}

function removing() {
    cupIngredient --;
    percentIngredient = (cupIngredient/maxCup)*100;

    //Removing fill in
    actualContentCup.textContent = `${cupIngredient/8}`;
    actualContentPercent.textContent = `${percentIngredient}%`;
    levelPercent.style.height = `${percentIngredient}%` //assigner la hauteur de la jar de progression au pourcentage ajouté (100% = jar complète)
    remain.textContent = `${left}` - `${percentIngredient}`+ `%`

    console.log(cupIngredient,percentIngredient);

    if (cupIngredient == minCup) { //stop l'action du bouton(rendu inactif) quand on a atteint le max
        allbuttonRemoving.forEach(element => {
            element.disabled = true
        });
        // allbuttonRemoving.disabled = true //mettre le bouton en inactif dans le HTML : par défaut on ne peut retirer quelque chose si on a rien de base !!!
        
    } else {
        allbuttonAdding.forEach(element => {
            element.disabled = false
        });
    }

}