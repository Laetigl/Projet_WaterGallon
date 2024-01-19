// let bigJar = document.querySelector("#jar")
// let cupJar = document.getElementsByClassName("ingredients")

let actualJar = document.querySelectorAll("div")[1] //partie jar vide

//Buttons + and -
let buttonAdding = document.querySelector(".add") //teste avec le 1er
let buttonRemoving = document.querySelector(".remove")

//Content of jar
let cupIngredient = 0
let maxCup = 100

//Actual content


//Addlistener : adding/removing with click 
buttonAdding.addEventListener('click', (adding))

// buttonRemoving.addEventListener('click', (removing))


//Functions : adding / removing
function adding(params) {
    cupIngredient +=125
    console.log(cupIngredient);
}

