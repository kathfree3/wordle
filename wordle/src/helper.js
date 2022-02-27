import GUESS_WORDS from './updated_words'
import ANSWER_WORDS from './answer_words'

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
  font-weight: bold;
  margin: 0.1rem;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.grey};
  color: white;
  width: 10%;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
`

export const LineWrapper = s.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 50%;
`



// guess stuff
export const validGuess = guess => {
  return ANSWER_WORDS.includes(guess) || GUESS_WORDS.includes(guess)
}

export const generateWord = () => {
  const int = Math.floor(Math.random() * ANSWER_WORDS.length);
  return ANSWER_WORDS[int]
  //return "LOLLY"
}

// sharing the message
const YELLOW = "🟨"
const GREEN = "🟩"
const BLACK = "⬛️"

const yellow_color = 'rgb(181, 159, 59)'
const grey_color = 'rgb(58, 58, 60)'

export const generateMessage = arr => {
  const len = arr.length
  var message = `Marvdle ${len}/6`
  message += "\n"
  for (var i = 0; i < len; i++) {
    var row = arr[i]
    for (var j = 0; j < 5; j++) {
      if (row[j] === grey_color) {
        message += BLACK
      } else if (row[j] === yellow_color) {
        message += YELLOW
      } else {
        message += GREEN
      }
    }
    message += "\n"
  }
  return message
}

