let deckId

function handleClick(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id
        console.log(deckId)
    })
}

document.getElementById('new-deck').addEventListener('click', handleClick)
document.getElementById('draw-cards').addEventListener('click', drawCards)

function drawCards(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('cards').innerHTML = `
            <img src='${data.cards[0].image}' class='card'>
            <img src='${data.cards[1].image}' class='card'>
        `
    })
}