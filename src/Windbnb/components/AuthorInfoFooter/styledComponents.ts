import tw, { styled } from 'twin.macro'
import { Typo14SilverChaliceMontserratSemiBold } from '../../../Common/typos'

export const FooterContainer = styled.div`
   ${tw`
        flex flex-col items-center mt-32px
    `}
`

export const HorizontalLine = styled.div`
   ${tw`
        w-402px h-px bg-silver
    `}
`

export const AuthorInfoContainer = styled.div`
   ${tw`
        mt-16px
    `}
`

export const AuthorInfoText = styled(Typo14SilverChaliceMontserratSemiBold)``
