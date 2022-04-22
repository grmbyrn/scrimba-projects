const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

openModal.addEventListener('click', () => {
    overlay.style.display = 'block'
})

closeModal.addEventListener('click', () => {
    overlay.style.display = 'none'
})