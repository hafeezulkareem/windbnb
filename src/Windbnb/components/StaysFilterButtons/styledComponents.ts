import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import {
   Typo14Gray20MulishNormal,
   Typo14SilverMulishNormal,
   Typo9Gray20MulishExtraBold
} from '../../../Common/typos'

export const FilterButtonsContainer = styled.div`
   ${tw`
        flex shadow-filterButtons rounded-16px bg-white
    `}
`

export const FilterButton = styled(Button)`
   ${tw`
        bg-transparent py-18px px-16px hover:bg-transparent rounded-none
    `}
`

export const SearchInputButton = styled(FilterButton)`
   ${tw`
        rounded-l-16px
    `}
`

export const SearchInputButtonText = styled(Typo14Gray20MulishNormal)``

export const AddGuestsButton = styled(FilterButton)`
   ${tw`
        flex flex-col items-start
    `}
`

export const AddGuestsText = styled(Typo14SilverMulishNormal)``

export const GuestsTitleText = styled(Typo9Gray20MulishExtraBold)``

export const GuestsCountText = styled(Typo14Gray20MulishNormal)`
   ${tw`
        mt-4px
    `}
`

export const SearchButton = styled(FilterButton)`
   ${tw`
        rounded-r-16px
    `}
`
