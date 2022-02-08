import Block from './Block'
import { LineWrapper } from '../helper.js'

const CurrentLine = ({ value }) => {
  var word = value
  if (value.length < 5) {
    const needed = 5 - value.length
    for (var i = 0; i < needed; i++) {
      word = word + ' '
    }
  }

  return (
    <LineWrapper>
        {[...word].map((c, i) => 
          <Block key={`block${i}`} letter={c}/>
        )}
    </LineWrapper>
  )
}


export default CurrentLine
