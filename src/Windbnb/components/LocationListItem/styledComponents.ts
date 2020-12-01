import tw, { styled, TwStyle } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import { Typo14Gray31MulishNormal } from '../../../Common/typos'

export const LocationItem = styled(Button)`
   ${tw`
      flex items-center justify-start p-0 rounded-none mb-12px bg-transparent border-0 hover:bg-transparent
   `}
`

export const LocationIconContainer = styled.div``

export const LocationText = styled(Typo14Gray31MulishNormal)`
   ${tw`
      ml-8px
   `}
   ${({ isHovered }): TwStyle =>
      isHovered ? tw`text-burntSienna` : tw`text-gray31`}
`
