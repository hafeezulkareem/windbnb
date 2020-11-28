import React, { ReactElement } from 'react'

import Stay from '../Stay'

import { StaysListContainer } from './styledComponents'

interface StaysListProps {
   stays
}

function StaysList(props: StaysListProps): ReactElement {
   const { stays } = props
   return (
      <StaysListContainer>
         {stays.map((stay) => (
            <Stay key={stay.id} stayDetails={stay} />
         ))}
      </StaysListContainer>
   )
}

export default StaysList
