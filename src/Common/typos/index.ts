import tw, { styled } from 'twin.macro'

/* Montserrat Font Styled Components */
const BaseMontserratText = styled.span`
   ${tw`font-montserrat`}
`

const BaseMontserratMediumText = styled(BaseMontserratText)`
   ${tw`font-medium`}
`

const BaseMontserratSemiBoldText = styled(BaseMontserratText)`
   ${tw`font-semibold`}
`

const BaseMontserratBoldText = styled(BaseMontserratText)`
   ${tw`font-bold`}
`

export const Typo14Gray3MontserratMedium = styled(BaseMontserratMediumText)`
   ${tw`text-14px text-gray3`}
`

export const Typo14Gray31MontserratMedium = styled(BaseMontserratMediumText)`
   ${tw`text-14px text-gray31`}
`

export const Typo12Gray31MontserratBold = styled(BaseMontserratBoldText)`
   ${tw`text-12px text-gray31`}
`

export const Typo16Gray20MontserratSemiBold = styled(
   BaseMontserratSemiBoldText
)`
   ${tw`text-16px text-gray20`}
`
