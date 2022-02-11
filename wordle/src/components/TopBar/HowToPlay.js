
import s from 'styled-components'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import GuessedLine from '../Guessed/GuessedLine'
import Block from '../Block'
import { COLORS } from '../../helper'

const HowToPlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <QButton onClick={handleShow}>
        ?
      </QButton>

      <Modal
        show={show}
        onHide={handleClose}
        fullscreen={true}
        animation={true}
      >
        <Modal.Header closeButton />
        <Modal.Body className='modal-body'>
          <h2>HOW TO PLAY</h2>
          <p> Guess the WORDLE in 6 tries.</p>
          <p>
            Each guess must be a valid 5 letter word. 
            Hit the enter button to submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how 
            close your guess was to the word.
          </p>
          
          <hr />
        Examples
        
        <p> <GuessedLine guess={'BUCKY'} correctWord={"BRUCE"} /></p> 
        <p> The letter B is in the word and in the correct spot.</p>
        <p> Letters U and C are in the word, however they are both in the incorrect spot. </p>
        <p> Letters K and Y are not in the word at all. </p>

        <hr />
      
        A new LEWDLE will be available each day!
        </Modal.Body>
      </Modal>
    </>
  );
}


export default HowToPlay

const QButton = s.button`
  border: none;
  border-radius: 20px;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  padding: 0px;
  background-color: ${COLORS.lightgrey} !important;
`
