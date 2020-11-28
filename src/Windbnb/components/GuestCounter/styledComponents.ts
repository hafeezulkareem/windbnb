import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'

import {
   Typo14BlackMulishBold,
   Typo14Gray31MulishMedium
} from '../../../Common/typos'

export const CounterContainer = styled.div`
   ${tw`
      flex flex-col
   `}
`

export const CounterTitle = styled(Typo14BlackMulishBold)``

export const CounterDescription = styled(Typo14Gray31MulishMedium)`
   ${tw`
        mt-4px
    `}
`

export const CounterButtonsContainer = styled.div`
   ${tw`
      flex items-center mt-12px
   `}
`

export const CounterButton = styled(Button)`
   ${tw`
      p-8px bg-transparent rounded-4px hover:bg-concrete border border-solid border-gray3
   `}
`

export const CountText = styled(Typo14BlackMulishBold)`
   ${tw`
      mx-16px
   `}
`
