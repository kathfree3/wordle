// package imports
import { useEffect, useState, useRef } from "react"
import s from 'styled-components'

// component imports
import GuessedLine from './Guessed/GuessedLine'
import EmptyLine from './Empty/EmptyLine'
import CurrentLine from './CurrentLine'
import Keyboard from './Keyboard'
import GameOver from './GameOver'
// helper imports
import { validGuess } from '../helper.js'
import { triggerGameOver, setGuess, getGuess} from '../storage.js'


const Board = ({ answer, allowedToSolve }) => {
  // current line number
  const [lineNum, setLineNum] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  // current value of what you are guessing
  const [value, setValue] = useState('')
  // line states
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
    if (!gameOver) {
      const { key } = event
      if (key === 'Backspace') {
        setValue(prevUserText => prevUserText.slice(0,-1))
      } else if (key === 'Enter') {
        enterPressed()
      } else {
        if (key.length === 1 && /^[a-zA-Z]+$/.test(key)) {
          setValue(prev => prev.length !== 5 ? prev + key.toUpperCase() : prev)
        }
      }
    }
  }


  const endGame = () => {
    setGameOver(true)
    triggerGameOver(answer, handleUserKeyPress)
  }

  const enterPressed = () => {
    if (value.length === 5) {
      // check if valid
      if (validGuess(value)) {
        const newMap = {guessed: true, guess: value}
        setLines[lineNum](newMap)
        // update storage
        setGuess(lineNum, value)
        setLineNum(lineNum + 1)
        setValue('')
        // now check if that was the right answer
        if (value === answer || lineNum === 5) {
          endGame()
        }
      } else {
        $("#mydiv").fadeIn("slow");
        $(`.block`).addClass('invalid')
        setTimeout(() => {
          $(`.block`).removeClass('invalid')
          $('#mydiv').fadeOut('slow');
        }, 1400);
      }
    }
  }


  useEffect(() => {
    // hide it at first
    $('#mydiv').hide(); 
    window.addEventListener("keydown", handleUserKeyPress);
    return () => window.removeEventListener("keydown", handleUserKeyPress)
  }, [handleUserKeyPress]);

  // update when the input changes
  useEffect(() => {
    setGameOver(!allowedToSolve)
  }, [allowedToSolve]);

  const displayCurrentGame =  lines.map(({guessed, guess}, i) => {
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

  const nums = [0, 1, 2, 3, 4, 5]
  const displayPlayedGame = nums.map(i => {
    const theGuess = getGuess(i)
    if (theGuess !== "") {
      return (<GuessedLine key={i} guess={theGuess} correctWord={answer} />)
    } else {
      return ( <EmptyLine key={i}/> )
    }
  })

  return (
    <>
      <Wrapper>
        <p id='mydiv'> Sorry, that word is not in our list!</p>
      </Wrapper>
      <BoardWrapper className="board">
        {allowedToSolve ? displayCurrentGame : displayPlayedGame}
      </BoardWrapper>
      <Keyboard />
      <GameOver lineNum={lineNum} answer={answer} gameOver={gameOver} />
    </>
  )
}

export default Board

const Wrapper = s.div`
  display: block;
  min-height: 3rem;
  overflow: hidden;
  max-height: 4rem;
  font-size: 1.5rem;
`

const BoardWrapper = s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`