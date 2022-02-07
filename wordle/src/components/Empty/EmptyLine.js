import s from 'styled-components'
import EmptyBlock from './EmptyBlock'

import { LineWrapper } from '../../StyledComponents.js'


const EmptyLine = () => {
  return (
    <LineWrapper>
      <EmptyBlock />
      <EmptyBlock />
      <EmptyBlock />
      <EmptyBlock />
      <EmptyBlock />
    </LineWrapper>
  )
}


export default EmptyLine

