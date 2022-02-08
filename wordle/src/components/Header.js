
import s from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <h1> WORDLE </h1>
    </Wrapper>
  )
}

export default Header

const Wrapper = s.div`
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: center;
`
