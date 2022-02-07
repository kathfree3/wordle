import s from 'styled-components'

import { COLORS } from '../functions'

export const BlockWrapper = s.div`
  padding: 1rem;
  margin: 0rem 0.5rem;
  display: block;
  justify-content: center;
  text-align: center;
  border: 1px solid ${COLORS.grey};
  color: white;
  min-width: 1rem;
  min-height: 1rem;
`

export const LineWrapper = s.div`
  margin: auto;
  padding: 10px;
  width: 40%;
  display: flex;
  justify-content: center;
`


