
import Header from "./components/TopBar/Header"
import Board from "./components/Board"
import { useEffect, useState } from "react"

import s from 'styled-components'
import { generateWord } from './helper'

const App = () => {
  const [answer, setAnswer] = useState('xxxx')
  const [allowedToSolve, setAllowed] = useState(true)

  useEffect(() => {
    setAnswer(generateWord())
    const lastSolved = localStorage.getItem('solvedToday')
    const today = new Date().setHours(0,0,0,0);
    if (lastSolved > today) {
      setAllowed(false)
    }
  }, []);

  return (
    <GameWrapper>
      <Header />
      <Board answer={answer} allowedToSolve={allowedToSolve} />
    </GameWrapper>
  )
}

export default App


const GameWrapper = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`



