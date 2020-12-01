import tw, { styled } from 'twin.macro'

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
        flex md:hidden
    `}
`

export const ActiveFilterSectionContainer = styled.div`
   ${tw`
        flex flex-col md:flex-row mt-32px
    `}
`

export const ActiveFilterSection = styled(FilterSection)`
   ${tw`
        h-full flex flex-col justify-start
    `}
`

export const LastGuestCounterContainer = styled.div`
   ${tw`
        mt-32px
    `}
`
