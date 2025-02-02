import { currentText, changeHexColorButton, copyColorButton } from './init.js'
import { changeBackgroundColor, changeText, copyTextToClipboard } from './utils.js'
import { generateRandomHexColor } from './randomColorGenerators.js'

changeHexColorButton.addEventListener('click', () => {
  const newColor = generateRandomHexColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})

copyColorButton.addEventListener('click', () => {
  copyTextToClipboard(currentText, currentText)
})
