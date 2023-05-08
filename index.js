const increaseButton = document.getElementById("btn1")
const decreaseButton = document.getElementById("btn2")
const nmb = document.getElementById("number")
const resetButton = document.querySelector(".reset")


number = 0
function handleClick() {
  number++
  nmb.innerText = number
}

function handleClickMinus() {
  number--
  nmb.innerText = number
}

function handleReset () {
    nmb.innerText = 0
}

increaseButton.addEventListener('click', handleClick)
decreaseButton.addEventListener('click', handleClickMinus)
resetButton.addEventListener('click', handleReset)