import React, { useState, useEffect } from 'react'

import s from 'styled-components'

import { generateMessage } from '../helper'

const GameOver = ({ answer, lineNum }) => {
  
  //backdrop="static"
  useEffect(() => {
    $('#sharedMessage').hide(); 
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
      <br />
      <button onClick={() => click(lineNum)}> Share results</button>
      <p id="sharedMessage"> results copied to clipboard </p>
    </Wrapper>
  )
}

export default GameOver

const click = lineWonOn => {
  var arr = []
  for (var i = 0; i < lineWonOn; i++) {
    var rowArr = []
    const row = $(".board").children()[i]
    for (var j = 0; j < 5; j++) {
      const child = $(row).children()[j]
      const color = $(child).css("background-color")
      rowArr.push(color)
    }
    arr.push(rowArr)
  }
  navigator.clipboard.writeText(generateMessage(arr))
  $("#sharedMessage").fadeIn("slow");
  setTimeout(() => {
    $('#sharedMessage').fadeOut('slow');
  }, 1400);
}

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