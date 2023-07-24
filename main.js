console.log('JS:loaded')







/*----- constants -----*/ 

// const redBtnAudio; 
// const greenBtnAudio;
// const yellowBtnAudio;
// const blueBtnAudio;

const imgFelixMouthClosed = './imgs/Felix_mouth_closed.png'
const imgFelixMouthOpen = './imgs/Felix_mouth_open.png'


/*----- state variables -----*/ 

let score = 0

const scoreEl = document.querySelector('.score')



/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('#red-button')
const greenBtnEl = document.querySelector('#green-button')
const yellowBtnEl = document.querySelector('#yellow-button')
const blueBtnEl = document.querySelector('#blue-button')

const felixImgEl = document.querySelector('#felix-img')
const felixMouthClosed = 
felixImgEl.setAttribute('src', imgFelixMouthOpen)
/*----- event listeners -----*/ 

redBtnEl.addEventListener('click', function() {
    console.log('Red clicked')
})
greenBtnEl.addEventListener('click', function() {
    console.log('Green clicked')
})
yellowBtnEl.addEventListener('click', function() {
    console.log('Yellow clicked')
})
blueBtnEl.addEventListener('click', function() {
    console.log('Blue clicked')
})

/*----- functions -----*/ 

function init() {
    scoreEl.innerHTML=`Score: ${score}`
    felixImgEl.setAttribute('src', imgFelixMouthClosed)
    // TO DO: Add the line of code below to render computer sequence function
    // felixImgEl.setAttribute('src', imgFelixMouthOpen)
}

init()