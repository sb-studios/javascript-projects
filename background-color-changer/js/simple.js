import { currentText, changeCssColorButton, copyColorButton } from './init.js'
import { changeBackgroundColor, changeText, copyTextToClipboard } from './utils.js'
import { generateRandomCssColor } from './randomColorGenerators.js'

changeCssColorButton.addEventListener('click', () => {
  const newColor = generateRandomCssColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})

copyColorButton.addEventListener('click', () => {
  copyTextToClipboard(currentText, currentText)
})
