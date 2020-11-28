import React, { Component, ReactElement } from 'react'

import staysData from '../../../data/stays.json'

import StaysFilterModal from '../StaysFilterModal'
import StaysFilterBar from '../StaysFilterBar'
import StaysHeader from '../StaysHeader'
import StaysList from '../StaysList'
import AuthorInfoFooter from '../AuthorInfoFooter'

import { HomePageContainer } from './styledComponents'

class WindbnbHomePage extends Component {
   state = {
      stays: staysData,
      isStaysFilterModalOpen: false
   }

   openStaysFilterModal = (): void => {
      this.setState({ isStaysFilterModalOpen: true })
   }

   closeStaysFilterModal = (): void => {
      this.setState({ isStaysFilterModalOpen: false })
   }

   render(): ReactElement {
      const { stays, isStaysFilterModalOpen } = this.state
      return (
         <HomePageContainer>
            <StaysFilterModal
               onClickSearchButton={(): void => {}}
               isOpen={isStaysFilterModalOpen}
               onRequestClose={this.closeStaysFilterModal}
            />
            <StaysFilterBar
               onClickSearchInputButton={this.openStaysFilterModal}
               onClickAddGuestsButton={this.openStaysFilterModal}
               onClickSearchButton={this.openStaysFilterModal}
               selectedPlace={'Helsinki, Finland'}
               guestsCount={5}
            />
            <StaysHeader country={'Finland'} staysCount={stays.length} />
            <StaysList stays={stays} />
            <AuthorInfoFooter />
         </HomePageContainer>
      )
   }
}

export default WindbnbHomePage
