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

class InputField extends React.Component {
  render() {
    const { color, label, icon, children, ...props } = this.props

    let InputChild
    let inputPosition
    let LabelChild
    let BeforeIcon
    let AfterIcon
    let inputId

    if (children) {
      children.forEach((child, index) => {
        if (child.type === Label) {
          LabelChild = child
        }
        if (child.type === Input) {
          inputPosition = index
          InputChild = child
          inputId = child.props.id
        }
        if (child.type === Icon) {
          if (!inputPosition) {
            BeforeIcon = child
          } else {
            AfterIcon = child
          }
        }
      })
    }

    // Handle old version on component's api
    if (icon) {
      AfterIcon = <Icon name={icon} />
    }
    if (label) {
      LabelChild = <Label>{label}</Label>
    }
    if (!InputChild) {
      InputChild = <Input />
    }

    return (
      <Box>
        {LabelChild &&
          React.cloneElement(LabelChild, {
            pl: BeforeIcon ? 40 : 2,
            htmlFor: inputId
          })}
        <Flex align="center" width={1} mt={0}>
          {BeforeIcon && (
            <Box mr={-4} ml={2} mt={LabelChild ? -12 : 1}>
              {BeforeIcon}
            </Box>
          )}
          {React.cloneElement(InputChild, {
            pt: LabelChild ? 20 : 14,
            pb: LabelChild ? 8 : 14,
            mt: LabelChild && -20,
            pr: AfterIcon && 40,
            pl: BeforeIcon ? 40 : 2,
            width: 1,
            color: color,
            ...props
          })}
          {AfterIcon && (
            <Box ml={-4} mt={LabelChild ? -12 : 1}>
              {AfterIcon}
            </Box>
          )}
        </Flex>
      </Box>
    )
  }
}

InputField.propTypes = {
  children: function(props, propName, componentName) {
    const prop = props[propName]
    let inputCount = 0
    let inputPosition = 0
    let labelCount = 0
    let firstIconPosition = -1
    let secondIconPosition = 999
    let iconCount = 0
    React.Children.forEach(prop, function(child, index) {
      switch (child.type) {
        case Input:
          inputPosition = index
          inputCount++
          break
        case Icon:
          if (iconCount === 0) {
            firstIconPosition = index
          } else {
            secondIconPosition = index
          }
          iconCount++
          break
        case Label:
          labelCount++
          break
        default:
          return new Error(
            `'${child.type}' is not a valid child for '${componentName}'`
          )
      }
    })

    if (!inputCount) {
      return new Error(
        `No 'Input' child found for '${componentName}'. Please update your component to use the compound version of this component and pass an 'Input' component as the child`
      )
    }
    if (labelCount > 1) {
      return new Error(
        `Exactly 0 or 1 'Label' children should be supplied to '${componentName}'`
      )
    }
    if (iconCount > 2) {
      return new Error(
        `Up to 2 'Icon' children are supported by '${componentName}'`
      )
    }
    if (
      iconCount === 2 &&
      (firstIconPosition > inputPosition || secondIconPosition < inputPosition)
    ) {
      return new Error(
        `If 2 'Icons' are provided, the 'Input' component must be positioned between them as children of '${componentName}'`
      )
    }
  },
  /** Optional border and icon color. */
  color: PropTypes.string
}

export default InputField
