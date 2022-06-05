let clientID = 'Zit5m2i8VP7r_ymbtJqzuo3pMNXH9UemBcMS7TwLq8U'
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`

fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').textContent = `By: ${data.user.last_name} ${data.user.first_name}`
    })
