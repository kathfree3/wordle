
import Header from "./components/Header"
import Board from "./components/Board"

import { COLORS } from '../functions.js'
import { useState } from "react"

const App = () => {

  return (
    <>
      <Header />
      <Board answer='HELLO' />
    </>
  )
}




export default App

