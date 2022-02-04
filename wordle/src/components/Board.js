
import s from 'styled-components'
import { useState } from "react"

import Line from './Line'

const Board = ({ keyPressed }) => {
  const [lineNum, setLineNum] = useState(1)

  const [line1Fill, setLine1Fill] = useState(false)

  return (
    <>
      <Line
        num={1}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
      <Line
        num={2}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
      <Line
        num={3}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
      <Line
        num={4}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
      <Line
        num={5}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
      <Line
        num={6}
        lineNum={lineNum}
        keyPressed={keyPressed}
        setFill={setLine1Fill}
      />
    </>
  )
}

export default Board

const Wrapper = s.div`
  margin: auto;
  padding: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
`
