import React, { ReactElement, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

import { VerticalDivider } from '../../../Common/styledComponents'
import locations from '../../../data/locations.json'

import {
   DECREMENT,
   GUESTS,
   INCREMENT,
   LOCATION
} from '../../constants/UIConstants'
import useCounter from '../../hooks/useCounter'
import { LocationItemType } from '../../types'

import FilterDisplay from '../FilterDisplay'
import SearchButton from '../SearchButton'
import GuestCounter from '../GuestCounter'
import LocationsList from '../LocationsList'

import {
   ActiveFilterSection,
   FiltersContainer,
   FilterSection,
   ActiveFilterSectionContainer,
   LastGuestCounterContainer,
   DesktopFilterSection,
   MobileFilterSection
} from './styledComponents'
import './reactModalStyles.css'

interface StaysFilterModalProps {
   activeSection: string
   onClickFilterSection: (filterSection: string) => void
   onClickSearchButton: (
      location: LocationItemType,
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

   const [location, setLocation] = useState(locations[3])
   const [adultsCount, setAdultsCount] = useCounter()
   const [childCount, setChildCount] = useCounter()
   const [guestsCount, setGuestsCount] = useState(adultsCount + childCount)

   useEffect(() => {
      setGuestsCount(adultsCount + childCount)
   }, [adultsCount, childCount])

   const onRequestCloseModal = (): void => {
      onRequestClose()
   }

   const updateLocation = (locationId: string): void => {
      const location = locations.find((location) => location.id === locationId)
      if (location) {
         setLocation(location)
      }
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
                  filteredValue={location.name}
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
            <DesktopFilterSection>
               <SearchButton
                  searchStays={() =>
                     onClickSearchButton(location, adultsCount, childCount)
                  }
               />
            </DesktopFilterSection>
         </FiltersContainer>
         <ActiveFilterSectionContainer>
            <ActiveFilterSection
               isLocationSectionActive={isLocationSectionActive}
            >
               {isLocationSectionActive ? (
                  <LocationsList
                     locations={locations}
                     onClickLocation={updateLocation}
                  />
               ) : null}
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
         <MobileFilterSection>
            <SearchButton
               searchStays={() =>
                  onClickSearchButton(location, adultsCount, childCount)
               }
            />
         </MobileFilterSection>
      </ReactModal>
   )
}

export default StaysFilterModal
