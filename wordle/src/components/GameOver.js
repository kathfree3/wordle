import React, { useState, useEffect } from 'react'

import s from 'styled-components'

const GameOver = ({ answer, won }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //backdrop="static"
  useEffect(() => {
    localStorage.setItem('solvedToday', Date.now());
  });

  const link= `https://www.marvel.com/search?limit=20&query=${answer}&offset=0`

  return (
    <Wrapper>
      SOLUTION:
      <p>
        <Link href={link} target="_blank"> {answer} </Link>
      </p>
      <ReadDef href={link} target="_blank"> (read definition here) </ReadDef>
    </Wrapper>
  )
}

export default GameOver

const Wrapper = s.div`
  margin:1rem;
  font-size: 2rem;
`
const Link = s.a`
  text-decoration: none;
  color: 	#57afdb;
`
const ReadDef = s.a`
    text-decoration: none;
    color: #676060 !important;
`