import React from 'react'

const Keyboard = () => {
  const row0 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const row1 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const row2 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  return (
    <div className='keyboard'>
      <div className='keyrow'>
        {row0.map(c => 
          <button key={c} id={`keyX${c.toUpperCase()}`}> {c.toUpperCase()} </button>
        )}
      </div>

      <div className='keyrow'>
        {row1.map(c => 
          <button key={c} id={`keyX${c.toUpperCase()}`}> {c.toUpperCase()} </button>
        )}
      </div>
      <div className='keyrow'>
      {row2.map(c => 
          <button key={c} id={`keyX${c.toUpperCase()}`}> {c.toUpperCase()} </button>
        )}
      </div>
    </div>
  )
}

export default Keyboard

