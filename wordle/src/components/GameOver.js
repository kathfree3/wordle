import React, { useState } from 'react'

import s from 'styled-components'

const GameWon = ({ answer, won }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //backdrop="static"

  const link= `https://www.marvel.com/search?limit=20&query=${answer}&offset=0`

  return (
    <div>
      SOLUTION:
      <p>
        <Link href={link}> {answer} </Link>
      </p>
      <ReadDef href={link}> (read definition here) </ReadDef>
    </div>
  )
}

export default GameWon

/*Modal styles */
// .modal-content {
//   background-color: #000 !important;
//   text-align: center;
// }

// .modal-body {
//   color: #cccccc !important;
  
// }

// .special-modal a {

// }

const Link = s.a`
  text-decoration: none;
  color: 	#57afdb;
`
const ReadDef = s.a`
    text-decoration: none;
    color: #676060 !important;
    font-size: 14px !important;
`