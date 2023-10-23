// Home score
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

// Guest score
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-1")

let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

// Reset button
let resetBtn = document.getElementById("reset-btn")

// Home score functions
function increaseHomeScoreOne(){
    console.log("home +1 clicked")
    homeScore +=1
    homeStoreEl.textContent = homeScore   
}
function increaseHomeScoreTwo(){
    console.log("home +2 clicked")
    homeScore +=2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    console.log("home +3 clicked")
    homeScore +=3
    homeStoreEl.textContent = homeScore
}

// Guest score functions
function increaseGuestScoreOne() {
    console.log("guest +1 clicked")
    guestScore +=1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    console.log("guest +2 clicked")
    guestScore +=2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    console.log("guest +3 clicked")
    guestScore +=3
    guestStoreEl.textContent = guestScore
}

function resetScore() {
    console.log("reset clicked")
    guestScore = 0
    homeScore = 0
    guestStoreEl.textContent = guestScore
    homeStoreEl.textContent = homeScore
}


