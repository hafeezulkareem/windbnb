import React, { Component, ReactElement } from 'react'
import ReactModal from 'react-modal'

import './reactModalStyles.css'

interface StaysFilterModalProps {
   onClickSearchButton: () => void
   isOpen: boolean
   onRequestClose: () => void
}

class StaysFilterModal extends Component<StaysFilterModalProps> {
   render(): ReactElement {
      const { onClickSearchButton, ...other } = this.props
      return (
         <ReactModal
            className='modal'
            overlayClassName='overlay'
            shouldCloseOnOverlayClick={true}
            {...other}
         >
            <p>Stays Filter Modal</p>
         </ReactModal>
      )
   }
}

export default StaysFilterModal
