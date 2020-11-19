import tw, { styled } from 'twin.macro'

import {
   Typo14Gray31MontserratMedium,
   Typo24Gray20MontserratBold
} from '../../../Common/typos'

export const HeaderContainer = styled.div`
   ${tw`
        flex justify-between items-center
    `}
`

export const HeaderTitleContainer = styled.div``

export const TitleText = styled(Typo24Gray20MontserratBold)``

export const StaysCountContainer = styled.div``

export const StaysCountText = styled(Typo14Gray31MontserratMedium)``
