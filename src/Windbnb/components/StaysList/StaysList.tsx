import React, { ReactElement } from 'react'

import Stay from '../Stay'

import { NoStaysText, StaysListContainer } from './styledComponents'

interface StaysListProps {
   stays
}

function StaysList(props: StaysListProps): ReactElement {
   const { stays } = props
   return (
      <StaysListContainer>
         {stays.length > 0 ? (
            stays.map((stay) => <Stay key={stay.id} stayDetails={stay} />)
         ) : (
            <NoStaysText>No Stays to display</NoStaysText>
         )}
      </StaysListContainer>
   )
}

export default StaysList
