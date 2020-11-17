import tw, { styled, TwStyle } from 'twin.macro'

import {
   Typo12Gray31MontserratBold,
   Typo14Gray31MontserratMedium,
   Typo14Gray3MontserratMedium,
   Typo16Gray20MontserratSemiBold
} from '../../../Common/typos'

export const StayDetailsContainer = styled.div`
   ${tw`
        max-w-395px flex flex-col
    `}
`

export const StayImageContainer = styled.div`
   ${tw`
        rounded-24px
    `}
`

export const StayImage = styled.img`
   ${tw`
        w-full h-full rounded-24px
    `}
`

export const StayBadgeTypeAndRatingsContainer = styled.div`
   ${tw`
        flex items-center justify-between mt-16px
    `}
`

export const StayBadgeAndTypeContainer = styled.div`
   ${tw`
        flex items-center
    `}
`

export const StaySuperHostBadge = styled.div`
   ${tw`
        px-8px py-4px rounded-12px border border-solid border-gray31
    `}
`

export const StaySuperHostBadgeText = styled(Typo12Gray31MontserratBold)`
   ${tw`
        uppercase
    `}
`

export const StayTypeText = styled(Typo14Gray3MontserratMedium)`
   ${({ superHost }): TwStyle => (superHost ? tw`ml-12px` : tw``)}
`

export const StayRatingsContainer = styled.div`
   ${tw`
        flex
    `}
`

export const StayRatingsText = styled(Typo14Gray31MontserratMedium)`
   ${tw`
        ml-8px
    `}
`

export const StayTitleContainer = styled.div`
   ${tw`
        mt-8px
    `}
`

export const StayTitleText = styled(Typo16Gray20MontserratSemiBold)``
