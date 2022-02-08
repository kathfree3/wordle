import React from 'react'

import s from 'styled-components'

const Keyboard = () => {
  const row0 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const row1 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const row2 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  // dispatch key events
  const dispatch = l => {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      'key': l
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
      'key': l
    }));
  }
  
  // button handlers
  const letterClicked = c => dispatch(c)
  const enterClicked = () => dispatch('Enter')
  const deleteClicked = () => dispatch('Backspace')

  return (
    <KeyboardWrapper className='keyboard'>
      <KeyRow className='keyrow'>
        {row0.map(c => 
          <Button key={c} id={`keyX${c.toUpperCase()}`}onClick={() => letterClicked(c)}>
            {c.toUpperCase()}
          </Button>
        )}
      </KeyRow>
      <KeyRow className='keyrow'>
        {row1.map(c => 
          <Button key={c} id={`keyX${c.toUpperCase()}`}onClick={() => letterClicked(c)}>
            {c.toUpperCase()}
          </Button>
        )}
      </KeyRow>
      <KeyRow className='keyrow'>
        <Button key='keyXEnter' id='keyXEnter' onClick={() => enterClicked()}>
          ENTER
        </Button>
        {row2.map(c => 
          <Button key={c} id={`keyX${c.toUpperCase()}`} onClick={() => letterClicked(c)}>
            {c.toUpperCase()}
          </Button>
        )}
        <Button key='keyXDel' id='keyXDel' onClick={() => deleteClicked()}>
          DEL
        </Button>
      </KeyRow>
    </KeyboardWrapper>
  )
}

export default Keyboard

const Button = s.button`
  background-color: #818384 !important;
  color: white;
  margin: 0.1rem;
  border: none; 
  min-width: 1rem;
  min-height: 1rem;
  border-radius: 4px;
  font-size: .7rem;
  padding: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

const KeyboardWrapper = s.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
`

const KeyRow = s.div`
  display: flex;
  width: 100%;
  touch-action: manipulation;
  justify-content: center;
`