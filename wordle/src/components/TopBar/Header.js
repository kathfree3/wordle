
import s from 'styled-components'

import HowToPlay from './HowToPlay'

const Header = () => {
  const str = "marvdle"
  return (
    <Wrapper>
      <H>{str.toUpperCase()}</H>
      <HowToPlay />
    </Wrapper>
  )
}

export default Header

const Wrapper = s.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`


const H = s.h1`
  margin-left: 10%;
  width: 80%;
`

