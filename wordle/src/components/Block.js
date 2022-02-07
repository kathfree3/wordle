import React, { useState } from 'react'

import s from 'styled-components'

import { COLORS } from '../../functions.js'
import { BlockWrapper } from '../StyledComponents.js'


const Block = ({ letter }) => {
  
  return (
    <Wrapper> {letter} </Wrapper>
  )
}

export default Block

const Wrapper = s(BlockWrapper)`
  background-color: ${COLORS.darkgrey};
`