const btn = document.getElementById('btn')
const bored = document.getElementById('bored')

btn.addEventListener('click', () => {
    fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            bored.textContent = data.activity
        })
    })