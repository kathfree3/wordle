import s from 'styled-components'
import GuessedBlock from './GuessedBlock'

import { LineWrapper } from '../../helper.js'



const GuessedLine = ({ guess, correctWord }) => {

  const getCorrectInds = (g, c) => {
    var correct = []
    for (var i = 0; i < 5; i++) {
      if (g.charAt(i) === c.charAt(i)){
        correct.push(i)
      }
    }
    return correct
  }

  const mapWord = (g, c) => {
    var blocks = []
    const correctInds = getCorrectInds(g,c)
    for (var i = 0; i < g.length; i++) {
      blocks.push(
      <GuessedBlock 
        key={i}
        letter={g.charAt(i)}
        guess={g}
        correctWord={c}
        index={i}
        correctInds={correctInds}
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

