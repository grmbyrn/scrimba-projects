import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "goblin", "demon"]
let heroesArray = ['wizard', 'elf', 'warrior']
let isWaiting = false

function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function getNewHero(){
    const nextHeroData = characterData[heroesArray.shift()]
    return nextHeroData ? new Character(nextHeroData) : {}
}

function attack(){
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        hero.takeDamage(monster.currentDiceScore)
        monster.takeDamage(hero.currentDiceScore)
        render()

        if(hero.dead){
            isWaiting = true
            if(heroesArray.length > 0){
                setTimeout(() => {
                    hero = getNewHero()
                    render()
                    isWaiting = false
                }, 1500);
            } else {
                endGame()
            }
        } else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(() => {
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                }, 1500);
            } else {
                endGame()
            }
        }
    }
}

function endGame(){
    isWaiting = true
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "No victors - all are dead" :
        hero.health > 0 && monster.health === 0 ? "The Heroes Win" :
        "The Monsters are Victorious"

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
    setTimeout(() => {
        document.body.innerHTML = 
            `<div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`
    }, 1500);
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

// const wizard = new Character(characterData.hero)
let hero = getNewHero()
let monster = getNewMonster()
render()