import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InstructionsPage } from 'components'

storiesOf('InstructionsPage', module)
  .add('default', () => (
    <InstructionsPage />
  ))
