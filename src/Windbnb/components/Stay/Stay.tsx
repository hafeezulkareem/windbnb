import React, { Component, ReactElement, ReactNode } from 'react'
import { MdStar } from 'react-icons/md'

import { colors } from '../../../Common/themes/colors'

import {
   StayBadgeAndTypeContainer,
   StayBadgeTypeAndRatingsContainer,
   StayDetailsContainer,
   StayImage,
   StayImageContainer,
   StayRatingsContainer,
   StayRatingsText,
   StaySuperHostBadge,
   StaySuperHostBadgeText,
   StayTitleContainer,
   StayTitleText,
   StayTypeText
} from './styledComponents'

interface StayProps {
   stayDetails
}

class Stay extends Component<StayProps> {
   renderSuperHostBadge = (): ReactNode => {
      const {
         stayDetails: { superHost }
      } = this.props
      return superHost ? (
         <StaySuperHostBadge>
            <StaySuperHostBadgeText>Super Host</StaySuperHostBadgeText>
         </StaySuperHostBadge>
      ) : null
   }

   renderBedsCount = (): ReactNode => {
      const {
         stayDetails: { beds }
      } = this.props
      return beds ? (
         <>
            . {beds} {beds > 1 ? 'beds' : 'bed'}
         </>
      ) : null
   }

   render(): ReactElement {
      const {
         stayDetails: { photo, title, superHost, type, rating }
      } = this.props
      return (
         <StayDetailsContainer>
            <StayImageContainer>
               <StayImage src={photo} alt={title} />
            </StayImageContainer>
            <StayBadgeTypeAndRatingsContainer>
               <StayBadgeAndTypeContainer>
                  {this.renderSuperHostBadge()}
                  <StayTypeText superHost={superHost}>
                     {type} {this.renderBedsCount()}
                  </StayTypeText>
               </StayBadgeAndTypeContainer>
               <StayRatingsContainer>
                  <MdStar color={colors.burntSienna} />
                  <StayRatingsText>{rating}</StayRatingsText>
               </StayRatingsContainer>
            </StayBadgeTypeAndRatingsContainer>
            <StayTitleContainer>
               <StayTitleText>{title}</StayTitleText>
            </StayTitleContainer>
         </StayDetailsContainer>
      )
   }
}

export default Stay
