
import { useState } from 'react'
import s from 'styled-components'
import Block from './Block'

const Line = ({num, keyPressed, lineNum, setFill }) => {
  const [blockNum, setBlockNum] = useState(1)
  const [value, setValue] = useState('')


  const correctLine = num === lineNum

  
  return (
    <Wrapper>
      <Block
        keyPressed={keyPressed}
        num={1}
        currNum={blockNum}
        correctLine={correctLine}
      />
      <Block
        keyPressed={keyPressed}
        num={2}
        currNum={blockNum}
        correctLine={correctLine}
      />
      <Block
        keyPressed={keyPressed}
        num={3}
        currNum={blockNum}
        correctLine={correctLine}
      />
      <Block
        keyPressed={keyPressed}
        num={4}
        currNum={blockNum}
        correctLine={correctLine}
      />
      <Block
        keyPressed={keyPressed}
        num={5}
        currNum={blockNum}
        correctLine={correctLine}
      />
    </Wrapper>
  )
}


export default Line

const Wrapper = s.div`
  margin: auto;
  padding: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
`
