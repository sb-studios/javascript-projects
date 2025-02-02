import * as config from './config.js'
import * as utils from './utils.js'

export function generateRandomCssColor () {
  const colorKeys = Object.keys(config.cssColors)
  const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]
  return config.cssColors[randomKey]
}

export function generateRandomHexColor () {
  let hexColor = '#'
  for (let i = 0; i < config.hexCodeLength; i++) {
    hexColor += config.hexCharacters[utils.getRandomFloorNumber(config.hexCharacters.length)]
  }
  return hexColor
}

export function generateRandomRgbColor () {
  const rgbValues = []
  for (let i = 0; i < config.rgbLength; i++) {
    rgbValues.push(utils.getRandomFloorNumber(config.maxRgbValue))
  }
  return `rgb(${rgbValues.join(', ')})`
}

export function generateRandomHslColor () {
  const hslValues = []

  hslValues.push(utils.getRandomFloorNumber(config.maxHueValue))
  hslValues.push(utils.getRandomFloorNumber(config.maxSaturationValue) + '%')
  hslValues.push(utils.getRandomNumber(config.maxLightnessValue) + '%')

  return `hsl(${hslValues.join(', ')})`
}
