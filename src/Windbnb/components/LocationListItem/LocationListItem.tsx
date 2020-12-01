import React, { ReactElement, useState } from 'react'
import { ImLocation } from 'react-icons/im'

import { colors } from '../../../Common/themes/colors'

import { LocationItemType } from '../../types'

import {
   LocationIconContainer,
   LocationItem,
   LocationText
} from './styledComponents'

interface LocationListItemProps {
   location: LocationItemType
   onClickLocation: (id: string) => void
}

function LocationListItem(props: LocationListItemProps): ReactElement {
   const [isHovered, setIsHovered] = useState(false)

   const { location, onClickLocation } = props
   return (
      <LocationItem
         onClick={() => onClickLocation(location.id)}
         key={location.id}
         disableShadow
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <LocationIconContainer>
            <ImLocation size={20} color={isHovered ? colors.burntSienna : ''} />
         </LocationIconContainer>
         <LocationText isHovered={isHovered}>{location.name}</LocationText>
      </LocationItem>
   )
}

export default LocationListItem
