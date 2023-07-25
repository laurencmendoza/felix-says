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
    meowImgEl.setAttribute('src', blueMeow)
    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })
    computerSeq = []
    playerSeq = []
    addToComputerSequence()
    render()
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
    console.log(`current computer seq: ${computerSeq}`)
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
    // renderComputerSequence()
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

// function renderComputerSequence() {
//     for (let i=0; i<computerSeq.length; i++) {
//         console.log(computerSeq)

//         // TO DO: need to do this for one second
//         if (computerSeq[i] === 'red') {
//             redBtnEl.style.backgroundColor = 'pink' 
//         } else if (computerSeq[i] === 'green') {
//             greenBtnEl.style.backgroundColor = 'lightgreen'
//         } else if (computerSeq[i] === 'yellow') {
//             yellowBtnEl.style.backgroundColor = 'lightyellow'
//         } else {
//             blueBtnEl.style.backgroundColor = 'lightblue'
//         }
//     }

//  //need to make sure the player clicks aren't handled until animation is complete
// }

const btnFlashing = [
    {color: 'pink', time: 1000}, 
    {color: 'lightgreen', time: 1000}, 
    {color: 'lightyellow', time: 1000}, 
    {color: 'lightblue', time: 1000}
]

let curBtnIdx = 0; 

function renderComputerSequence(cb) {

}

init()