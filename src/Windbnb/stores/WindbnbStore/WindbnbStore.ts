import { observable } from 'mobx'

import stays from '../../../data/stays.json'

import { StayType } from '../types'

class WindbnbStore {
   @observable stays: Array<StayType>

   constructor() {
      this.stays = stays
   }
}

export default WindbnbStore
