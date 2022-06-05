fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })
