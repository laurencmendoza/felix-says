/*----- constants -----*/ 

const redBtnAudio = new Audio('./audio/felixmeow1.mp3'); 
const greenBtnAudio = new Audio('./audio/felixmeow2.mp3');
const yellowBtnAudio = new Audio('./audio/felixmeow3.mp3');
const blueBtnAudio = new Audio('./audio/felixmeow4.mp3');

const imgFelixMouthClosed = './imgs/Felix_mouth_closed.png'
const imgFelixMouthOpen = './imgs/Felix_mouth_open.png'
const imgFelixSmiling = './imgs/felixSmiling.png'
const gameOverText = './imgs/gameover.png'
const winnerText = './imgs/winner.png'

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

const message = document.querySelector('.message')

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
    meowImgEl.style.visibility = 'hidden'

    felixImgEl.setAttribute('src', imgFelixMouthClosed)

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
        // disable buttons
        simonBtnEls.forEach(function(btn) {
            btn.setAttribute('disabled', 'true')
        })

        
        renderGameOver()
    }

    // once playerSeq is equal to the total computerSeq, add 1 to score and add value to computerSeq, and empty the playerSeq array
    if (playerSeqString === totalComputerSeqString) {
        console.log('leveling up')
        score ++
        renderWinner()
        renderScore()
        addToComputerSequence()
        renderComputerSequence()
        playerSeq = []
    }
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
}

function renderComputerSequence() {
    
    
    // while computer sequence is rendered, disable simon buttons
    simonBtnEls.forEach(function(btn) {
        btn.setAttribute('disabled', 'true')
        // btn.classList.add('disable-hover')
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
                btn.style.backgroundColor = `var(--${btn.className})`

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

function renderWinner() {
    //show a smiling Felix when player gets the whole seq correct
    felixImgEl.setAttribute('src', imgFelixSmiling)
    function changeFelixImg() {
        felixImgEl.setAttribute('src', imgFelixMouthClosed)
    }
    setTimeout(changeFelixImg, 1000)


    // TO DO: make a happier audio
    greenBtnAudio.play()

    //show winner text
    meowImgEl.style.visibility = 'visible'
    meowImgEl.setAttribute('src', winnerText)
    setTimeout(meowImgEl.setAttribute('vibility', 'hidden'), 1000)

}

function renderGameOver() {
    meowImgEl.style.visibility = 'visible'
    felixImgEl.setAttribute('src', imgFelixMouthOpen)
    meowImgEl.setAttribute('src', gameOverText)
    redBtnAudio.play()
}

init()



