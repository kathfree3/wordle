
import s from 'styled-components'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

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

      <Modal show={show} onHide={handleClose} fullscreen={true} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>HOW TO PLAY</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <p> Guess the WORDLE in 6 tries.</p>
          <p>
            Each guess must be a valid 5 letter word. 
            Hit the enter button to submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how 
            close your guess was to the word.
          </p>
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
