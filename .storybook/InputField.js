import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Text,
  InputField,
  Label,
  Input,
  Icon,
  Tooltip
} from '../src'

storiesOf('InputField', module)
  .add(
    'InputField component',
    withInfo({
      inline: true,
      text:
        'This component renders an input element with a built-in label and optional icon. It makes use of the Input and Label components.'
    })(() => (
      <Box width={500} pr={3}>
        <Text bold pt={4} pb={2}>
          Hey, ya turkey! Enter a word that has 5 characters in it.
        </Text>
        <InputController>
          <InputField
            icon="amenityPool"
            label="A 5 Letter Word"
            id="form-field-3"
            placeholder="e.g. Berry"
          />
        </InputController>
      </Box>
    ))
  )
  .add(
    'Sample States',
    withInfo('Renders a styled Input element')(() => (
      <div>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Icon After
            </Text>
            <InputField>
              <Label>Label</Label>
              <Input
                id="form-field-3"
                pt={20}
                pb={8}
                mt={-20}
                width={1}
                placeholder="example@test.com"
                pr={40}
              />
              <Icon name="plane" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Icon Before
            </Text>
            <InputField>
              <Label>Label</Label>
              <Icon name="plane" />
              <Input
                id="form-field-3"
                defaultValue="oliver.dumoulin@priceline.com"
                placeholder="example@test.com"
              />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Icon Before and After
            </Text>
            <InputField color="green">
              <Label>Label</Label>
              <Icon name="email" />
              <Input
                id="form-field-3"
                defaultValue="oliver.dumoulin@priceline.com"
              />
              <Icon name="success" color="green" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With no placeholder and no input
            </Text>
            <InputField color="green">
              <Label pl={13}>Some Label</Label>
              <Input id="form-field-3" />
              <Icon name="success" color="green" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Error
            </Text>
            <InputField color="red">
              <Label>Email Address</Label>
              <Icon name="email" color="red" />
              <Input id="form-field-3" defaultValue="oliver.dumoulin@priceli" />
              <Icon name="warning" color="red" />
            </InputField>
            <Tooltip isVisible bottom right bg="red" color="white">
              Email Address is not valid
            </Tooltip>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With no placeholder and no input
            </Text>
            <InputField color="green">
              <Label pl={13}>Some Label</Label>
              <Input id="form-field-3" />
              <Icon name="success" color="green" />
            </InputField>
          </Box>
        </Flex>

        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              No Label
            </Text>
            <InputField>
              <Icon name="user" color="blue" />
              <Input
                id="form-field-3"
                defaultValue="oliver.dumoulin@priceline.com"
                placeholder="some input placeholder"
              />
              <Icon name="plane" />
            </InputField>
          </Box>
          {/* <Box width={1 / 2} pl={3}>
          <Text bold pt={4} pb={2}>
            With no placeholder and no input
            </Text>
          <InputField
            icon="checkLight"
            label="Email Address"
          >
            <Label pl={13}>
              Some Label
            </Label>
            <Input
              id="form-field-3"
              pt={20}
              pb={8}
              color="darkGreen"
              mt={-20}
              width={1}
              pr={40}
            />
            <Icon name='plane' />
          </InputField>
        </Box> */}
        </Flex>

        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Credit Card
            </Text>
            <InputField
              icon="locked"
              label="Card number"
              id="form-field-3"
              placeholder="0000 0000 0000 0000"
            />
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Credit Card Number
            </Text>
            <InputField
              icon="locked"
              id="form-field-4"
              label="Card number"
              placeholder="0000 0000 0000 0000"
              defaultValue="4193 8827 0316 3529"
            />
          </Box>
        </Flex>
        {/*
      <Flex width={900}>
        <Box width={1 / 2} pl={3}>
          <Text bold pt={4} pb={2}>
            Two Icons Before
            </Text>
          <InputField
            icon="checkLight"
            color="darkGreen"
            label="Email Address"
            defaultValue="oliver.dumoulin@priceline.com"
            id="form-field-3"
            placeholder="example@test.com"
          >
            <Label pl={13}>
              Label
            </Label>
            <Icon name='plane' />
            <Icon name='shuttle' />
            <Input
              id="form-field-3"
              pt={20}
              pb={8}
              mt={-20}
              width={1}
              pr={40}
            />
          </InputField>
        </Box>
      </Flex> */}
      </div>
    ))
  )

class InputController extends React.PureComponent {
  state = {
    value: '',
    isValid: false,
    isDirty: false
  }

  onChange = event => {
    const value = event.target.value
    const isValid = value.length === 5
    this.setState({
      isDirty: true,
      value: value,
      isValid: isValid
    })
  }

  getBorderColor = () => {
    const { isValid, isDirty } = this.state
    if (isValid && isDirty) {
      return 'darkGreen'
    } else if (!isValid && isDirty) {
      return 'red'
    }
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      onChange: this.onChange,
      color: this.getBorderColor(),
      info:
        !this.state.isValid && this.state.isDirty
          ? "That's not 5 letters!"
          : null,
      ...this.state
    })
  }
}
