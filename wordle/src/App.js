
import Header from "./components/TopBar/Header"
import Board from "./components/Board"
import { useEffect, useState } from "react"

import {generateWord} from './helper'

const App = () => {
  const [answer, setAnswer] = useState('xxxx')
  useEffect(() => {
    setAnswer(generateWord())
  }, []);

  return (
    <>
      <Header />
      <Board answer={answer} />
    </>
  )
}




export default App

