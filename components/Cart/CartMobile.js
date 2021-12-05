import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button as ButtonMUI, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useCart } from '../../lib/cartState';
import CartContents from './CartContents';
import CartHeader from './CartHeader';

const CartMobileStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  & * {
    pointer-events: all;
  }
  z-index: 30;
`;

const CartPane = styled(motion.h1)`
  position: absolute;
  z-index: 50;
  /* border: 3px solid #808080a2; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2rem;
  margin: 2rem;
  background-color: #80808036;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .cartWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 4rem;
    background-color: #efeee9cf;

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
      max-width: 30rem;
      grid-area: body;
      overflow: scroll;
      box-shadow: inset 0px 0px 16px 4px rgba(0, 0, 0, 0.04);
      border-radius: 2rem;
      margin: 0 auto;
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

export default function CartMobile() {
  const { toggleCartMobile, cartMobileOpen } = useCart();

  const variants = {
    initial: {
      transform: `
        
        translateX(-250%)
      `,
    },
    animate: {
      /* eslint-disable */
      transform: `
      
      translateX(${cartMobileOpen ? '0%' : '-150%'}) 
      `,
      /* eslint-enable */
    },
    transitionIn: {
      type: 'spring',
      bounce: 0.2,
      bounceStiffness: 100,
    },
    transitionOut: {
      ease: 'backIn',
      duration: 0.8,
      bounceStiffness: 100,
    },
  };

  return (
    <>
      <CartMobileStyles>
        <CartPane
          variants={variants}
          initial={variants.initial}
          animate="animate"
          className="mobileCart"
          transition={
            cartMobileOpen ? variants.transitionIn : variants.transitionOut
          }
        >
          <div className="cartWrapper">
            <div className="header">
              <CartHeader />
            </div>
            <div className="body">
              <CartContents view="mobile" />
            </div>
            <div className="footer">
              <Link href="/checkout">
                <a style={{ width: '100%' }}>
                  <Button variant="contained" color="primary" size="large">
                    <Typography variant="subtitle1">Checkout</Typography>
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </CartPane>
      </CartMobileStyles>
    </>
  );
}

// cart open is a thing in mobile, but not in desktop
// desktop is automatic and
// idea to make cart bubble draggable
