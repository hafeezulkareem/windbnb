import React, { ReactElement } from 'react'
import { ImLocation } from 'react-icons/im'

import { LocationItemType } from '../../types'

import {
   LocationIconContainer,
   LocationItem,
   LocationsListContainer,
   LocationText
} from './styledComponents'

interface LocationsListProps {
   locations: Array<LocationItemType>
   onClickLocation: (id: string) => void
}

function LocationsList(props: LocationsListProps): ReactElement {
   const { locations, onClickLocation } = props
   return (
      <LocationsListContainer>
         {locations.map((location) => (
            <LocationItem
               onClick={() => onClickLocation(location.id)}
               key={location.id}
               disableShadow
            >
               <LocationIconContainer>
                  <ImLocation size={20} />
               </LocationIconContainer>
               <LocationText>{location.name}</LocationText>
            </LocationItem>
         ))}
      </LocationsListContainer>
   )
}

export default LocationsList
