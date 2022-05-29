let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passLengthInput = document.getElementById('passlength')

let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')
let password3 = document.getElementById('password3')
let password4 = document.getElementById('password4')
let btn = document.getElementById('btn')

btn.addEventListener('click', createPassword)

function createPassword(){
    var passwordLength = passLengthInput.valueAsNumber;
    for(let i = 0; i < passwordLength; i++){
        let random1 = Math.random().toString(35).slice(-passwordLength)
        let random2 = Math.random().toString(35).slice(-passwordLength)
        let random3 = Math.random().toString(35).slice(-passwordLength)
        let random4 = Math.random().toString(35).slice(-passwordLength)

        password1.textContent = random1
        password2.textContent = random2
        password3.textContent = random3
        password4.textContent = random4
    }
}

