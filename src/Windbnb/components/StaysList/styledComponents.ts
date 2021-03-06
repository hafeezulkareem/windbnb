import tw, { styled } from 'twin.macro'

import { Typo16Gray20MontserratSemiBold } from '../../../Common/typos'

export const StaysListContainer = styled.div`
   ${tw`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 md:gap-6 lg:gap-8
    `}
`

export const NoStaysText = styled(Typo16Gray20MontserratSemiBold)`
   ${tw`
        self-center
    `}
`
