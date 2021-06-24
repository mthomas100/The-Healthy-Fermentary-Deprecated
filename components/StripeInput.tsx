import * as React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';

const StripeInput = React.forwardRef<any, InputBaseComponentProps>(
  function StripeInput(props, ref) {
    const { component: Component, options, ...other } = props;
    const theme = useTheme();
    const [mountNode, setMountNode] = React.useState<any | null>(null);

    React.useImperativeHandle(
      ref,
      () => ({
        focus: () => mountNode.focus(),
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
              fontSize: '16px',
              lineHeight: '1.4375em', // 23px
              fontFamily: theme.typography.fontFamily,
            },
            invalid: {
              color: theme.palette.text.primary,
            },
          },
        }}
        {...other}
      />
    );
  }
);

export default StripeInput;
