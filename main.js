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

let score = 0

let computerSequence = []
let playerSequence = []



/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('#red-button')
const greenBtnEl = document.querySelector('#green-button')
const yellowBtnEl = document.querySelector('#yellow-button')
const blueBtnEl = document.querySelector('#blue-button')
const simonBtnEls = document.querySelectorAll('.simon > button')



const startOverBtnEl = document.querySelector('#start-over-btn')

const scoreEl = document.querySelector('.score')

const felixImgEl = document.querySelector('#felix-img')

/*----- event listeners -----*/ 

// redBtnEl.addEventListener('click', function() {
//     console.log('Red clicked')
// })
// greenBtnEl.addEventListener('click', function() {
//     console.log('Green clicked')
// })
// yellowBtnEl.addEventListener('click', function() {
//     console.log('Yellow clicked')
// })
// blueBtnEl.addEventListener('click', function() {
//     console.log('Blue clicked')
// })

//making the above eventlisteners more DRY


startOverBtnEl.addEventListener('click', function() {
    console.log('Start over button clicked')
    init()
})

/*----- functions -----*/ 

function init() {
    scoreEl.innerHTML=`Score: ${score}`
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    // TO DO: Add the line of code below to render computer sequence function
    // felixImgEl.setAttribute('src', imgFelixMouthOpen)

    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })

    addToComputerSequence()

}

function handleClick(evt) {
    let btnColor = evt.target.classList.value
    playerSequence.push(btnColor)

    console.log(`Player's Sequence: ${playerSequence}`) 

    // need a compare function 
}

console.log(Math.floor(Math.random() * 4)) // generates random number 0-3

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSequence.push(computerChoice)
    console.log(computerSequence)
    // pick a random color
    // add random color to sequence
}



init()