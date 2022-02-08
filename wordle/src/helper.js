import GUESS_WORDS from './updated_words'

// style imports
import s from 'styled-components'

export const COLORS = {
  green: "#538d4e",
  yellow: "#b59f3b",
  grey: "#3a3a3c",
  lightgrey: "#818384",
  darkgrey: "#121213",
  red: "#b5201b",
}

// style stuff
export const BlockWrapper = s.div`
  padding: 0.3rem!important;
  font-weight: bold;
  margin: 0.1rem;
  display: block;
  justify-content: center;
  text-align: center;
  border: 1px solid ${COLORS.grey};
  color: white;
  min-width: 2rem;
  min-height: 2rem;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
`

export const LineWrapper = s.div`
  margin: auto;
  display: flex;
  justify-content: center;
`



// guess stuff
export const validGuess = guess => {
  return GUESS_WORDS.includes(guess)
}

export const generateWord = () => {
  const int = Math.floor(Math.random() * 5756);
  //return GUESS_WORDS[int]
  return "HELLO"
}