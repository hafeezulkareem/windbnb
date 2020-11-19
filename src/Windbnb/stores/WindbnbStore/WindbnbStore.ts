import { observable } from 'mobx'

import { StayType } from '../types'

class WindbnbStore {
   @observable stays: Array<StayType>

   constructor(stays: Array<StayType>) {
      this.stays = stays
   }
}

export default WindbnbStore
