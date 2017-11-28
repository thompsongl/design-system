import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, InputField, Box } from '../src'

storiesOf('Tooltip', module)
  .add('Without Anchors', () => (
    <Box mt={5} width={500}>
      <Tooltip bg="blue" color="white" isVisible top left>
        left tooltip
      </Tooltip>
      <Tooltip bg="black" color="white" isVisible top center>
        centered tooltip
      </Tooltip>
      <Tooltip bg="red" color="white" isVisible top right>
        right tooltip
      </Tooltip>
      <br />
      <Tooltip isVisible bottom left>
        left tooltip
      </Tooltip>
      <Tooltip isVisible bottom center>
        centered tooltip
      </Tooltip>
      <Tooltip isVisible bottom right>
        right tooltip
      </Tooltip>
    </Box>
  ))
  .add('With Anchors', () => (
    <Box width={300}>
      <br />
      <br />
      <br />
      <Tooltip isVisible top left bg="blue" color="white">
        top left tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      />
      <br />
      <br />
      <br />
      <Tooltip isVisible top left bg="blue" color="white">
        top left tooltip
      </Tooltip>
      <div>some text</div>

      <br />
      <br />
      <br />
      <div>some text</div>
      <Tooltip isVisible bottom left bg="blue" color="white">
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
      />
      <Tooltip isVisible bottom left bg="blue" color="white">
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
      />
      <Tooltip isVisible bottom center bg="blue" color="white">
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
      />
      <Tooltip
        isVisible
        bottom
        right
        bg="red"
        color="white"
        aria-describes="form-field-3"
      >
        Email Address Invalid
      </Tooltip>

      <br />
      <br />
      <br />
      <Tooltip isVisible top left bg="blue" color="white">
        top left tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      />

      <br />
      <br />
      <br />
      <Tooltip isVisible top center bg="blue" color="white">
        top center tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      />
      <br />
      <br />
      <br />
      <Tooltip isVisible top right bg="blue" color="white">
        top right tooltip
      </Tooltip>
      <InputField
        icon="circleInfo"
        color="red"
        label="Email Address"
        defaultValue="oliver.dumoulin@priceline.c"
        id="form-field-3"
        placeholder="example@test.com"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tooltip isVisible bottom left>
        left tooltip
      </Tooltip>
      <Tooltip isVisible bottom center>
        centered tooltip
      </Tooltip>
      <Tooltip isVisible bottom right>
        right tooltip
      </Tooltip>
    </Box>
  ))
