import React, { useState } from 'react'

import s from 'styled-components'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const GameWon = ({ answer, won }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //backdrop="static"

  const link= `https://www.marvel.com/search?limit=20&query=${answer}&offset=0`

  return (
    <>
      <Modal className="special-modal"
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        >
        <Modal.Body>
          SOLUTION:
          <p><a href={link}> {answer} </a></p>
          <p className='read-def' ><a href={link}> (read definition here) </a></p>
          
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GameWon
