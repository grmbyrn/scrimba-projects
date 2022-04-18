const incrementBtn = document.getElementById('increment-btn')
const countEl = document.getElementById('count-el')
const saveBtn = document.getElementById('save-btn')
const saveEl = document.getElementById('save-el')

let count = 0

incrementBtn.addEventListener('click', () => {
    countEl.textContent = count++
})

saveBtn.addEventListener('click', () => {
    let totalCount = count + ' - '
    saveEl.innerHTML += totalCount
    countEl.innerHTML = 0
})