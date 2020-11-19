import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import {
   Typo14Gray20MulishNormal,
   Typo14SilverMulishNormal
} from '../../../Common/typos'

export const FilterButtonsContainer = styled.div`
   ${tw`
        flex shadow-filterButtons rounded-16px
    `}
`

export const FilterButton = styled(Button)`
   ${tw`
        bg-transparent py-18px px-16px
    `}
`

export const SearchInputButton = styled(FilterButton)`
   ${tw`
        rounded-l-16px
    `}
`

export const SearchInputButtonText = styled(Typo14Gray20MulishNormal)``

export const AddGuestsButton = styled(FilterButton)``

export const AddGuestsButtonText = styled(Typo14SilverMulishNormal)``

export const SearchButton = styled(FilterButton)`
   ${tw`
        rounded-r-16px
    `}
`
