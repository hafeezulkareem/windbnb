import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import { Typo14ConcreteMulishBold } from '../../../Common/typos'

export const SearchButtonContainer = styled.div``

export const SearchButtonWithIcon = styled(Button)`
   ${tw`
        flex items-center py-16px px-26px rounded-16px bg-burntSienna hover:bg-mandy
    `}
`

export const SearchButtonText = styled(Typo14ConcreteMulishBold)`
   ${tw`
        ml-8px
    `}
`
