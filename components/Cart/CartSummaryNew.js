import styled from 'styled-components';
import { Button as ButtonMUI, Typography } from '@material-ui/core';
import CartHeader from './CartHeader';
import CartContents from './CartContents';
import CartSummaryFooter from './CartSummaryFooter';

const CartSummaryNewStyles = styled.div`
  width: 100%;
  .cartWrapper {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 3rem;

    &:before {
      content: '';
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(5px);
      border-top-left-radius: 2rem;
      border-top-right-radius: 0.5rem;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 0.5rem;
    }

    .header {
      position: relative;
      top: 0;
      height: 20rem;
      width: 100%;
      grid-area: header;
    }
    .body {
      height: 100%;
      width: 100%;
      /* max-width: 30rem; */
      grid-area: body;
      box-shadow: inset 0px 0px 16px 4px rgba(0, 0, 0, 0.04);
      border-radius: 2rem;
    }
    .footer {
      bottom: 0;
      height: 20rem;
      width: 100%;
      max-width: 50rem;
      grid-area: footer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

const Button = styled(ButtonMUI)`
  && {
    background-color: #000000c5;
    margin-top: 1rem;
    width: 100%;
    height: 5rem;
    font-size: 2rem;
    border-radius: 2rem;

    &:hover {
      background-color: #01050373;
    }
  }
`;

export default function CartSummaryNew({ mode }) {
  return (
    <CartSummaryNewStyles>
      <div className="cartWrapper">
        {/* <div className="header">
          <CartHeader />
        </div> */}
        <div className="body">
          <CartContents view="mobile" mode={mode} />
        </div>
        {/* <div className="footer">
          <Button
            onClick={() => console.log('clicked')}
            variant="contained"
            color="primary"
            size="large"
          >
            <Typography variant="subtitle1">Checkout</Typography>
          </Button>
        </div> */}
      </div>
      <CartSummaryFooter />
    </CartSummaryNewStyles>
  );
}
