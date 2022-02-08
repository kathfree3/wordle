import React, { useEffect, useState } from 'react'

// style imports
import s from 'styled-components'
import { BlockWrapper, COLORS } from '../../helper.js'

const GuessedBlock = ({index, letter, correctLetter, correctWord }) => {
  const [color, setColor] = useState(COLORS.grey)

  useEffect(() => {
    const newColor = getColor(letter, correctLetter, correctWord)
    setColor(newColor)
  });

  const getColor = (l, cl, w) => {
    if (l === cl) {
      $(`#keyX${l}`).removeClass('yellowKey')
      $(`#keyX${l}`).addClass('correctKey')
      return COLORS.green
    } else if (correctWord.includes(letter)) {
      $(`#keyX${l}`).addClass('yellowKey')
      return COLORS.yellow
    } else {
      $(`#keyX${l}`).addClass('wrongKey')
      return COLORS.grey
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