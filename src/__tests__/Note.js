import React from 'react'
import renderer from 'react-test-renderer'
import { Note, theme } from '..'

describe('Note', () => {
  test('renders', () => {
    const json = renderer.create(<Note />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
