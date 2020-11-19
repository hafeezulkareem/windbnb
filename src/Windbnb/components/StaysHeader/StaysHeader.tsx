import React, { Component, ReactElement } from 'react'

import {
   HeaderContainer,
   HeaderTitleContainer,
   StaysCountContainer,
   StaysCountText,
   TitleText
} from './styledComponents'

interface StaysHeaderProps {
   country: string
   staysCount: number
}

class StaysHeader extends Component<StaysHeaderProps> {
   render(): ReactElement {
      const { country, staysCount } = this.props
      return (
         <HeaderContainer>
            <HeaderTitleContainer>
               <TitleText>{country}</TitleText>
            </HeaderTitleContainer>
            <StaysCountContainer>
               <StaysCountText>{staysCount - 1}+ stays</StaysCountText>
            </StaysCountContainer>
         </HeaderContainer>
      )
   }
}

export default StaysHeader
