let unit = 20

// LENGTH
function setFeet(){
    feet.textContent = (unit * 3.28084).toFixed(3)
}
setFeet()

function setMetre(){
    metre.textContent = (unit * 0.3048).toFixed(3)
}
setMetre()


// VOLUME
function setGallons(){
    gallons.textContent = (unit * 0.264172).toFixed(3)
}
setGallons()

function setLitres(){
    litres.textContent = (unit * 3.78541).toFixed(3)
}
setLitres()


// MASS
function setPounds(){
    pounds.textContent = (unit * 2.20462).toFixed(3)
}
setPounds()

function setKilograms(){
    kilograms.textContent = (unit * 0.453592).toFixed(3)
}
setKilograms()
