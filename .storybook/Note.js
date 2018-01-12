import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Note, Icon } from '../src'

storiesOf('Note', module)
  .add(
    'Note component',
    withInfo({
      inline: true,
      text: 'Use the <Note /> component to render a primitive Note.'
    })(() => <Note>Etiam porta sem malesuada magna mollis euismod.</Note>)
  )
  .add('All colors', () => (
    <div>
      <Note mb={2}>
        <Icon name="information" size={16} mr={2} /> The driver picking up the
        car must be 25 or over and have a valid Credit or Debit card for the
        refundable security deposit at the time of pickup.
      </Note>
      <Note mb={2}>
        <Icon name="information" size={16} mr={2} /> The guest checking into
        each hotel room must be 21 or older, present a valid photo ID and credit
        card.
      </Note>
    </div>
  ))
