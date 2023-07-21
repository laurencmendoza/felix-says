console.log('JS:loaded')







/*----- constants -----*/ 

/*----- state variables -----*/ 

let score = 0

const scoreEl = document.querySelector('.score')

scoreEl.innerHTML=`Score: ${score}`

/*----- cached elements -----*/ 
const redBtnEl = document.querySelector('#red-button')
const greenBtnEl = document.querySelector('#green-button')
const yellowBtnEl = document.querySelector('#yellow-button')
const blueBtnEl = document.querySelector('#blue-button')

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