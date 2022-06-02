let deckId
let computerScore = 0
let playerScore = 0
const cardsContainer = document.getElementById('cards')
const newDeckBtn = document.getElementById('new-deck')
const drawCardsBtn = document.getElementById('draw-cards')
const header = document.getElementById('header')
const remainingCards = document.getElementById('remaining')
const computerScoreEl = document.getElementById('computer-score')
const playerScoreEl = document.getElementById('player-score')

async function handleClick(){
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const data = await res.json()
    remainingCards.innerHTML = `Remaining Cards: ${data.remaining}`
    deckId = data.deck_id
    console.log(deckId)
}

newDeckBtn.addEventListener('click', handleClick)
drawCardsBtn.addEventListener('click', drawCards)

async function drawCards(){
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    const data = await res.json()
    remainingCards.innerHTML = `Remaining Cards: ${data.remaining}`
    cardsContainer.children[0].innerHTML = `
        <img src='${data.cards[0].image}' class='card'>
    `
    cardsContainer.children[1].innerHTML = `
        <img src='${data.cards[1].image}' class='card'>
    `
    const winnerText = determineWhoWins(data.cards[0], data.cards[1])
    header.textContent = winnerText

    if(data.remaining === 0){
        drawCardsBtn.disabled = true
        if(computerScore > playerScore){
            header.textContent = 'The computer wins!'
        } else if (computerScore < playerScore){
            header.textContent = 'The player wins!'
        } else if(computerScore === playerScore){
            header.textContent = 'War!'
        }
    }
}

function determineWhoWins(card1, card2){
    const cardValueOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
    const cardOptionValue1 = cardValueOptions.indexOf(card1.value)
    const cardOptionValue2 = cardValueOptions.indexOf(card2.value)

    if(cardOptionValue1 > cardOptionValue2){
        computerScore++
        computerScoreEl.innerHTML = `Computer Score: ${computerScore}`
        return 'Computer Wins'
    } else if(cardOptionValue1 < cardOptionValue2){
        playerScore++
        playerScoreEl.innerHTML = `Player Score: ${playerScore}`
        return 'Player Wins'
    } else {
        return 'War'
    }
}
