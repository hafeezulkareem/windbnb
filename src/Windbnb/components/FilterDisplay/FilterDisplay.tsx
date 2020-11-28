import React, { ReactElement, ReactNode } from 'react'

import {
   FilterDisplayContainer,
   FilterLabelText,
   FilteredValueText,
   EmptyFilteredValueText
} from './styledComponents'

interface FilterDisplayProps {
   filterLabel: string
   filteredValue: string
   isActive: boolean
   changeActiveFiler: (filter: string) => void
}

function FilterDisplay(props: FilterDisplayProps): ReactElement {
   const { filterLabel, filteredValue, isActive, changeActiveFiler } = props

   const updatedFilteredValue = (): ReactNode =>
      filteredValue === '0' ? (
         <EmptyFilteredValueText>Add guests</EmptyFilteredValueText>
      ) : filteredValue === '' ? (
         <EmptyFilteredValueText>Add location</EmptyFilteredValueText>
      ) : (
         <FilteredValueText>{filteredValue}</FilteredValueText>
      )

   return (
      <FilterDisplayContainer
         onClick={(): void => changeActiveFiler(filterLabel.toUpperCase())}
         isActive={isActive}
      >
         <FilterLabelText>{filterLabel}</FilterLabelText>
         {updatedFilteredValue()}
      </FilterDisplayContainer>
   )
}

export default FilterDisplay
