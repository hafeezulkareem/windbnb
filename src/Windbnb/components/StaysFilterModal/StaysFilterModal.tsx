import React, { ReactElement, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

import { VerticalDivider } from '../../../Common/styledComponents'

import {
   DECREMENT,
   GUESTS,
   INCREMENT,
   LOCATION,
   RESET
} from '../../constants/UIConstants'
import useCounter from '../../hooks/useCounter'

import FilterDisplay from '../FilterDisplay'
import SearchButton from '../SearchButton'
import GuestCounter from '../GuestCounter'

import {
   ActiveFilterSection,
   FiltersContainer,
   FilterSection,
   ActiveFilterSectionContainer,
   LastGuestCounterContainer
} from './styledComponents'
import './reactModalStyles.css'

interface StaysFilterModalProps {
   activeSection: string
   onClickFilterSection: (filterSection: string) => void
   onClickSearchButton: (
      location: string,
      adultsCount: number,
      childCount: number
   ) => void
   isOpen: boolean
   onRequestClose: () => void
}

function StaysFilterModal(props: StaysFilterModalProps): ReactElement {
   const {
      activeSection,
      onClickFilterSection,
      onClickSearchButton,
      onRequestClose,
      ...other
   } = props

   const [location, setLocation] = useState('')
   const [adultsCount, setAdultsCount] = useCounter()
   const [childCount, setChildCount] = useCounter()
   const [guestsCount, setGuestsCount] = useState(adultsCount + childCount)

   useEffect(() => {
      setGuestsCount(adultsCount + childCount)
   }, [adultsCount, childCount])

   const onRequestCloseModal = (): void => {
      onRequestClose()
      setAdultsCount(RESET)
      setChildCount(RESET)
   }

   const isLocationSectionActive = activeSection === LOCATION
   const isGuestsSectionActive = activeSection === GUESTS

   return (
      <ReactModal
         className='modal'
         overlayClassName='overlay'
         shouldCloseOnOverlayClick={true}
         onRequestClose={onRequestCloseModal}
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
            <VerticalDivider />
            <FilterSection>
               <FilterDisplay
                  filterLabel='Guests'
                  filteredValue={guestsCount.toString()}
                  isActive={isGuestsSectionActive}
                  changeActiveFiler={onClickFilterSection}
               />
            </FilterSection>
            <VerticalDivider />
            <FilterSection>
               <SearchButton
                  searchStays={() =>
                     onClickSearchButton(location, adultsCount, childCount)
                  }
               />
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
                        description={'Ages 13 or above'}
                        count={adultsCount}
                        increment={() => setAdultsCount(INCREMENT)}
                        decrement={() => setAdultsCount(DECREMENT)}
                     />
                     <LastGuestCounterContainer>
                        <GuestCounter
                           title={'Children'}
                           description={'Ages 2-12'}
                           count={childCount}
                           increment={() => setChildCount(INCREMENT)}
                           decrement={() => setChildCount(DECREMENT)}
                        />
                     </LastGuestCounterContainer>
                  </>
               ) : null}
            </ActiveFilterSection>
         </ActiveFilterSectionContainer>
      </ReactModal>
   )
}

export default StaysFilterModal
