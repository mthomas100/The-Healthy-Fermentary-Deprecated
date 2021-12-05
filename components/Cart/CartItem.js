import { Typography } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';
import getSmallCloudinary from '../../util/getSmallCloudinary';
import QuantityIncrementor from './QuantityIncrementor';
import QuantitySelector from './QuantitySelector';
import QuantityStatic from './QuantityStatic';

const CartItemStyles = styled(motion.div)`
  margin: 0 auto;
  overflow: 'hidden';
`;

const CartItemStylesSM = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 'auto';
  grid-template-rows: auto;
  grid-template-areas:
    'picture'
    'quantity';
  padding: ${(props) => (props.cartEmpty ? '2rem 1rem' : '2rem 2rem')};
  max-height: 14rem; //TODO: calculate with use layout to make consistent rather than hardcoding + guess checking

  .MuiSelect-icon {
    top: unset !important;
  }

  .picture {
    grid-area: picture;
  }
  .quantity {
    grid-area: quantity;
  }
`;

const CartItemStylesLG = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 'auto auto';
  grid-template-rows: auto;
  grid-template-areas:
    'picture title'
    'quantity price';
  padding: ${(props) => (props.cartEmpty ? '2rem 1rem' : '2rem 2rem')};
  max-height: 17.2rem;

  .MuiSelect-icon {
    top: unset !important;
  }

  .picture {
    grid-area: picture;
  }
  .quantity {
    grid-area: quantity;
  }

  .title {
    grid-area: title;
    align-self: center;
    justify-self: center;
    font-family: 'Nunito';
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  .price {
    grid-area: price;
    align-self: center;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0.5rem;
    font-size: 1.3rem;
    font-family: 'Nunito';
    width: auto;

    .value {
      margin-left: 2rem;
      font-weight: 400;
      white-space: nowrap;
    }
  }

  .rhs {
    margin-left: 2rem;
  }
`;

const CartEmptyStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    font-family: Nunito;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
`;

function CartEmpty() {
  return (
    <CartEmptyStyles>
      <p>Cart is empty</p>
    </CartEmptyStyles>
  );
}

const variantsOpacity = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const variantsWidth = {
  open: {
    width: '184px',
  },
  closed: {
    width: '102px',
  },
};

export default function CartItem({
  product,
  index,
  cartIsHovering,
  cartEmpty = false,
  mode,
}) {
  const cartItemRef = useRef(null);

  return (
    <CartItemStyles
      animate={{ width: `${cartIsHovering ? '18.4rem' : '10.2rem'}` }}
      ref={cartItemRef}
    >
      <AnimatePresence>
        {cartIsHovering ? (
          <motion.div>
            <CartItemStylesLG
              index={index}
              cartIsHovering={cartIsHovering}
              variants={variantsOpacity}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 1 }}
              cartEmpty={cartEmpty}
            >
              {!cartEmpty ? (
                <>
                  <div className="pictureWrapper picture">
                    <Image
                      src={product.image.url}
                      alt="Picture of Item"
                      height="100%"
                      width="100%"
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={getSmallCloudinary(product.image.url)}
                    />
                  </div>

                  <div className="quantity">
                    {mode === 'static' ? (
                      <QuantityStatic product={product} />
                    ) : (
                      <QuantityIncrementor product={product} />
                    )}
                  </div>

                  <div className="title rhs">{product.title}</div>
                  <div className="price rhs">
                    <div>&#xd7;</div>
                    <div className="value">
                      <b>$</b> {product.price}
                    </div>
                  </div>
                </>
              ) : (
                <CartEmpty />
              )}
            </CartItemStylesLG>
          </motion.div>
        ) : (
          <motion.div>
            <CartItemStylesSM
              index={index}
              cartIsHovering={cartIsHovering}
              variants={variantsOpacity}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 1 }}
              cartEmpty={cartEmpty}
            >
              {!cartEmpty ? (
                <>
                  <div className="pictureWrapper picture">
                    <Image
                      src={product.image.url}
                      alt="Picture of Item"
                      height="100%"
                      width="100%"
                      layout="responsive"
                    />
                  </div>

                  <div className="quantity">
                    <QuantityIncrementor product={product} />
                  </div>
                </>
              ) : (
                <CartEmpty />
              )}
            </CartItemStylesSM>
          </motion.div>
        )}
      </AnimatePresence>
    </CartItemStyles>
  );
}
