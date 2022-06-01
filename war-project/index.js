let deckId
const cardsContainer = document.getElementById('cards')
const newDeckBtn = document.getElementById('new-deck')
const drawCardsBtn = document.getElementById('draw-cards')
const header = document.getElementById('header')

function handleClick(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id
        console.log(deckId)
    })
}

newDeckBtn.addEventListener('click', handleClick)
drawCardsBtn.addEventListener('click', drawCards)

function drawCards(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        cardsContainer.children[0].innerHTML = `
            <img src='${data.cards[0].image}' class='card'>
        `
        cardsContainer.children[1].innerHTML = `
            <img src='${data.cards[1].image}' class='card'>
        `
        const winnerText = determineWhoWins(data.cards[0], data.cards[1])
        header.textContent = winnerText
    })
}

function determineWhoWins(card1, card2){
    const cardValueOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
    const cardOptionValue1 = cardValueOptions.indexOf(card1.value)
    const cardOptionValue2 = cardValueOptions.indexOf(card2.value)

    if(cardOptionValue1 > cardOptionValue2){
        return 'Player 1 Wins'
    } else if(cardOptionValue1 < cardOptionValue2){
        return 'Player 2 Wins'
    } else {
        return 'Tie'
    }
}

// const cardObj1 = {
//     value: 'JACK'
// }

// const cardObj2 = {
//     value: '2'
// }

// determineWhoWins(cardObj1, cardObj2)