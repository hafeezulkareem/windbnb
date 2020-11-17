import React, { Component, ReactElement } from 'react'

import stays from '../../../data/stays.json'

import Stay from '../Stay'

import { StaysListContainer } from './styledComponents'

class StaysList extends Component {
   render(): ReactElement {
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
