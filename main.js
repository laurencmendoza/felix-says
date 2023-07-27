/*----- constants -----*/ 

const redBtnAudio = new Audio('./audio/zeroMeow1.mp3')
const greenBtnAudio = new Audio('./audio/zeroMeow2.mp3')
const yellowBtnAudio = new Audio('./audio/zeroMeow3.mp3')
const blueBtnAudio = new Audio('./audio/zeroMeow4.mp3')

const levelUpAudio = new Audio('./audio/collarJingle.mp3')
const gameOverAudio = new Audio('./audio/felixLongMeow.mp3')
const winAudio = new Audio('./audio/zeroWinMeow.mp3')

const imgFelixMouthClosed = './imgs/felixMouthClosed.png'
const imgFelixMouthOpen = './imgs/felixMouthOpen.png'
const imgFelixSmiling = './imgs/felixSmiling.png'
const gameOverText = './imgs/gameover.png'
const winnerText = './imgs/winner.png'

const options = ['red', 'green', 'yellow', 'blue']

const winningScore = 5

/*----- state variables -----*/ 

let score; 

let computerSeq;
let playerSeq;

let timesWon; 

let isMuted = false 

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

const overlay = document.getElementById('overlay')
const winScore = document.getElementById('win-score')

const muteButton = document.getElementById('toggle-audio')

/*----- event listeners -----*/

overlay.addEventListener('click', overlayOff)
muteButton.addEventListener('click', handleMute)

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
    compareSequences(playerSeq)

    // play audio
    if (playerChoice === 'red') {
        redBtnAudio.play()
    } else if (playerChoice === 'green') {
        greenBtnAudio.play()
    } else if (playerChoice === 'yellow') {
        yellowBtnAudio.play()
    } else if (playerChoice === 'blue') {
        blueBtnAudio.play()
    }
}

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSeq.push(computerChoice)
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
    // once playerSeq is equal to the total computerSeq, level up
    if (playerSeqString === totalComputerSeqString) {
        levelUp()
    } 
}

// add one to the score, clear player array, add to the sequence and render the sequence
function levelUp() {
    score++
    playerSeq = []
    renderLevelUp()
    renderScore()

    // automatically add to computer seq and render seq except for when player reaches winning score

    if (score !== winningScore) {
        addToComputerSequence()
        renderComputerSequence()
    }
}

function renderScore() {
    scoreEl.innerHTML=`Score: ${score}`
    // render a win message when score reaches winning score
    if (score === winningScore) {
        overlayOn()
        winScore.textContent = `Your score: ${score}.`
    }
    
    // console.log(`Printing score in renderScore: ${score}`)
}

function renderComputerSequence() {
    // disable buttons during computer sequence render
    simonBtnEls.forEach(function(btn) {
        btn.setAttribute('disabled', 'true')
    })
    
    // iterate over computer sequence at interval of 1s each value starting with index 0
    let index = 0
    const computerSeqInterval = setInterval(logComputerSeq, 1000)
    function logComputerSeq() {
        
        felixImgEl.setAttribute('src', imgFelixMouthOpen)
        
        console.log(computerSeq[index])

        //set corresponding button to light color when it shows in computerSeq
        simonBtnEls.forEach(function(btn) {
            if (btn.className === computerSeq[index]) {
                btn.style.backgroundColor = `var(--light-${computerSeq[index]})`
            }
        }) 

        //revert color back to original color after half a second
        function revertColor() {
            simonBtnEls.forEach(function(btn) {
                btn.style.backgroundColor = `var(--${btn.className})`

            })
        }

        setTimeout(revertColor, 500)

        //play audio that corresponds to button
        if (computerSeq[index] === 'red') {
            redBtnAudio.play()
        } else if (computerSeq[index] === 'green') {
            greenBtnAudio.play()
        } else if (computerSeq[index] === 'yellow') {
            yellowBtnAudio.play()
        } else if (computerSeq[index] === 'blue') {
            blueBtnAudio.play()
        }

        // increase index value and clear interval and remove disable button attribute when index value reaches end of array
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

function renderLevelUp() {
    //show a smiling Felix when player gets the whole seq correct
    felixImgEl.setAttribute('src', imgFelixSmiling)
    function changeFelixImg() {
        felixImgEl.setAttribute('src', imgFelixMouthClosed)
    }
    setTimeout(changeFelixImg, 1000)

    // TO DO: make a happier audio
    levelUpAudio.play()

    //show winner text
    meowImgEl.setAttribute('src', winnerText)
    meowImgEl.style.visibility = 'visible'
    setTimeout(function() {
        meowImgEl.style.visibility = 'hidden'
    }, 1000)
}

function renderGameOver() {
    felixImgEl.setAttribute('src', imgFelixMouthOpen)
    meowImgEl.setAttribute('src', gameOverText)
    meowImgEl.style.visibility = 'visible'
    gameOverAudio.play()
}

function overlayOn() {
    winAudio.play()
    overlay.style.display = 'block'
}

function overlayOff() {
    overlay.style.display = 'none'
    addToComputerSequence()
    renderComputerSequence()
}





function handleMute() {
    if (isMuted === false) {
        redBtnAudio.muted = true
        greenBtnAudio.muted = true
        yellowBtnAudio.muted = true
        blueBtnAudio.muted = true
        levelUpAudio.muted = true
        gameOverAudio.muted = true
        winAudio.muted = true
        isMuted = true
    } else {
        redBtnAudio.muted = false
        greenBtnAudio.muted = false
        yellowBtnAudio.muted = false
        blueBtnAudio.muted = false
        levelUpAudio.muted = false
        gameOverAudio.muted = false
        winAudio.muted = false
        isMuted = false
    }
}

init()



