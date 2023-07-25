/*----- constants -----*/ 

// const redBtnAudio; 
// const greenBtnAudio;
// const yellowBtnAudio;
// const blueBtnAudio;

const imgFelixMouthClosed = './imgs/Felix_mouth_closed.png'
const imgFelixMouthOpen = './imgs/Felix_mouth_open.png'
const blueMeow = 'imgs/Blue meow.png'
const greenMeow = 'imgs/Green meow.png'
const redMeow = 'imgs/Red meow.png'
const yellowMeow = 'imgs/Yellow meow.png'

const options = ['red', 'green', 'yellow', 'blue']

/*----- state variables -----*/ 

let score; 

let computerSeq;
let playerSeq;

/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('.red')
const greenBtnEl = document.querySelector('.green')
const yellowBtnEl = document.querySelector('.yellow')
const blueBtnEl = document.querySelector('.blue')
const simonBtnEls = document.querySelectorAll('.simon > button')

const startOverBtnEl = document.querySelector('#start-over-btn')

const scoreEl = document.querySelector('.score')

const felixImgEl = document.querySelector('#felix-img')
const meowImgEl = document.querySelector('#meow')

/*----- event listeners -----*/ 

// startOverBtnEl.addEventListener('click', function() {
//     console.log('Start over button clicked')
//     init()
// })



/*----- functions -----*/ 

function init() {
    score = 0;
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    meowImgEl.setAttribute('src', blueMeow)

    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })

    startOverBtnEl.addEventListener('click', handleStart)

    computerSeq = []
    playerSeq = []
    renderScore()
}

function handleStart() {
    addToComputerSequence()
    renderComputerSequence(computerSeq)
    startOverBtnEl.textContent = 'Start Over'
}

function handleClick(evt) {
    let playerChoice = evt.target.classList.value
    playerSeq.push(playerChoice)
    compareSequences(playerSeq)
}

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSeq.push(computerChoice)
    // console.log(`current computer seq: ${computerSeq}`)
}

function compareSequences(arr) {
    let playerSeqString = arr.toString()
    let comparedComputerSeq = computerSeq.slice(0, arr.length)
    let totalComputerSeqString = computerSeq.toString()
    let computerSeqString = comparedComputerSeq.toString()

    // comparing current playerSeq to relevant computerSeq elements
    if (playerSeqString === computerSeqString) {
        console.log('correct')
    } else {
        console.log('game over')
        init()
    }

    // once playerSeq is equal to the total computerSeq, add 1 to score and add value to computerSeq
    if (playerSeqString === totalComputerSeqString) {
        console.log('leveling up')
        score ++
        render()
        addToComputerSequence()
        playerSeq = []
    }
}

function render() {
    renderScore()
    renderComputerSequence(computerSeq)
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

function renderComputerSequence(arr) {
    let index = -1 // starting with non-exist array value to get a delay before starting game
    function iterate() {
        if (index < arr.length) {
            // for now, just want to see the array printed in console
            // TO DO: instead of console.log, set colors
            console.log(arr[index])
            // once index value is reached, set that color to a light version and all other colors to their normal color
            index++
            setTimeout(iterate, 1000);
        }
    }
    iterate()
}




init()