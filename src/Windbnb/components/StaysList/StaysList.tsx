import React, { Component, ReactElement } from 'react'

import Stay from '../Stay'

import { StaysListContainer } from './styledComponents'

interface StaysListProps {
   stays
}

class StaysList extends Component<StaysListProps> {
   render(): ReactElement {
      const { stays } = this.props
      return (
         <StaysListContainer>
            {stays.map((stay) => (
               <Stay key={stay.id} stayDetails={stay} />
            ))}
         </StaysListContainer>
      )
   }
}

export default StaysList
