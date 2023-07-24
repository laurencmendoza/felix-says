console.log('JS:loaded')







/*----- constants -----*/ 

// const redBtnAudio; 
// const greenBtnAudio;
// const yellowBtnAudio;
// const blueBtnAudio;

const imgFelixMouthClosed = './imgs/Felix_mouth_closed.png'
const imgFelixMouthOpen = './imgs/Felix_mouth_open.png'

const options = ['red', 'green', 'yellow', 'blue']

/*----- state variables -----*/ 

let score; 

let computerSequence;
let playerSequence = []



/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('.red')
const greenBtnEl = document.querySelector('.green')
const yellowBtnEl = document.querySelector('.yellow')
const blueBtnEl = document.querySelector('.blue')
const simonBtnEls = document.querySelectorAll('.simon > button')



const startOverBtnEl = document.querySelector('#start-over-btn')

const scoreEl = document.querySelector('.score')

const felixImgEl = document.querySelector('#felix-img')

/*----- event listeners -----*/ 

startOverBtnEl.addEventListener('click', function() {
    console.log('Start over button clicked')
    init()
})

/*----- functions -----*/ 

function init() {
    score = 0;
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    // TO DO: Add the line of code below to render computer sequence function
    // felixImgEl.setAttribute('src', imgFelixMouthOpen)

    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })
    computerSequence = []
    addToComputerSequence()
    renderScore()

    // renderComputerSequence()

}

function handleClick(evt) {
    let playerChoice = evt.target.classList.value
    
    let computerIdx = 0
    // If the player picks the correct color, add to array. If not, game over.
    if (playerChoice === computerSequence[computerIdx]) {
        
        console.log('correct!')
        playerSequence.push(playerChoice)
        console.log(`Player's Sequence: ${playerSequence}`) 
        computerIdx = computerIdx + 1
    } else {
        console.log(`Game over computer index is at ${computerIdx}`)
        init()
    }

    
    if (playerSequence.length === computerSequence.length) {
        console.log(`Adding a new value to computerSequence`)
        score++
        renderScore()
        addToComputerSequence()
        playerSequence = []
        console.log(playerSequence)
    }
}

console.log(Math.floor(Math.random() * 4)) // generates random number 0-3

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSequence.push(computerChoice)
    console.log(computerSequence)
}

function renderComputerSequence() {
    for (let i=0; i<computerSequence.length; i++) {
        console.log(computerSequence)

        // TO DO: need to do this for one second
        if (computerSequence[i] === 'red') {
            redBtnEl.style.backgroundColor = 'pink' 
        } else if (computerSequence[i] === 'green') {
            greenBtnEl.style.backgroundColor = 'lightgreen'
        } else if (computerSequence[i] === 'yellow') {
            yellowBtnEl.style.backgroundColor = 'lightyellow'
        } else {
            blueBtnEl.style.backgroundColor = 'lightblue'
        }
    }
}

function compareSequences() {
    for (let i=0; i<playerSequence.length; i++) {

    }

}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

// let flashingGreen = setInterval(flashGreen, 1000)
// clearInterval(flashingGreen)

init()