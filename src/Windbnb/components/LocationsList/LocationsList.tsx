import React, { ReactElement } from 'react'

import { LocationItemType } from '../../types'

import LocationListItem from '../LocationListItem'

import { LocationsListContainer } from './styledComponents'

interface LocationsListProps {
   locations: Array<LocationItemType>
   onClickLocation: (id: string) => void
}

function LocationsList(props: LocationsListProps): ReactElement {
   const { locations, onClickLocation } = props
   return (
      <LocationsListContainer>
         {locations.map((location) => (
            <LocationListItem
               key={location.id}
               location={location}
               onClickLocation={onClickLocation}
            />
         ))}
      </LocationsListContainer>
   )
}

export default LocationsList
