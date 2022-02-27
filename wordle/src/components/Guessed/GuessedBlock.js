import React, { useEffect } from 'react'

// style imports
import s from 'styled-components'
import { BlockWrapper, COLORS } from '../../helper.js'

const GuessedBlock = ({ letter, color }) => {

  useEffect(() => {
    editKeyBoard()
  });

  const editKeyBoard = () => {
    const id = `#keyX${letter}`
    if (color === COLORS.green) {
      $(id).removeClass('yellowKey').addClass('correctKey')
    } else if (color === COLORS.grey) {
      $(id).addClass('wrongKey')
    } else {
      if (!document.getElementById(`keyX${letter}`).classList.contains('correctKey')) {
        $(`#keyX${letter}`).addClass('yellowKey')
      }
    }
  }

  return (
    <Wrapper className='square' theme={{c: color}}> {letter} </Wrapper>
  )
}

export default GuessedBlock

const Wrapper = s(BlockWrapper)`
  background-color: ${props => props.theme.c};
`