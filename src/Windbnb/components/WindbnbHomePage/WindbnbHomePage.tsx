import React, { ReactElement, useState } from 'react'

import staysData from '../../../data/stays.json'

import { GUESTS, LOCATION } from '../../constants/UIConstants'

import StaysFilterModal from '../StaysFilterModal'
import StaysFilterBar from '../StaysFilterBar'
import StaysHeader from '../StaysHeader'
import StaysList from '../StaysList'
import AuthorInfoFooter from '../AuthorInfoFooter'

import { HomePageContainer, StaysContainer } from './styledComponents'

function WindbnbHomePage(): ReactElement {
   const [stays, setStays] = useState(staysData)
   const [isStaysFilterModalOpen, setIsStaysFilterModalOpen] = useState(false)
   const [activeFilterSection, setActiveFilterSection] = useState(LOCATION)
   const [location, setLocation] = useState('')
   const [guestsCount, setGuestsCount] = useState(0)

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
      location: string,
      adultsCount: number,
      childCount: number
   ) => {
      setLocation(location)
      setGuestsCount(adultsCount + childCount)
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
            selectedPlace={location}
            guestsCount={guestsCount}
         />
         <StaysHeader country={'Finland'} staysCount={stays.length} />
         <StaysContainer>
            <StaysList stays={stays} />
         </StaysContainer>
         <AuthorInfoFooter />
      </HomePageContainer>
   )
}

export default WindbnbHomePage
