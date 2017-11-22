import React from 'react'
import renderer from 'react-test-renderer'
import { Dropdown } from '..'

describe('Dropdown', () => {
  test('Dropdown renders', () => {
    const json = renderer.create(<Dropdown>Dropdown</Dropdown>).toJSON()
    expect(json).toMatchSnapshot()
  })
})