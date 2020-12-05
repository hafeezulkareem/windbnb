import tw, { styled } from 'twin.macro'

import { Typo14SilverChaliceMontserratSemiBold } from '../../../Common/typos'

export const FooterContainer = styled.div`
   ${tw`
        flex flex-col items-center mt-32px
    `}
`

export const HorizontalLine = styled.div`
   ${tw`
        w-9/12 md:w-6/12 lg:w-3/12 h-px bg-silver
    `}
`

export const AuthorInfoContainer = styled.div`
   ${tw`
        mt-16px
    `}
`

export const Link = styled.a`
   ${tw`
      text-darkGray no-underline
   `}
`

export const ExtraLink = styled(Link)`
   ${tw`
      ml-8px
   `}
`

export const AuthorInfoText = styled(Typo14SilverChaliceMontserratSemiBold)`
   ${Link}:hover & {
      ${tw`
         text-burntSienna
      `}
   }
`
