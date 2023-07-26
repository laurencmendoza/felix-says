/*----- constants -----*/ 

// const redBtnAudio; 
// const greenBtnAudio;
// const yellowBtnAudio;
// const blueBtnAudio;

const imgFelixMouthClosed = './imgs/Felix_mouth_closed.png'
const imgFelixMouthOpen = './imgs/Felix_mouth_open.png'
const gameOverText = './imgs/gameover.png'

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

/*----- functions -----*/ 

function init() {
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    meowImgEl.style.visibility = 'hidden'
    startOverBtnEl.addEventListener('click', handleStart)
}

function handleStart() {
    score = 0
    renderScore()

    felixImgEl.setAttribute('src', imgFelixMouthClosed)

    meowImgEl.style.visibility = 'hidden'
    // enable buttons (disabled once game over renders)
    simonBtnEls.forEach(function(btn) {
        btn.removeAttribute('disabled')
    })
    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })
    startOverBtnEl.addEventListener('click', handleStart)
    computerSeq = []
    playerSeq = []
    addToComputerSequence()
    
    startOverBtnEl.textContent = 'Start Over'

    renderComputerSequence()
}

function handleClick(evt) {
    let playerChoice = evt.target.classList.value
    playerSeq.push(playerChoice)
    console.log(`player's choice: ${playerChoice}`)
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

    // comparing current playerSeq to only relevant computerSeq elements
    if (playerSeqString === computerSeqString) {
        console.log('correct')
    } else {
        console.log('game over')
        simonBtnEls.forEach(function(btn) {
            btn.setAttribute('disabled', 'true')
        })
        meowImgEl.style.visibility = 'visible'
        meowImgEl.setAttribute('src', gameOverText)
        renderGameOver()
    }

    // once playerSeq is equal to the total computerSeq, add 1 to score and add value to computerSeq, and empty the playerSeq array
    if (playerSeqString === totalComputerSeqString) {
        console.log('leveling up')
        score ++
        render()
        addToComputerSequence()
        playerSeq = []
        renderComputerSequence()
    }
}

// TO DO: might not even need this, check when finished and remove if unnecessary
function render() {
    renderScore()
    // renderComputerSequence(computerSeq)
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

function renderGameOver() {
    felixImgEl.setAttribute('src', imgFelixMouthOpen)
    meowImgEl.setAttribute('src', gameOverText)
}

function renderComputerSequence() {
    
    // while computer sequence is rendered, disable simon buttons
    simonBtnEls.forEach(function(btn) {
        btn.setAttribute('disabled', 'true')
    })

    let index = 0
    const computerSeqInterval = setInterval(logComputerSeq, 1000)
    function logComputerSeq() {
        felixImgEl.setAttribute('src', imgFelixMouthOpen)
        // console.log(computerSeq[index])
        simonBtnEls.forEach(function(btn) {
            if (btn.className === computerSeq[index]) {
                btn.style.backgroundColor = `var(--light-${computerSeq[index]})`
            }
        }) 

        function revertColor() {
            simonBtnEls.forEach(function(btn) {
                if (btn.style.backgroundColor = 'white') {
                    btn.style.backgroundColor = `var(--${btn.className})`
                }
            })
        }

        setTimeout(revertColor, 500)

        index++
        if (index > computerSeq.length) {
            clearInterval(computerSeqInterval)
            felixImgEl.setAttribute('src', imgFelixMouthClosed)
            simonBtnEls.forEach(function(btn) {
                btn.removeAttribute('disabled')
            })
        }
    }
}

init()



