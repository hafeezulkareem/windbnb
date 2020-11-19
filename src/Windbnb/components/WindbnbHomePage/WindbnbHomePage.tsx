import { inject, observer } from 'mobx-react'
import React, { Component, ReactElement } from 'react'

import WindbnbStore from '../../stores/WindbnbStore/WindbnbStore'

import StaysFilterBar from '../StaysFilterBar'
import StaysHeader from '../StaysHeader'
import StaysList from '../StaysList'
import AuthorInfoFooter from '../AuthorInfoFooter'

import { HomePageContainer } from './styledComponents'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WindbnbProps {}

interface InjectedProps extends WindbnbProps {
   windbnbStore: WindbnbStore
}

@inject('windbnbStore')
@observer
class WindbnbHomePage extends Component<WindbnbProps> {
   get injectedProps(): InjectedProps {
      return this.props as InjectedProps
   }

   get windbnbStore(): WindbnbStore {
      const { windbnbStore } = this.injectedProps
      return windbnbStore
   }

   render(): ReactElement {
      const { stays } = this.windbnbStore
      return (
         <HomePageContainer>
            <StaysFilterBar
               onClickSearchInputButton={(): void => {}}
               onClickAddGuestsButton={(): void => {}}
               onClickSearchButton={(): void => {}}
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
