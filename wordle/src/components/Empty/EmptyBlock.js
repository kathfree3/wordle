import React from 'react'

import s from 'styled-components'

import { BlockWrapper } from '../../StyledComponents.js'

import { COLORS } from '../../../functions.js'


const EmptyBlock = () => {
  return (
    <Wrapper> {' '} </Wrapper>
  )
}

export default EmptyBlock


const Wrapper = s(BlockWrapper)`
  background-color: ${COLORS.darkgrey};
`
