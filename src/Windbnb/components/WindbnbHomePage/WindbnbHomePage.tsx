import React, { ReactElement, useEffect, useState } from 'react'

import locations from '../../../data/locations.json'

import { GUESTS, LOCATION } from '../../constants/UIConstants'
import { LocationItemType, StayType } from '../../types'

import StaysFilterModal from '../StaysFilterModal'
import StaysFilterBar from '../StaysFilterBar'
import StaysHeader from '../StaysHeader'
import StaysList from '../StaysList'
import AuthorInfoFooter from '../AuthorInfoFooter'

import { HomePageContainer, StaysContainer } from './styledComponents'
import { getCountry, getMatchedStays } from './utils'

function WindbnbHomePage(): ReactElement {
   const [stays, setStays] = useState<Array<StayType>>([])
   const [isStaysFilterModalOpen, setIsStaysFilterModalOpen] = useState(false)
   const [activeFilterSection, setActiveFilterSection] = useState(LOCATION)
   const [location, setLocation] = useState(locations[3])
   const [guestsCount, setGuestsCount] = useState(0)

   useEffect(() => {
      setStays(getMatchedStays(location.name, guestsCount))
   }, [location, guestsCount])

   const openStaysFilterModal = (): void => {
      setIsStaysFilterModalOpen(true)
   }

   const closeStaysFilterModal = (): void => {
      setIsStaysFilterModalOpen(false)
   }

   const openFiltersModalWithLocationActive = (): void => {
      setActiveFilterSection(LOCATION)
      openStaysFilterModal()
   }

   const openFiltersModalWithGuestsActive = (): void => {
      setActiveFilterSection(GUESTS)
      openStaysFilterModal()
   }

   const searchStays = (
      location: LocationItemType,
      adultsCount: number,
      childCount: number
   ) => {
      setLocation(location)
      setGuestsCount(adultsCount + childCount)
      closeStaysFilterModal()
   }

   return (
      <HomePageContainer>
         <StaysFilterModal
            activeSection={activeFilterSection}
            onClickFilterSection={setActiveFilterSection}
            onClickSearchButton={searchStays}
            isOpen={isStaysFilterModalOpen}
            onRequestClose={closeStaysFilterModal}
         />
         <StaysFilterBar
            onClickSearchInputButton={openFiltersModalWithLocationActive}
            onClickAddGuestsButton={openFiltersModalWithGuestsActive}
            onClickSearchButton={openFiltersModalWithLocationActive}
            selectedPlace={location.name}
            guestsCount={guestsCount}
         />
         <StaysHeader
            country={getCountry(location.name)}
            staysCount={stays.length}
         />
         <StaysContainer>
            <StaysList stays={stays} />
         </StaysContainer>
         <AuthorInfoFooter />
      </HomePageContainer>
   )
}

export default WindbnbHomePage
