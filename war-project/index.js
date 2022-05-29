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