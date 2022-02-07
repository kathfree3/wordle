import React, { useEffect, useState } from 'react'

import s from 'styled-components'

import { COLORS } from '../../../functions.js'
import { BlockWrapper } from '../../StyledComponents.js'


const GuessedBlock = ({letter, correctLetter, correctWord }) => {
  const [color, setColor] = useState(COLORS.grey)

  useEffect(() => {
    const newColor = getColor(letter, correctLetter, correctWord)
    setColor(newColor)
  });

  const getColor = (l, cl, w) => {
    if (l === cl) {
      return COLORS.green
    } else if (correctWord.includes(letter)) {
      return COLORS.yellow
    } else {
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