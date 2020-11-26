import tw, { styled, TwStyle } from 'twin.macro'

import {
   Typo14Gray20MulishNormal,
   Typo9Gray20MulishExtraBold
} from '../../../Common/typos'

export const LocationFilterContainer = styled.div`
   ${tw`
        flex flex-col rounded-16px px-26px py-12px
    `}
   ${({ isActive }): TwStyle =>
      isActive ? tw`border border-solid border-gray20` : tw``}
`

export const LocationLabelText = styled(Typo9Gray20MulishExtraBold)`
   ${tw`
        uppercase
    `}
`

export const LocationText = styled(Typo14Gray20MulishNormal)``
