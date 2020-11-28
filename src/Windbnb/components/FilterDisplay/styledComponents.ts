import tw, { styled, TwStyle } from 'twin.macro'

import {
   Typo14Gray20MulishNormal,
   Typo14SilverMulishNormal,
   Typo9Gray20MulishExtraBold
} from '../../../Common/typos'

export const FilterDisplayContainer = styled.div`
   ${tw`
        w-full flex flex-col rounded-16px px-26px py-12px cursor-pointer
    `}
   ${({ isActive }): TwStyle =>
      isActive ? tw`border border-solid border-gray20` : tw``}
`

export const FilterLabelText = styled(Typo9Gray20MulishExtraBold)`
   ${tw`
        uppercase
    `}
`

export const FilteredValueText = styled(Typo14Gray20MulishNormal)``

export const EmptyFilteredValueText = styled(Typo14SilverMulishNormal)``
