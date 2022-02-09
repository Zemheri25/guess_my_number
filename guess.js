let againButton = document.querySelector(".again__button");
let number = document.getElementById("number");
let checkButton = document.querySelector(".check__button");
let exactNumber = document.getElementById("exact__number2");
let soru = document.querySelector(".soru");
let trueFalse = document.querySelector(".true-false");
let highscore = document.getElementById("hightscore");
let guessTime = document.querySelector(".guess_time")


window.addEventListener("load", singnumber)

function singnumber() {
    exactNumber.value = Math.floor(Math.random()*101)
    
}

checkButton.addEventListener("click", check1);

function check1() {
        if(number.value == exactNumber.value) {
            trueFalse.innerHTML = "Congratulations You know it."
            trueFalse.style.color = "white"
            soru.style.visibility = "hidden";
            guessTime.innerHTML = 0
            highscore.innerHTML ++
           
            
            
        } else if(number.value > exactNumber.value) {
            trueFalse.innerHTML = "Please go down"
            trueFalse.style.color = "red"
            guessTime.innerHTML ++
            number.value = ""
            
        } else if (number.value < exactNumber.value) {
            trueFalse.innerHTML = "Please go higher"
            trueFalse.style.color = "red"
            guessTime.innerHTML ++
            number.value = ""
        }

        if (Number(guessTime.innerHTML) >=  10) {
            highscore.innerHTML --;
            soru.style.visibility = "visible";
            trueFalse.innerHTML = "lets start again";
            guessTime.innerHTML = 0
            
        } 
    
        

        
}

againButton.addEventListener("click", again)

function again () {
    number.value = ""
    exactNumber.value = Math.floor(Math.random()*101)
    soru.style.visibility = "visible"
    trueFalse.innerHTML = ""
}