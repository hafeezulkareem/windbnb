import React, { Component, ReactElement } from 'react'

import {
   AuthorInfoContainer,
   AuthorInfoText,
   FooterContainer,
   HorizontalLine
} from './styledComponents'

class AuthorInfoFooter extends Component {
   render(): ReactElement {
      return (
         <FooterContainer>
            <HorizontalLine />
            <AuthorInfoContainer>
               <AuthorInfoText>Hafeezul Kareem Shaik</AuthorInfoText>
            </AuthorInfoContainer>
         </FooterContainer>
      )
   }
}

export default AuthorInfoFooter
