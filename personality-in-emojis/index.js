const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById('emoji-container')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')
const emojiInput = document.getElementById('emoji-input')

function renderEmojis(){
    emojiContainer.innerHTML = ''
    for(let i = 0; i < myEmojis.length; i++){
        emojiContainer.innerHTML += '<span>' + myEmojis[i] + '</span>'
    }
}

renderEmojis()

pushBtn.addEventListener('click', () => {
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ''
        renderEmojis()
        console.log(myEmojis)
    }
})

unshiftBtn.addEventListener('click', () => {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
})

popBtn.addEventListener('click', () => {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener('click', () => {
    myEmojis.shift()
    renderEmojis()
})