import staysData from '../../../data/stays.json'

import { StayType } from '../../types'

const splitLocation = (location: string): Array<string> => location.split(', ')

export const getCountry = (location: string): string =>
   splitLocation(location)[1]

export const getState = (location: string): string => splitLocation(location)[0]

export const getMatchedStays = (
   location: string,
   guestsCount: number
): Array<StayType> => {
   const [state, country] = splitLocation(location)
   const matchedStaysWithinCountry = staysData.filter(
      (stay) => stay.country === country
   )
   const matchedStaysWithinState = matchedStaysWithinCountry.filter(
      (stay) => stay.city === state
   )
   const stays = matchedStaysWithinState.filter(
      (stay) => guestsCount <= stay.maxGuests
   )
   return stays
}
