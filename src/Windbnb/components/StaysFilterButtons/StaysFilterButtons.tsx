import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { BiSearchAlt2 } from 'react-icons/bi'

import { HorizontalDivider } from '../../../Common/styledComponent'
import { colors } from '../../../Common/themes/colors'

import {
   AddGuestsButton,
   AddGuestsButtonText,
   FilterButtonsContainer,
   SearchButton,
   SearchInputButton,
   SearchInputButtonText
} from './styledComponents'

interface StaysFilterButtonsProps {
   onClickSearchInputButton: () => void
   onClickAddGuestsButton: () => void
   onClickSearchButton: () => void
   selectedPlace: string
   guestsCount: number
}

const StaysFilterButtons = observer(
   (props: StaysFilterButtonsProps): ReactElement => {
      const {
         selectedPlace,
         onClickSearchInputButton,
         onClickAddGuestsButton,
         onClickSearchButton
      } = props
      return (
         <FilterButtonsContainer>
            <SearchInputButton onClick={onClickSearchInputButton}>
               <SearchInputButtonText>{selectedPlace}</SearchInputButtonText>
            </SearchInputButton>
            <HorizontalDivider />
            <AddGuestsButton onClick={onClickAddGuestsButton}>
               <AddGuestsButtonText>Add Guests</AddGuestsButtonText>
            </AddGuestsButton>
            <HorizontalDivider />
            <SearchButton onClick={onClickSearchButton}>
               <BiSearchAlt2 fill={colors.burntSienna} />
            </SearchButton>
         </FilterButtonsContainer>
      )
   }
)

export default StaysFilterButtons
