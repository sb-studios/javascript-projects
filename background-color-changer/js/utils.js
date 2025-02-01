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

export function copyTextToClipboard (textElement, changeTextElement) {
  const text = textElement.value || textElement.textContent
  navigator.clipboard.writeText(text)
    .then(() => {
      changeText(textElement, 'Copied!')
      textElement.style.textTransform = 'none'
    })
    .catch(err => {
      console.error('Error copying text: ', err)
    })
}
