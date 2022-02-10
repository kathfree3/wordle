
import Header from "./components/TopBar/Header"
import Board from "./components/Board"
import { useEffect, useState } from "react"

import s from 'styled-components'
import { generateWord } from './helper'

const App = () => {
  const [answer, setAnswer] = useState('xxxx')
  useEffect(() => {
    setAnswer(generateWord())
  }, []);

  return (
    <GameWrapper>
      <Header />
      <Board answer={answer} />
    </GameWrapper>
  )
}

export default App


const GameWrapper = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`



