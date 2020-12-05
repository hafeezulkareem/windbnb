import tw, { styled, TwStyle } from 'twin.macro'

export const FiltersContainer = styled.div`
   ${tw`
        md:h-55px flex flex-col md:flex-row rounded-16px shadow-filterButtons
    `}
`

export const FilterSection = styled.div`
   ${tw`
        w-full md:w-1/3 justify-end
    `}
`

export const DesktopFilterSection = styled(FilterSection)`
   ${tw`
        hidden md:flex
    `}
`

export const MobileFilterSection = styled(FilterSection)`
   ${tw`
        flex md:hidden mt-auto pb-24px justify-center
    `}
`

export const ActiveFilterSectionContainer = styled.div`
   ${tw`
        flex flex-col md:flex-row mt-32px mb-24px md:mb-0
    `}
`

export const ActiveFilterSection = styled(FilterSection)`
   ${tw`
        flex flex-col justify-start
    `}
   ${({ isLocationSectionActive }): TwStyle =>
      isLocationSectionActive ? tw`h-full` : tw`h-auto`}
`

export const LastGuestCounterContainer = styled.div`
   ${tw`
        mt-32px
    `}
`
