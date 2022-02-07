
import s from 'styled-components'
import { useEffect, useState } from "react"

import GuessedLine from './Guessed/GuessedLine'
import EmptyLine from './Empty/EmptyLine'
import CurrentLine from './CurrentLine'

import { validGuess } from '../../functions.js'

const Board = ({ answer }) => {
  // current line number
  const [lineNum, setLineNum] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  // current value of what you are guessing
  const [value, setValue] = useState('')

  const [lineZero, setLineZero] = useState({ guessed: false, guess: '' })
  const [lineOne, setLineOne] = useState({ guessed: false, guess: '' })
  const [lineTwo, setLineTwo] = useState({ guessed: false, guess: '' })
  const [lineThree, setLineThree] = useState({ guessed: false, guess: '' })
  const [lineFour, setLineFour] = useState({ guessed: false, guess: '' })
  const [lineFive, setLineFive] = useState({ guessed: false, guess: '' })


  // arrays for line info
  const lines = [lineZero, lineOne, lineTwo, lineThree, lineFour, lineFive]
  const setLines = [setLineZero, setLineOne, setLineTwo, setLineThree, setLineFour, setLineFive]

  // event handlre for key pressed
  const handleUserKeyPress = event => {
    const { key } = event
    if (key === 'Backspace') {
      setValue(prevUserText => prevUserText.slice(0,-1))
    } else if (key === 'Enter') {
      enterPressed()
    } else {
      setValue(prevUserText => addLetter(prevUserText, key.toUpperCase()))
    }
  }

  // helper for adding a letter to a word
  const addLetter = (curr, newKey) => {
    return curr.length !== 5 ? curr + newKey : curr
  }

  const enterPressed = () => {
    if (value.length === 5) {
      // check if valid
      if (validGuess(value)) {
        const newMap = {guessed: true, guess:value}
        setLines[lineNum](newMap)
        setLineNum(lineNum + 1)
        setValue('')
        // now check if that was the right answer
        if (value === answer) {
          setGameOver(true)
        }
      } else {
        $("#mydiv").show()
      }
      if (lineNum === 5) {
        setGameOver(true)
      }
    }
  }


  // use effect
  useEffect(() => {
    setTimeout(() => {  
      $('#mydiv').fadeOut('slow');  
    }, 3000);

      window.addEventListener("keydown", handleUserKeyPress);
      return () => {
          window.removeEventListener("keydown", handleUserKeyPress);
      };
  }, [handleUserKeyPress]);


  const displayLines =  lines.map(({guessed, guess}, i) => {
    // line that we don't need to worry about
    if (i > lineNum) {
      return ( <EmptyLine key={i}/> )
    }

    // current line... should take into account the guesses
    if (i == lineNum) {
      return ( <CurrentLine value={value} key={i}/>)
    }

    // already guessed
    if (guessed) {
      return ( <GuessedLine key={i} guess={guess} correctWord={answer} /> )
    }
  })

  return (
    <>
      <p id='mydiv' hidden> Sorry that word is not in our list</p>
      {displayLines}
    </>
  )
}

export default Board

