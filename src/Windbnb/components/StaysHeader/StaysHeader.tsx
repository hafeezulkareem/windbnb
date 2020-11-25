import React, { ReactElement } from 'react'

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

function StaysHeader(props: StaysHeaderProps): ReactElement {
   const { country, staysCount } = props
   return (
      <HeaderContainer>
         <HeaderTitleContainer>
            <TitleText>{country}</TitleText>
         </HeaderTitleContainer>
         <StaysCountContainer>
            <StaysCountText>{staysCount - 2}+ stays</StaysCountText>
         </StaysCountContainer>
      </HeaderContainer>
   )
}

export default StaysHeader
