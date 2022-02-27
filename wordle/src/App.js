import { useEffect, useState } from "react"
import s from 'styled-components'

// local imports 
import Header from "./components/TopBar/Header"
import Board from "./components/Board"

// functions
import { generateWord } from './helper'
import { resetGuesses, getLastSolved, getLastSolvedAnswer } from './storage'

const App = () => {
  const [answer, setAnswer] = useState('xxxx')
  const [allowedToSolve, setAllowed] = useState(true)

  useEffect(() => {
    setAnswer(generateWord())
    const lastSolved = getLastSolved()
    const today = new Date().setHours(0,0,0,0);
    if (lastSolved > today) {
      const lastAnswer = getLastSolvedAnswer()
      setAnswer(lastAnswer)
      setAllowed(false)
    } else { // reset stored guesses
      resetGuesses()
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



