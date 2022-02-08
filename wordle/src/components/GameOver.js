import React, { useState } from 'react'

import s from 'styled-components'

const GameOver = ({ answer, won }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //backdrop="static"

  const link= `https://www.marvel.com/search?limit=20&query=${answer}&offset=0`

  return (
    <Wrapper>
      SOLUTION:
      <p>
        <Link href={link}> {answer} </Link>
      </p>
      <ReadDef href={link}> (read definition here) </ReadDef>
    </Wrapper>
  )
}

export default GameOver

const Wrapper = s.div`
  margin:1rem;
`
const Link = s.a`
  text-decoration: none;
  color: 	#57afdb;
`
const ReadDef = s.a`
    text-decoration: none;
    color: #676060 !important;
    font-size: 14px !important;
`