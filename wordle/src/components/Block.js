import React from 'react'

// style imports
import { BlockWrapper } from '../helper.js'

const Block = ({ letter }) => <BlockWrapper className='square block'> {letter} </BlockWrapper>

export default Block
