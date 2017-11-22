import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip } from '../src'

storiesOf('Tooltip', module).add('default', () => (
  <Tooltip isVisible>This is a tooltip!</Tooltip>
))
