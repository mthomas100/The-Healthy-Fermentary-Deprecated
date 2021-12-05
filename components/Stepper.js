import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdPayment } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { TiShoppingCart } from 'react-icons/ti';
import styled from 'styled-components';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import nProgress from 'nprogress';
import { useRouter } from 'next/router';
import FormSection from './FormSection';
import Address from './Address';
import PaymentDetails from './PaymentDetails';
import CartSummary from './Cart/CartSummary';
import CartSummaryNew from './Cart/CartSummaryNew';
import { useCheckout } from '../lib/checkoutState';
import { useCart } from '../lib/cartState';
import CheckoutHeader from './CheckoutHeader';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#0000b8',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 136deg, #85cece 0%, #338b87 50%, #abccda97 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 136deg, #85cece 0%, #338b87 50%, #abccda97 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #85cece 0%, #338b87 50%, #abccda97 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #85cece 0%, #338b87 50%, #abccda97 100%)',
  },
});

const CartIcon = styled(TiShoppingCart)`
  height: 20px;
  width: auto;
`;
const ShippingIcon = styled(GoPackage)`
  height: 20px;
  width: auto;
`;
const PaymentIcon = styled(MdPayment)`
  height: 20px;
  width: auto;
`;

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CartIcon />,
    2: <ShippingIcon />,
    3: <PaymentIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Cart Overview', 'Shipping Details', 'Review & Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <CheckoutHeader>Cart Overview</CheckoutHeader>
          <CartSummaryNew />
        </>
      );
    case 1:
      return (
        <FormSection>
          <CheckoutHeader>Shipping Details</CheckoutHeader>
          <Address variant="outlined" />
        </FormSection>
      );
    case 2:
      return (
        <>
          <CheckoutHeader>Review & Payment</CheckoutHeader>
          <CartSummaryNew mode="static" />
          <FormSection>
            <PaymentDetails variant="outlined" />
          </FormSection>
        </>
      );
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const router = useRouter();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  const { cartContents, closeCartMobile, setCartIsHovering } = useCart();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackStepZero = () => {
    setCartIsHovering(false);
    closeCartMobile();
    router.push('/');
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const { inputs } = useCheckout();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [submitIsDisabled, setSubmitIsDisabled] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function submitOrder(e) {
    setSubmitIsDisabled(true);
    // 1. Stop the form from submitting and turn the loader one
    setLoading(true);
    e.preventDefault();

    // 2. Start the page transition so show the user something is happening
    nProgress.start();

    // 3. Create the payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${inputs.firstName} ${inputs.lastName}`,
        address: {
          line1: inputs.address1,
          line2: inputs.address2,
          postal_code: inputs.zipCode,
          state: inputs.region,
          country: inputs.country,
        },
      },
    });

    // 4. Handle any (client-side related) errors from stripe
    if (error) {
      nProgress.done();
      console.log(error);
      return setError(error);
    }

    // 5. Send payment ID and Order Information to Server

    // TODO: REFACTOR BY DESTRUCTURING ABOVE FROM THE HOOK/CONTEXT
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: 'POST',
      //   headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        ...inputs,
        total: '100', // USE CALCTOTAL FUNCTION HERE (OR) GRAB RUNNING TOTAL FROM USECART [CAN IT BE APPENDED TO OBJECT UPON ===> CHECKOUT]
        cartContents, // [] if not filled out. don't stripe charge if this condition exists
        email: 'email@gmail.com',
        token: paymentMethod.id,
      }),
    });

    const order = await response.json();

    // DEPENDING ON THIS RESPONSE TELL USER THEIR ORDER WAS SUCCESSFUL OR NOT
    console.log(response);
    console.log(order);

    if (!response.ok) {
      console.log('response not OK');
      setError(response.statusText);
    }

    if (response.ok) {
      console.log('response is OK');
      nProgress.done();
      handleNext();
    }

    // 6. Change the page to the new order
    // TODO: <--- RESPONSE FROM SERVER INDICATES WHAT THIS ROUTE WILL BE
    // TODO: <--- SET UP FOLDER BASED ROUTING TO REFLECT THIS
    // BELOW : WB example of routing

    // ORDER CONFIRMATION PULLS DATA FROM THE ORDER OBJECT FOR THIS ORDER

    // Router.push({
    //   pathname: '/order',
    //   query: { id: order.data.checkout.id },
    // });

    // 7. Turn loader off
    setLoading(false);
    // TODO: configure a set loading thing for portions of the multistep form to disallow editing
    setSubmitIsDisabled(false);
  }

  useEffect(() => {
    setActiveStep(0);
  }, []);

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        style={{
          paddingLeft: '0',
          paddingRight: '0',
          backgroundColor: 'transparent',
          margin: '0px',
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions} component="div">
              Successful Order
              <b>To Do: </b> route to completed order page
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions} component="div">
              <div style={{ paddingTop: '4rem' }}>
                {getStepContent(activeStep)}
              </div>
            </Typography>

            <div
              className="buttons"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'stretch',
                padding: '0 3rem',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: 'black' }}
                onClick={
                  activeStep === steps.length - 1 ? submitOrder : handleNext
                }
                className={classes.button}
                size="large"
                fullWidth
                disabled={submitIsDisabled}
              >
                {activeStep === steps.length - 1 ? 'Submit Order' : 'Next'}
              </Button>
              <Button
                onClick={activeStep === 0 ? handleBackStepZero : handleBack}
                className={classes.button}
                fullWidth
                size="large"
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
