import React, { useEffect, useState } from 'react'

// style imports
import s from 'styled-components'
import { BlockWrapper, COLORS } from '../../helper.js'

const GuessedBlock = ({
  index, letter, guess, correctWord, correctInds
}) => {
  const [color, setColor] = useState(COLORS.grey)

  useEffect(() => {
    const newColor = figureOutColor(letter, guess, index, correctInds, correctWord)
    setColor(newColor)
  });


  const figureOutColor = (guessLetter, guessWord, ind, correctInds, answer) => {
    if (correctInds.includes(index)) {
      // guess is in correct spot
      $(`#keyX${guessLetter}`).removeClass('yellowKey').addClass('correctKey')
      return COLORS.green
    } else if (!answer.includes(guessLetter)) {
      // the guessed letter is NOT in the word
      $(`#keyX${guessLetter}`).addClass('wrongKey')
      return COLORS.grey
    } else { // the guessed letter is in the word
      const regex = new RegExp(`[^${guessLetter}]`,'g')
      const numAnswer = answer.replace(regex, "").length
      const numGuess = guessWord.replace(regex, "").length
      if (numAnswer >= numGuess) {
        $(`#keyX${guessLetter}`).addClass('yellowKey')
        return COLORS.yellow
      } else {
        // count number correct in the guess
        var correctInGuess = 0
        for (var i = 0; i < 5; i++) {
          if (guessWord.charAt(i) === guessLetter && guessLetter === answer.charAt(i)) {
            correctInGuess++
          }
        }
        // if the number guessed anyways is right it should be grey
        if (correctInGuess === numAnswer) {
          return COLORS.grey
        }
        // otherwise only do it if its smaller
        if (correctInds.some((ele) => (ele > ind))) {
          return COLORS.yellow
        } else {
          return COLORS.grey
        }
      }
    }
  }


  return (
    <Wrapper theme={{c: color}}> {letter} </Wrapper>
  )
}

export default GuessedBlock

const Wrapper = s(BlockWrapper)`
  background-color: ${props => props.theme.c};
`