import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from './theme'

const Note = styled.div`
  width: 100%;
  min-height: 24px;
  display: flex;
  align-items: flex-start;
  font-size: ${props => props.theme.fontSizes[0]}px;
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.disabled ? null : props.theme.colors.borderGray};
  ${space};
`

Note.displayName = 'Note'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Note.propTypes = {
  px: numberStringOrArray,
  py: numberStringOrArray
}

Note.defaultProps = {
  p: 2,
  theme: theme
}

export default Note
