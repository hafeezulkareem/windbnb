import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'

import WindbnbLogo from '../../../Common/icons/WindbnbLogo'

import StaysFilterButtons from '../StaysFilterButtons'

import {
   FilterBarContainer,
   StaysFilterButtonsContainer,
   WindbnbLogoContainer
} from './styledComponents'

interface StaysFilterBarProps {
   onClickSearchInputButton: () => void
   onClickAddGuestsButton: () => void
   onClickSearchButton: () => void
   selectedPlace: string
   guestsCount: number
}

const StaysFilterBar = observer(
   (props: StaysFilterBarProps): ReactElement => (
      <FilterBarContainer>
         <WindbnbLogoContainer>
            <WindbnbLogo />
         </WindbnbLogoContainer>
         <StaysFilterButtonsContainer>
            <StaysFilterButtons {...props} />
         </StaysFilterButtonsContainer>
      </FilterBarContainer>
   )
)

export default StaysFilterBar
