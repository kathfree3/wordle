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
        <Space />
        {row1.map(c => 
          <Button key={c} id={`keyX${c.toUpperCase()}`}onClick={() => letterClicked(c)}>
            {c.toUpperCase()}
          </Button>
        )}
        <Space />
      </KeyRow>
      <KeyRow className='keyrow'>
        <SpecialButton key='keyXEnter' id='keyXEnter' onClick={() => enterClicked()}>
          ENTER
        </SpecialButton>
        {row2.map(c => 
          <Button key={c} id={`keyX${c.toUpperCase()}`} onClick={() => letterClicked(c)}>
            {c.toUpperCase()}
          </Button>
        )}
        <SpecialButton key='keyXDel' id='keyXDel' onClick={() => deleteClicked()}>
          DEL
        </SpecialButton>
      </KeyRow>
    </KeyboardWrapper>
  )
}

export default Keyboard

const Button = s.button`
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

const SpecialButton = s(Button)`
  flex: 1.5;
`
const KeyboardWrapper = s.div`
  width: 40%;
  display: block;
  margin: 3rem;
`

const KeyRow = s.div`
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