import React, { ReactElement } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

import { colors } from '../../../Common/themes/colors'

import {
   SearchButtonContainer,
   SearchButtonWithIcon,
   SearchButtonText
} from './styledComponents'

interface SearchButtonProps {
   searchStays: () => void
}

function SearchButton(props: SearchButtonProps): ReactElement {
   const { searchStays } = props
   return (
      <SearchButtonContainer>
         <SearchButtonWithIcon onClick={searchStays}>
            <BiSearchAlt2 size={18} fill={colors.concrete} />
            <SearchButtonText>Search</SearchButtonText>
         </SearchButtonWithIcon>
      </SearchButtonContainer>
   )
}

export default SearchButton
