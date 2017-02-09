import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Menu } from 'components'

storiesOf('Menu', module)
  .add('default', () => (
    <Menu />
  ))
