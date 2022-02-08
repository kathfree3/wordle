import React from 'react'

// style stuff
import s from 'styled-components'
import { BlockWrapper, COLORS } from '../../helper.js'

const EmptyBlock = () => <Wrapper> {' '} </Wrapper>

export default EmptyBlock

const Wrapper = s(BlockWrapper)`
  background-color: ${COLORS.darkgrey};
`
