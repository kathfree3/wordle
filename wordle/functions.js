import { WORDS } from '../updated_words'

import TEST from '../updated_words'

export const COLORS = {
  green: "#3e9114",
  yellow: "#c7ae0c",
  grey: "#565758",
  darkgrey: "#292929"
}

export const validGuess = guess => {
  return TEST.includes(guess)
}
