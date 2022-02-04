
import Header from "./components/Header"
import Board from "./components/Board"

import { COLORS } from '../functions.js'
import { useState } from "react"

const App = () => {
  const [keyPressed, setKeyPressed] = useState('')
  
  window.addEventListener('keydown', (e) => {
    const k = e.key
    setKeyPressed(k)
  });


  return (
    <>
      <Header />
      <Board keyPressed={keyPressed} />
    </>
  )
}




export default App

