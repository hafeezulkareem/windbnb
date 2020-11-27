import React, { ReactElement } from 'react'

import {
   FilterDisplayContainer,
   FilterLabelText,
   FilteredValueText
} from './styledComponents'

interface FilterDisplayProps {
   filterLabel: string
   filteredValue: string
   isActive: boolean
   changeActiveFiler: (filter: string) => void
}

function FilterDisplay(props: FilterDisplayProps): ReactElement {
   const { filterLabel, filteredValue, isActive, changeActiveFiler } = props
   return (
      <FilterDisplayContainer
         onClick={(): void => changeActiveFiler(filterLabel.toUpperCase())}
         isActive={isActive}
      >
         <FilterLabelText>{filterLabel}</FilterLabelText>
         <FilteredValueText>{filteredValue}</FilteredValueText>
      </FilterDisplayContainer>
   )
}

export default FilterDisplay
