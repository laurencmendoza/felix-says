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
    computerSeq = []
    playerSeq = []
    addToComputerSequence()
    render()

    // renderComputerSequence()

}

function handleClick(evt) {
    let playerChoice = evt.target.classList.value

    // add playerChoice to playerSequence array
    playerSeq.push(playerChoice)

    // invoke compareSequences function with argument playerSequence
    compareSequences(playerSeq)
}

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSeq.push(computerChoice)
    console.log(computerSeq)
}


// New idea for compareSequences to compare playerSequence array with computerSequence array from index 0 to computerSequence[length of playerSequence array]

function compareSequences(arr) {
    let playerSeqString = arr.toString()
    let comparedComputerSeq = computerSeq.slice(0, arr.length)
    let totalComputerSeqString = computerSeq.toString()
    let computerSeqString = comparedComputerSeq.toString()

    if (playerSeqString === computerSeqString) {
        console.log('correct!')
        console.log(`player sequence: ${playerSeq}`)
    } else {
        console.log('game over')
        init()
    }

    if (playerSeqString === totalComputerSeqString) {
        console.log('leveling up')
        score ++
        render()
        addToComputerSequence()
        playerSeq = []
        console.log(`reset player sequence: ${playerSeq}`)
    }

}


function render() {
    renderScore()
    // renderComputerSequence()
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

function renderComputerSequence() {
    for (let i=0; i<computerSeq.length; i++) {
        console.log(computerSeq)

        // TO DO: need to do this for one second
        if (computerSeq[i] === 'red') {
            redBtnEl.style.backgroundColor = 'pink' 
        } else if (computerSeq[i] === 'green') {
            greenBtnEl.style.backgroundColor = 'lightgreen'
        } else if (computerSeq[i] === 'yellow') {
            yellowBtnEl.style.backgroundColor = 'lightyellow'
        } else {
            blueBtnEl.style.backgroundColor = 'lightblue'
        }
    }
}
// let flashingGreen = setInterval(flashGreen, 1000)
// clearInterval(flashingGreen)

init()