import React, { Component, ReactElement, ReactNode } from 'react'
import { observer } from 'mobx-react'
import { BiSearchAlt2 } from 'react-icons/bi'

import { HorizontalDivider } from '../../../Common/styledComponents'
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

@observer
class StaysFilterButtons extends Component<StaysFilterButtonsProps> {
   renderAddGuestsButtonChildren = (): ReactNode => {
      const { guestsCount } = this.props
      return guestsCount > 0 ? (
         <>
            <GuestsTitleText>Guests</GuestsTitleText>
            <GuestsCountText>
               {guestsCount} {guestsCount > 1 ? 'guests' : 'guest'}
            </GuestsCountText>
         </>
      ) : (
         <AddGuestsText>Add Guests</AddGuestsText>
      )
   }

   onClick = (): void => {
      const { onClickSearchInputButton } = this.props
      console.log('Search input button clicked')
      onClickSearchInputButton()
   }

   render(): ReactElement {
      const {
         selectedPlace,
         onClickSearchInputButton,
         onClickAddGuestsButton,
         onClickSearchButton
      } = this.props
      return (
         <FilterButtonsContainer>
            <SearchInputButton onClick={this.onClick}>
               <SearchInputButtonText>{selectedPlace}</SearchInputButtonText>
            </SearchInputButton>
            <HorizontalDivider />
            <AddGuestsButton onClick={onClickAddGuestsButton}>
               {this.renderAddGuestsButtonChildren()}
            </AddGuestsButton>
            <HorizontalDivider />
            <SearchButton onClick={onClickSearchButton}>
               <BiSearchAlt2 size={22} fill={colors.burntSienna} />
            </SearchButton>
         </FilterButtonsContainer>
      )
   }
}

export default StaysFilterButtons
