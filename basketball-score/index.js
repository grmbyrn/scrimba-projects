const homeScore = document.getElementById('home-score')
const awayScore = document.getElementById('away-score')

const homeOne = document.getElementById('home-one')
const homeTwo = document.getElementById('home-two')
const homeThree = document.getElementById('home-three')

const awayOne = document.getElementById('away-one')
const awayTwo = document.getElementById('away-two')
const awayThree = document.getElementById('away-three')

let homeCount = 0
let awayCount = 0

homeOne.addEventListener('click', incrementHomeOne)
homeTwo.addEventListener('click', incrementHomeTwo)
homeThree.addEventListener('click', incrementHomeThree)

awayOne.addEventListener('click', incrementAwayOne)
awayTwo.addEventListener('click', incrementAwayTwo)
awayThree.addEventListener('click', incrementAwayThree)

function incrementHomeOne(){
    homeCount ++
    homeScore.textContent = homeCount
}

function incrementHomeTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function incrementHomeThree(){
    homeCount += 3
    homeScore.textContent = homeCount
}


function incrementAwayOne(){
    awayCount ++
    awayScore.textContent = awayCount
}

function incrementAwayTwo(){
    awayCount += 2
    awayScore.textContent = awayCount
}

function incrementAwayThree(){
    awayCount += 3
    awayScore.textContent = awayCount
}