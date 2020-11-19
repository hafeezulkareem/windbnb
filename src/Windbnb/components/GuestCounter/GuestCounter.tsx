import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'

import {
   CounterButton,
   CounterButtonsContainer,
   CounterContainer,
   CounterDescription,
   CounterTitle,
   CountText
} from './styledComponents'

interface GuestCounterProps {
   title: string
   description: string
   count: number
   increment: () => void
   decrement: () => void
}

const GuestCounter = observer(
   (props: GuestCounterProps): ReactElement => {
      const { title, description, count, increment, decrement } = props
      return (
         <CounterContainer>
            <CounterTitle>{title}</CounterTitle>
            <CounterDescription>{description}</CounterDescription>
            <CounterButtonsContainer>
               <CounterButton onClick={decrement} disabled={count === 0}>
                  -
               </CounterButton>
               <CountText>{count}</CountText>
               <CounterButton onClick={increment}>+</CounterButton>
            </CounterButtonsContainer>
         </CounterContainer>
      )
   }
)

export default GuestCounter
