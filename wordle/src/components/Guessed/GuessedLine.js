import s from 'styled-components'
import GuessedBlock from './GuessedBlock'

import { LineWrapper } from '../../StyledComponents.js'


const GuessedLine = ({ guess, correctWord }) => {

  const mapWord = (g, c) => {
    var blocks = []
    for (var i = 0; i < g.length; i++) {
      blocks.push(
      <GuessedBlock 
        key={i}
        letter={g.charAt(i)}
        correctLetter={c.charAt(i)}
        correctWord={c}
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

