import React, { ReactElement } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

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

const GuestCounter = (props: GuestCounterProps): ReactElement => {
   const { title, description, count, increment, decrement } = props
   return (
      <CounterContainer>
         <CounterTitle>{title}</CounterTitle>
         <CounterDescription>{description}</CounterDescription>
         <CounterButtonsContainer>
            <CounterButton onClick={decrement} disabled={count === 0}>
               <BiMinus />
            </CounterButton>
            <CountText>{count}</CountText>
            <CounterButton onClick={increment}>
               <BiPlus />
            </CounterButton>
         </CounterButtonsContainer>
      </CounterContainer>
   )
}

export default GuestCounter
