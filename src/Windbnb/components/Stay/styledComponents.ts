import tw, { styled, TwStyle } from 'twin.macro'

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
        flex justify-between mt-16px
    `}
`

export const StayBadgeAndTypeContainer = styled.div`
   ${tw`
        flex
    `}
`

export const StaySuperHostBadge = styled.div`
   ${tw`
        px-10px py-8px rounded-12px border border-solid border-gray31
    `}
`

export const StayTypeText = styled.span`
   ${({ superHost }): TwStyle => (superHost ? tw`ml-12px` : tw``)}
`

export const StayRatingsContainer = styled.div`
   ${tw`
        flex
    `}
`

export const StayRatingsText = styled.span`
   ${tw`
        ml-8px
    `}
`

export const StayTitleContainer = styled.div`
   ${tw`
        mt-8px
    `}
`

export const StayTitleText = styled.span``
