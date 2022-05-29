const wash = document.getElementById('car-wash')
const lawn = document.getElementById('lawnmower')
const weeds = document.getElementById('pull-weeds')
const sendBtn = document.getElementById('send-btn')

const list = document.getElementById('list')
const notes = document.getElementById('notes')
const totalEl = document.getElementById('total')

let serviceArr = []

wash.addEventListener('click', () => {
    const service = {'service': 'Wash Car', 'cost': 10}
    serviceArr.push(service)
    addService(service)
    wash.disabled = true
})

lawn.addEventListener('click', () => {
    const service = {'service': 'Mow Lawn', 'cost': 20}
    serviceArr.push(service)
    addService(service)
    lawn.disabled = true
})

weeds.addEventListener('click', () => {
    const service = {'service': 'Pull Weeds', 'cost': 30}
    serviceArr.push(service)
    addService(service)
    weeds.disabled = true
})

if(serviceArr.length === 0){
    sendInvoice()
}

function addService(serviceObj){
    const serviceIndex = serviceArr.indexOf(serviceObj)
    const service = document.createElement('article')
    service.setAttribute('class', 'service-item')
    service.setAttribute('id', `service-${serviceIndex}`)
    service.innerHTML = `
        <div>
            <h2>${serviceObj.service}</h2>
        </div>
        <h2><span>$</span>${serviceObj.cost}</h2>
    `
    list.appendChild(service)
    totalCost()
}

function totalCost(){
    const total = serviceArr.reduce((acc, i) => acc + i.cost, 0)
    notes.textContent = "We accept cash, credit card, or PayPal"
    totalEl.textContent = total
}

sendBtn.addEventListener('click', sendInvoice)

function sendInvoice(){
    serviceArr = []
    list.innerHTML = ''
    notes.textContent = ''
    wash.disabled = false
    lawn.disabled = false
    weeds.disabled = false
    totalEl.textContent = 0
}