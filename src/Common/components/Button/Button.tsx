import React, { Component, ReactElement, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'

import { getButtonColors } from './utils'
import { colors, shapes, sizes, variants } from './constants'
import { StyledButton } from './styledComponents'

interface ButtonProps {
   onClick: Function
   disabled: boolean
   loading: boolean
   size: string
   variant: string
   color: string
   shape: string
   disableShadow: boolean
   className: string
}

class Button extends Component<ButtonProps> {
   static defaultProps = {
      onClick: (): void => {},
      disabled: false,
      loading: false,
      size: sizes.medium,
      variant: variants.default,
      color: colors.default,
      shape: shapes.square,
      disableShadow: false,
      className: ''
   }

   static sizes = sizes
   static colors = colors
   static shapes = shapes
   static variants = variants

   renderButtonChild = (): ReactNode => {
      const { loading, children, color } = this.props
      const { filledTextColor } = getButtonColors(color)
      if (loading) {
         return (
            <ClipLoader size={18} color={filledTextColor} loading={loading} />
         )
      }
      return <>{children}</>
   }

   render(): ReactElement {
      const {
         size,
         variant,
         color,
         shape,
         disableShadow,
         disabled,
         className,
         onClick,
         ...other
      } = this.props
      return (
         <StyledButton
            className={className}
            size={size}
            variant={variant}
            color={color}
            shape={shape}
            disableShadow={disableShadow}
            disabled={disabled}
            onClick={onClick}
            {...other}
         >
            {this.renderButtonChild()}
         </StyledButton>
      )
   }
}

export default Button
