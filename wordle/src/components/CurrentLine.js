
import { useState } from 'react'
import s from 'styled-components'
import Block from './Block'

import { LineWrapper } from '../StyledComponents.js'


const CurrentLine = ({value }) => {
  var word = value
  if (value.length < 5) {
    const needed = 5 - value.length
    for (var i = 0; i < needed; i++) {
      word = word + ' '
    }
  }

  return (
    <LineWrapper>
        {[...word].map(c => 
          <Block letter={c}/>
        )}
    </LineWrapper>
  )
}


export default CurrentLine
