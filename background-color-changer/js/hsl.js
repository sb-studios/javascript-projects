import { currentText, changeHslColorButton } from './init.js'
import { changeBackgroundColor, changeText } from './utils.js'
import { generateRandomHslColor } from './randomColorGenerators.js'

changeHslColorButton.addEventListener('click', () => {
  const newColor = generateRandomHslColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})
