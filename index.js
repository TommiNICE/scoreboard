let resultHome = 0
let resultGuest = 0

function plusOne() {
    resultHome += 1
    document.getElementById("score-home").textContent = resultHome 
}

function plusTwo() {
    resultHome += 2
    document.getElementById("score-home").textContent = resultHome 
}

function plusThree() {
    resultHome += 3
    document.getElementById("score-home").textContent = resultHome 
}

function plusOneGuest() {
    resultGuest += 1
    document.getElementById("score-guest").textContent = resultGuest 
}

function plusTwoGuest() {
    resultGuest += 2
    document.getElementById("score-guest").textContent = resultGuest 
}

function plusThreeGuest() {
    resultGuest += 3
    document.getElementById("score-guest").textContent = resultGuest 
}

function minusOne() {
    resultHome -= 1
    document.getElementById("score-home").textContent = resultHome 
}

function minusTwo() {
    resultHome -= 2
    document.getElementById("score-home").textContent = resultHome 
}

function minusThree() {
    resultHome -= 3
    document.getElementById("score-home").textContent = resultHome 
}

function minusOneGuest() {
    resultGuest -= 1
    document.getElementById("score-guest").textContent = resultGuest 
}

function minusTwoGuest() {
    resultGuest -= 2
    document.getElementById("score-guest").textContent = resultGuest 
}

function minusThreeGuest() {
    resultGuest -= 3
    document.getElementById("score-guest").textContent = resultGuest 
}

function reset() {
    document.getElementById("score-guest").textContent = 0 
    document.getElementById("score-home").textContent = 0 


}