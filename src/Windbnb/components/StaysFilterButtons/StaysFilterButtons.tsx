import React, { ReactElement, ReactNode } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

import { VerticalDivider } from '../../../Common/styledComponents'
import { colors } from '../../../Common/themes/colors'

import {
   AddGuestsButton,
   AddGuestsText,
   FilterButtonsContainer,
   GuestsCountText,
   GuestsTitleText,
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

function StaysFilterButtons(props: StaysFilterButtonsProps): ReactElement {
   const {
      selectedPlace,
      guestsCount,
      onClickSearchInputButton,
      onClickAddGuestsButton,
      onClickSearchButton
   } = props

   const renderAddGuestsButtonChildren = (): ReactNode =>
      guestsCount > 0 ? (
         <>
            <GuestsTitleText>Guests</GuestsTitleText>
            <GuestsCountText>
               {guestsCount} {guestsCount > 1 ? 'guests' : 'guest'}
            </GuestsCountText>
         </>
      ) : (
         <AddGuestsText>Add Guests</AddGuestsText>
      )

   return (
      <FilterButtonsContainer>
         <SearchInputButton onClick={onClickSearchInputButton}>
            <SearchInputButtonText>
               {selectedPlace === '' ? 'Select location' : selectedPlace}
            </SearchInputButtonText>
         </SearchInputButton>
         <VerticalDivider />
         <AddGuestsButton onClick={onClickAddGuestsButton}>
            {renderAddGuestsButtonChildren()}
         </AddGuestsButton>
         <VerticalDivider />
         <SearchButton onClick={onClickSearchButton}>
            <BiSearchAlt2 size={22} fill={colors.burntSienna} />
         </SearchButton>
      </FilterButtonsContainer>
   )
}

export default StaysFilterButtons
