import React, { ReactElement } from 'react'
import { ImLocation } from 'react-icons/im'

import { LocationsListContainer } from './styledComponents'

interface LocationsListProps {
   onClickLocation: (id: string) => void
}

function LocationsList(props: LocationsListProps): ReactElement {
   return <LocationsListContainer></LocationsListContainer>
}

export default LocationsList
