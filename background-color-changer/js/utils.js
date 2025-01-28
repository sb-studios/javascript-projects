export function getRandomFloorNumber (range) {
  return Math.floor(Math.random() * range)
}

export function getRandomNumber (range) {
  return (Math.random() * range).toFixed(2)
}

export function changeBackgroundColor (color) {
  document.body.style.background = color
}

export function changeText (currentText, newText) {
  currentText.textContent = newText
}
