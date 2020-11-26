import React, { ReactElement } from 'react'

import {
   LocationFilterContainer,
   LocationLabelText,
   LocationText
} from './styledComponents'

interface LocationFilterProps {
   location: string
   isActive: boolean
}

function LocationFilter(props: LocationFilterProps): ReactElement {
   const { location, isActive } = props
   return (
      <LocationFilterContainer isActive={isActive}>
         <LocationLabelText>Location</LocationLabelText>
         <LocationText>{location}</LocationText>
      </LocationFilterContainer>
   )
}

export default LocationFilter
