
import s from 'styled-components'

import HowToPlay from './HowToPlay'

const Header = () => {
  return (
    <Wrapper>
      <H>WORDLE</H>
      <HowToPlay />
    </Wrapper>
  )
}

export default Header

const Wrapper = s.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`


const H = s.h1`
  width: 70%;
`

