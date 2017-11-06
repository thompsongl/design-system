import React from 'react'
import renderer from 'react-test-renderer'
import { Icon, theme, legacyTheme } from '..'
import icons from '../../icons.json'

const keys = Object.keys(icons).filter(name => name !== 'legacy')
const oldIcons = ['srollLeft', 'chevronLight', 'chevronThick']

describe('Icon', () => {
  keys.forEach(name => {
    test(`${name} renders`, () => {
      const icon = renderer.create(<Icon theme={theme} name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  oldIcons.forEach(name => {
    test(`${name} still renders old renamed icons`, () => {
      const icon = renderer
        .create(<Icon theme={legacyTheme} name={name} />)
        .toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  test('The legacy theme forces using the old icon set', () => {
    const icon = renderer
      .create(<Icon theme={legacyTheme} name="chevronDown" next />)
      .toJSON()
    const [path] = icon.children
    expect(path.props.d).toEqual(icons.legacy.chevronDown.path)
    expect(icon).toMatchSnapshot()
  })

  test('returns false for non-existing icons', () => {
    // Mock out console.error since we're expecting a propType warning
    console.error = jest.genMockFunction()
    const icon = renderer.create(<Icon theme={theme} name="nope" />).toJSON()

    // We expect one propType warning.
    expect(console.error.mock.calls.length).toBe(1)
    expect(icon).toBe(null)
    jest.mock
  })
})
