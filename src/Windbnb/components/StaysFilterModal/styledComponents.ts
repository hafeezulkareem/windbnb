import tw, { styled } from 'twin.macro'

export const FiltersContainer = styled.div`
   ${tw`
        h-55px flex rounded-16px shadow-filterButtons
    `}
`

export const FilterSection = styled.div`
   ${tw`
        w-1/3 flex justify-end
    `}
`

export const ActiveFilterSectionContainer = styled.div`
   ${tw`
        flex mt-32px
    `}
`

export const ActiveFilterSection = styled(FilterSection)`
   ${tw`
        flex-col justify-start
    `}
`
