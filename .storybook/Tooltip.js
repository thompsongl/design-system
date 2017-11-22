import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, InputField } from '../src'

storiesOf('Tooltip', module)
  .add('default', () => (
    <div>

<br />
      <br />
      <br />
      <Tooltip isVisible top left bg='blue' color='white'>
        top left tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>
      <br />
      <br />
      <br />
      <Tooltip isVisible top left bg='blue' color='white'>
        top left tooltip
      </Tooltip>
      <div>some text</div>


      <br />
      <br />
      <br />
      <div>some text</div>
      <Tooltip isVisible bottom left bg='blue' color='white'>
        bottom left tooltip
      </Tooltip>


      <br />
      <br />
      <br />
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>
      <Tooltip isVisible bottom left bg='blue' color='white'>
        bottom left tooltip
      </Tooltip>


      <br />
      <br />
      <br />
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>
      <Tooltip isVisible bottom center bg='blue' color='white'>
        bottom center tooltip
      </Tooltip>
      <br />
      <br />
      <br />
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>
      <Tooltip isVisible bottom right bg='blue' color='white'>
        bottom right tooltip
      </Tooltip>





      <br />
      <br />
      <br />
      <Tooltip isVisible top left bg='blue' color='white'>
        top left tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>


      <br />
      <br />
      <br />
      <Tooltip isVisible top center bg='blue' color='white'>
        top center tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>
      <br />
      <br />
      <br />
      <Tooltip isVisible top right bg='blue' color='white'>
        top right tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      >
      </InputField>

      <br />
      {/* <br />
      <Tooltip isVisible top center bg='black' color='white' content='centered tooltip'>
        <InputField
          icon="circleInfo"
          color="red"
          info="Please enter a valid email address"
          label="Email Address"
          defaultValue="oliver.dumoulin@priceline.c"
          id="form-field-3"
          placeholder="example@test.com"
        /></Tooltip>
      <br />
      <br />
      <Tooltip isVisible top right bg='red' color='white' content='right tooltip'>
        <InputField
          icon="circleInfo"
          color="red"
          info="Please enter a valid email address"
          label="Email Address"
          defaultValue="oliver.dumoulin@priceline.c"
          id="form-field-3"
          placeholder="example@test.com"
        /></Tooltip>
      <br />
      <br />
      <Tooltip isVisible bg='red' color='white' content='left tooltip'>
        <InputField
          icon="circleInfo"
          color="red"
          info="Please enter a valid email address"
          label="Email Address"
          defaultValue="oliver.dumoulin@priceline.c"
          id="form-field-3"
          placeholder="example@test.com"
        /></Tooltip> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tooltip isVisible bottom left>left tooltip</Tooltip>
      <Tooltip isVisible bottom center>centered tooltip</Tooltip>
      <Tooltip isVisible bottom right>right tooltip</Tooltip>

    </div>
  ))
