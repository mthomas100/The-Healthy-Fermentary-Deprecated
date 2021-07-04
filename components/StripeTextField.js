/* eslint-disable */ 

import React, { useImperativeHandle } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { fade, useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

function StripeInput(props) {
  const {
    component: Component,
    inputRef,
    /* eslint-disable no-unused-vars */
    "aria-invalid": ariaInvalid,
    "aria-describedby": ariaDescribeBy,
    defaultValue,
    required,
    onKeyDown,
    onKeyUp,
    readOnly,
    autoComplete,
    autoFocus,
    type,
    name,
    rows,
    options,
    /* eslint-enable no-unused-vars */
    ...other
  } = props;
  const theme = useTheme();
  const [mountNode, setMountNode] = React.useState(null);

  useImperativeHandle(
    inputRef,
    () => ({
      focus: () => mountNode.focus()
    }),
    [mountNode]
  );

  return (
    <Component
      onReady={setMountNode}
      options={{
        ...options,
        style: {
          base: {
            color: theme.palette.text.primary,
            fontSize: `${theme.typography.fontSize}px`,
            fontFamily: theme.typography.fontFamily,
            "::placeholder": {
              color: fade(theme.palette.text.primary, 0.42)
            },
          },
          invalid: {
            color: theme.palette.text.primary
          }
        }
      }}
      {...other}
    />
  );
}

StripeInput.propTypes = {
  component: PropTypes.node.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.any }),
  "aria-invalid": PropTypes.bool,
  "aria-describedby": PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  options: PropTypes.object
};

const TextFieldStyles = styled.div`

}
`;
export default function StripeTextField(props) {
  const {
    InputLabelProps,
    stripeElement,
    InputProps = {},
    inputProps,
    ...other
  } = props;

  return (
    <TextFieldStyles>
    <TextField
      fullWidth
      variant={props.variant}
      label='none'
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        color: "black"
      }}
      InputProps={{
        ...InputProps,
        inputProps: {
          ...inputProps,
          ...InputProps.inputProps,
          component: stripeElement
        },
        inputComponent: StripeInput
      }}
      size="medium"
      {...other}
    />
    </TextFieldStyles>
  );
}

StripeTextField.propTypes = {
  ...TextField.propTypes,
  stripeElement: PropTypes.node.isRequired
};
