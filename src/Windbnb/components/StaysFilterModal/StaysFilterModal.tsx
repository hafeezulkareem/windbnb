import React, { ReactElement } from 'react'
import ReactModal from 'react-modal'

import { HorizontalDivider } from '../../../Common/styledComponents'

import { GUESTS, LOCATION } from '../../constants/UIConstants'

import FilterDisplay from '../FilterDisplay'
import SearchButton from '../SearchButton'
import GuestCounter from '../GuestCounter'

import {
   ActiveFilterSection,
   FiltersContainer,
   FilterSection,
   ActiveFilterSectionContainer
} from './styledComponents'
import './reactModalStyles.css'

interface StaysFilterModalProps {
   activeSection: string
   location: string
   guestsCount: number
   onClickFilterSection: (filterSection: string) => void
   onClickSearchButton: () => void
   isOpen: boolean
   onRequestClose: () => void
}

function StaysFilterModal(props: StaysFilterModalProps): ReactElement {
   const {
      activeSection,
      location,
      guestsCount,
      onClickFilterSection,
      onClickSearchButton,
      ...other
   } = props

   const isLocationSectionActive = activeSection === LOCATION
   const isGuestsSectionActive = activeSection === GUESTS

   return (
      <ReactModal
         className='modal'
         overlayClassName='overlay'
         shouldCloseOnOverlayClick={true}
         {...other}
      >
         <FiltersContainer>
            <FilterSection>
               <FilterDisplay
                  filterLabel='Location'
                  filteredValue={location}
                  isActive={isLocationSectionActive}
                  changeActiveFiler={onClickFilterSection}
               />
            </FilterSection>
            <HorizontalDivider />
            <FilterSection>
               <FilterDisplay
                  filterLabel='Guests'
                  filteredValue={guestsCount.toString()}
                  isActive={isGuestsSectionActive}
                  changeActiveFiler={onClickFilterSection}
               />
            </FilterSection>
            <HorizontalDivider />
            <FilterSection>
               <SearchButton searchStays={onClickSearchButton} />
            </FilterSection>
         </FiltersContainer>
         <ActiveFilterSectionContainer>
            <ActiveFilterSection>
               {isLocationSectionActive ? 'Location' : null}
            </ActiveFilterSection>
            <ActiveFilterSection>
               {isGuestsSectionActive ? (
                  <>
                     <GuestCounter
                        title={'Adults'}
                        description={'Add guests'}
                        count={5}
                        increment={() => {}}
                        decrement={() => {}}
                     />
                     <GuestCounter
                        title={'Children'}
                        description={'Add guests'}
                        count={3}
                        increment={() => {}}
                        decrement={() => {}}
                     />
                  </>
               ) : null}
            </ActiveFilterSection>
         </ActiveFilterSectionContainer>
      </ReactModal>
   )
}

export default StaysFilterModal
