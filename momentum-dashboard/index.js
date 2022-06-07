let clientID = 'Zit5m2i8VP7r_ymbtJqzuo3pMNXH9UemBcMS7TwLq8U'
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`

fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').textContent = `By: ${data.user.last_name} ${data.user.first_name}`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        document.querySelector('#doge-top').innerHTML = `
            <img src='${data.image.small}'>
            <p>${data.name}</p>
        `
        document.querySelector('#doge').innerHTML += `
            <p>🎯: ${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))