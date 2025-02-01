import { currentText, changeRgbColorButton, copyColorButton } from './init.js'
import { changeBackgroundColor, changeText, copyTextToClipboard } from './utils.js'
import { generateRandomRgbColor } from './randomColorGenerators.js'

changeRgbColorButton.addEventListener('click', () => {
  const newColor = generateRandomRgbColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})

copyColorButton.addEventListener('click', () => {
  copyTextToClipboard(currentText, currentText)
})
