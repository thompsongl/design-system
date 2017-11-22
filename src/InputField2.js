import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import Label from './Label'
import Input from './Input'
import theme from './theme'

const InfoBox = styled(Box) `
  border-width: 1px;
  border-radius: 0 0 2px 2px;
  border-color: ${({ color }) => color};
  border-style: solid;
  box-shadow: 0 -1px 0 0 ${({ color }) => color};
`

class InputField2 extends React.Component {


  render() {
    const { id, children, ...props } = this.props
    let labelChild
    let labelPosition
    let iconChild
    let iconPosition
    let tooltipChild
    let tooltipPosition
    let inputChild
    let inputPosition

    if (children) {
      children.forEach((child, index) => {
        console.log(child.type, child)
        if(child.type === Label) {
          labelPosition = index
          labelChild = child
          console.log('It is a Label', child)
        }
        if(child.type === Input) {
          inputPosition = index
          inputChild = child
          console.log('It is an Input', child)
        }
        if(child.type === Icon) {
          iconPosition = index
          iconChild = child
          console.log('It\'s an Icon', child)
        }
      })
    }
    return (
      <Box>
        {children}
      </Box>
    )
  }
}

InputField2.propTypes = {
  /** Id passed to the native input element. Necessary to set up aria-describedby and for attributes for accessibility.  */
  id: PropTypes.string.isRequired,
  /** Optional border and icon color. */
  color: PropTypes.string
}

export default InputField2
