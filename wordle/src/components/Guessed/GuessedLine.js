import s from 'styled-components'
import GuessedBlock from './GuessedBlock'

import { LineWrapper, COLORS } from '../../helper.js'


const { yellow, grey, green, red } = COLORS

const GuessedLine = ({ guess, correctWord }) => {


  const setColors = (g, c) => {
    const colors = [undefined, undefined, undefined, undefined, undefined]
    const guessArr = g.split("")
    const answerArr = c.split("")
    for (var i = 0; i < guessArr.length; i++) {
      const ch = g.charAt(i)
      if (c.charAt(i) === ch) {
        colors[i] = green
        // change this to be a ? now 
        guessArr[i] = undefined
        answerArr[i]= undefined
      } else if (!c.includes(ch)) {
        colors[i] = grey
        guessArr[i] = undefined
      }
    }

    // now the letters you have left are either yellow or grey
    for (var i = 0; i < g.length; i++) {
      if (typeof (colors[i]) === 'undefined') {
        const ch = guessArr[i]
        if (answerArr.includes(ch)) {
          colors[i] = yellow
          const index = answerArr.indexOf(ch)
          answerArr[index]= "?"
        } else {
          colors[i] = grey
        }
      }
    }
    return colors
  }

  const mapWord = (g, c) => {
    var blocks = []
    const colors = setColors(g, c) 
    for (var i = 0; i < g.length; i++) {
      blocks.push(
      <GuessedBlock 
        key={i}
        letter={g.charAt(i)}
        color={colors[i]}
      />)
    }
    return blocks
  }

  const blocks = mapWord(guess, correctWord)

  return (
    <LineWrapper>
      {blocks}
    </LineWrapper>
  )
}


export default GuessedLine

