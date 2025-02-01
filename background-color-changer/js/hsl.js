import { currentText, changeHslColorButton, copyColorButton } from './init.js'
import { changeBackgroundColor, changeText, copyTextToClipboard } from './utils.js'
import { generateRandomHslColor } from './randomColorGenerators.js'

changeHslColorButton.addEventListener('click', () => {
  const newColor = generateRandomHslColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})

copyColorButton.addEventListener('click', () => {
  copyTextToClipboard(currentText, currentText)
})
