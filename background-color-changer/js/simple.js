import { currentText, changeCssColorButton } from './init.js'
import { changeBackgroundColor, changeText } from './utils.js'
import { generateRandomCssColor } from './randomColorGenerators.js'

changeCssColorButton.addEventListener('click', () => {
  console.log('click')
  const newColor = generateRandomCssColor()
  changeBackgroundColor(newColor)
  changeText(currentText, newColor)
})
