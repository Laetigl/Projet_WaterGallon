//Buttons + and -
let allbuttonAdding = document.querySelectorAll(".add")
let allbuttonRemoving = document.querySelectorAll(".remove")

//Content of jar
let cupIngredient = 0
let percentIngredient = 0
let maxrestant = 100

//Jar : container
let maxCup = 8;
let minCup = 0;

//Actual content
let actualContentCup = document.querySelector(".actualPercent")
let actualContentPercent = document.querySelector(".actualPercent")
let levelPercent = document.querySelector(".progressingPercent")
let remain = document.querySelector(".remainPercent")

//Color blend of the jar
let colorFillin = ["#a5f2bf","#d98d3d","d9713d","f28dd5","#b84d6a",'#e3cad6',"#b7caf7","#a2f5f3"]

//Addlistener : adding/removing with click. For each button, we'll do an listener of events taht with call the function (adding or removing created below)
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
    levelPercent.style.height = `${percentIngredient}%` //assigning the height of the jar related to the percentage added
    remain.innerText = (`${left}` - `${percentIngredient}`)+ `%` //variable that will display the remained content of the jar

    if (cupIngredient === maxCup) { // condition that will stop the action of each button if the content reached the max cup. With the disabled property will make the button unclickable : it's what we want for not going above 100%
        allbuttonAdding.forEach(element => {
            element.disabled = true
        });
        //Styling the progression in the gar when the cup is full
        levelPercent.style.backgroundImage="linear-gradient(to top,rgb(123, 211, 234), rgb(235, 75, 163))"
        actualContentPercent.textContent=""
        remain.innerText="100% ready to drink !"
        remain.style.textAlign="center"
        remain.style.fontFamily="Arial"
        remain.style.fontSize="30px"
        remain.style.color="white"
        remain.style.paddingTop="40%"
    
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
    levelPercent.style.height = `${percentIngredient}%`
    remain.textContent = `${left}` - `${percentIngredient}`+ `%`

    if (cupIngredient == minCup) { // condition that will stop the action of each button if the content is in the min level. With the disabled property will make the button unclickable : it's what we want for not going under 0%
        allbuttonRemoving.forEach(element => {
            element.disabled = true
        });
        
    } else {
        allbuttonAdding.forEach(element => {
            element.disabled = false
        });
    }

}