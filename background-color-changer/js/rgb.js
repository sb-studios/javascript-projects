import { currentText, changeRgbColorButton } from './init.js'
import { changeBackgroundColor, changeText } from './utils.js'
import { generateRandomRgbColor } from './randomColorGenerators.js'

changeRgbColorButton.addEventListener('click', () => {
  const newColor = generateRandomRgbColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})
