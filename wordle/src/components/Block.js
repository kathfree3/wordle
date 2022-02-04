import React, { useState } from 'react'

import s from 'styled-components'

import { COLORS } from '../../functions.js'


const Block = ({keyPressed, num, currNum, setCurrNum, correctLine}) => {
  var value = keyPressed
  if (keyPressed === 'Enter') {
    value = ''
  } else if (keyPressed === 'Backspace') {
    value = ''
  }

  const valid = num === currNum && correctLine
  
  return (
    <Wrapper>
      {valid ? value : ''}
    </Wrapper>
  )
}

export default Block


const Wrapper = s.div`
  padding: 1rem;
  width: 70%;
  margin: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid ${COLORS.grey};
  background-color: ${COLORS.darkgrey};
  color: white;
`
