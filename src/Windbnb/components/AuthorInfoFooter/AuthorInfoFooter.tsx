import React, { ReactElement } from 'react'

import {
   AuthorInfoContainer,
   AuthorInfoText,
   FooterContainer,
   HorizontalLine
} from './styledComponents'

function AuthorInfoFooter(): ReactElement {
   return (
      <FooterContainer>
         <HorizontalLine />
         <AuthorInfoContainer>
            <AuthorInfoText>Hafeezul Kareem Shaik</AuthorInfoText>
         </AuthorInfoContainer>
      </FooterContainer>
   )
}

export default AuthorInfoFooter
