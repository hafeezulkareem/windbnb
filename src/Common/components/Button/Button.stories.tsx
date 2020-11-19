import React, { ReactElement } from 'react'

import { Button } from '.'

export default {
   title: 'Button',
   argTypes: {
      size: {
         control: { type: 'select', options: ['SMALL', 'MEDIUM', 'LARGE'] }
      },
      variant: {
         control: { type: 'select', options: ['DEFAULT', 'OUTLINE', 'TEXT'] }
      },
      color: {
         control: {
            type: 'select',
            options: [
               'DEFAULT',
               'PRIMARY',
               'SECONDARY',
               'SUCCESS',
               'WARNING',
               'DANGER'
            ]
         }
      },
      shape: {
         control: { type: 'select', options: ['ROUND', 'SQUARE', 'PILL'] }
      }
   }
}

export const AllInOneButton = (args): ReactElement => (
   <Button {...args}>All In One</Button>
)
