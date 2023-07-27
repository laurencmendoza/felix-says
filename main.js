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
const levelUpText = './imgs/winner.png'
const imgAudioOn = './imgs/audioOn.png'
const imgAudioOff = 'imgs/audioOff.png'

const options = ['red', 'green', 'yellow', 'blue']

let winningScore = 10

/*----- state variables -----*/ 

let score; 
let computerSeq;
let playerSeq;
let isMuted = false 

/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('.red')
const greenBtnEl = document.querySelector('.green')
const yellowBtnEl = document.querySelector('.yellow')
const blueBtnEl = document.querySelector('.blue')
const simonBtnEls = document.querySelectorAll('.simon > button')

const startOverBtnEl = document.querySelector('#start-over-btn')

const muteButton = document.getElementById('toggle-audio')

const scoreEl = document.querySelector('.score')

const felixImgEl = document.querySelector('#felix-img')
const meowImgEl = document.querySelector('#meow')

const overlay = document.getElementById('overlay')
const winScore = document.getElementById('win-score')

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
    computerSeq = []
    playerSeq = []

    meowImgEl.style.visibility = 'hidden'
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    startOverBtnEl.textContent = 'Start Over'

    simonBtnEls.forEach(function(btn) {
        btn.addEventListener('click', handleClick)
    })

    addToComputerSequence()
    renderScore()
    renderComputerSequence()
}

function handleClick(evt) {
    // add the player's choice into an array using button's class
    let playerChoice = evt.target.classList.value
    playerSeq.push(playerChoice)
    compareSequences(playerSeq)

    // play audio for each button
    if (playerChoice === 'red') {
        redBtnAudio.currentTime = 0
        redBtnAudio.play()
    } else if (playerChoice === 'green') {
        greenBtnAudio.currentTime = 0
        greenBtnAudio.play()
    } else if (playerChoice === 'yellow') {
        yellowBtnAudio.currentTime = 0
        yellowBtnAudio.play()
    } else if (playerChoice === 'blue') {
        blueBtnAudio.currentTime = 0
        blueBtnAudio.play()
    }
}

function addToComputerSequence() {
    let randomIndex = Math.floor(Math.random() *4)
    let computerChoice = options[randomIndex]
    computerSeq.push(computerChoice)
}

function compareSequences(arr) {
    // convert arrays into strings for comparison
    let playerSeqString = arr.toString()
    let comparedComputerSeq = computerSeq.slice(0, arr.length)
    let totalComputerSeqString = computerSeq.toString()
    let computerSeqString = comparedComputerSeq.toString()

    // comparing current playerSeq to only relevant computerSeq elements
    if (playerSeqString === computerSeqString) {
    } else {
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

function levelUp() {
    // add one to the score, clear player array, render level up, and render score
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
        winScore.textContent = `Your score: ${score}.`
        overlayOn()
    }
}

function renderComputerSequence() {
    // disable buttons during computer sequence render
    simonBtnEls.forEach(function(btn) {
        btn.setAttribute('disabled', 'true')
    })
    
    // iterate over computer sequence at interval of 1s
    let index = 0
    const computerSeqInterval = setInterval(logComputerSeq, 1000)
    function logComputerSeq() {
        // set Felix image to mouth open
        felixImgEl.setAttribute('src', imgFelixMouthOpen)

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

        // increase index value and when array is finished, clear interval and remove disable button attribute
        index++
        if (index > computerSeq.length) {
            clearInterval(computerSeqInterval)
            simonBtnEls.forEach(function(btn) {
                btn.removeAttribute('disabled')
            })
            felixImgEl.setAttribute('src', imgFelixMouthClosed)
        } 
    }
}

function renderLevelUp() {
    // show a smiling Felix
    felixImgEl.setAttribute('src', imgFelixSmiling)

    // change image back to Felix mouth closed after 1s
    function changeFelixImg() {
        felixImgEl.setAttribute('src', imgFelixMouthClosed)
    }
    setTimeout(changeFelixImg, 1000)

    // play collar jingle
    levelUpAudio.play()

    //show level up text
    meowImgEl.setAttribute('src', levelUpText)
    meowImgEl.style.visibility = 'visible'
    setTimeout(function() {
        meowImgEl.style.visibility = 'hidden'
    }, 1000)
}

function renderGameOver() {
    // set image of Felix to mouth open and show game over text
    felixImgEl.setAttribute('src', imgFelixMouthOpen)
    meowImgEl.setAttribute('src', gameOverText)
    meowImgEl.style.visibility = 'visible'

    // play Felix's sad meow
    gameOverAudio.play()
}

function overlayOn() {
    // play winner meows
    winAudio.play()

    // display overlay
    overlay.style.display = 'block'
}

function overlayOff() {
    // hide overlay
    overlay.style.display = 'none'

    // continue game
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
        muteButton.style.backgroundImage = `url(${imgAudioOff})`

    } else {
        redBtnAudio.muted = false
        greenBtnAudio.muted = false
        yellowBtnAudio.muted = false
        blueBtnAudio.muted = false
        levelUpAudio.muted = false
        gameOverAudio.muted = false
        winAudio.muted = false
        isMuted = false
        muteButton.style.backgroundImage = `url(${imgAudioOn})`
    }
}

init()



