import { currentText, changeHexColorButton } from './init.js'
import { changeBackgroundColor, changeText } from './utils.js'
import { generateRandomHexColor } from './randomColorGenerators.js'

changeHexColorButton.addEventListener('click', () => {
  console.log('click')
  const newColor = generateRandomHexColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})
