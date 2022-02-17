import React from 'react'

import s from 'styled-components'

const Keyboard = () => {
  const row0 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const row1 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const row2 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  // dispatch key events
  const dispatch = l => {
    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': l }));
    window.dispatchEvent(new KeyboardEvent('keyup', { 'key': l }));
  }
  
  // button handlers
  const letterClicked = c => dispatch(c)
  const enterClicked = () => dispatch('Enter')
  const deleteClicked = () => dispatch('Backspace')

  return (
    <KeyboardWrapper className='keyboard'>
      <Row className='keyrow'>
        {row0.map(c => 
          <Key key={c} id={`keyX${c.toUpperCase()}`} onClick={() => letterClicked(c)}> {c.toUpperCase()} </Key>
        )}
      </Row>
      <Row className='keyrow'>
        <Space />
        {row1.map(c => 
          <Key key={c} id={`keyX${c.toUpperCase()}`}onClick={() => letterClicked(c)}> {c.toUpperCase()} </Key>
        )}
        <Space />
      </Row>
      <Row className='keyrow'>
        <SpecialKey key='keyXEnter' id='keyXEnter' onClick={() => enterClicked()}> ENTER </SpecialKey>
        {row2.map(c => 
          <Key key={c} id={`keyX${c.toUpperCase()}`} onClick={() => letterClicked(c)}> {c.toUpperCase()} </Key>
        )}
        <SpecialKey key='keyXDel' id='keyXDel' onClick={() => deleteClicked()}> DEL</SpecialKey>
      </Row>
    </KeyboardWrapper>
  )
}

export default Keyboard

const Key = s.button`
  background-color: #818384 !important;
  font-weight: bold;
  color: white;
  border: none; 
  padding: 0;
  margin: 0 6px 0 0;
  height: 3rem;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpecialKey = s(Key)`
  flex: 1.5;
`
const KeyboardWrapper = s.div`
  width: 40%;
  display: block;
  margin: 3rem;
`

const Row = s.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
  justify-content: center;
`

const Space = s.div`
  flex: 0.5;
  display: block;
`