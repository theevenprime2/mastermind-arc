import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreditsPage } from 'components'

storiesOf('CreditsPage', module)
  .add('default', () => (
    <CreditsPage />
  ))
