import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import QuantityIncrementor from './QuantityIncrementor';
import QuantitySelector from './QuantitySelector';

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
  padding: 2rem 2rem;
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
  padding: 2rem 2rem;
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

export default function CartItem({ product, index, cartIsHovering }) {
  return (
    <CartItemStyles
      animate={{ width: `${cartIsHovering ? '18.4rem' : '10.2rem'}` }}
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
            >
              <div className="pictureWrapper picture">
                <Image
                  src={product.image.url}
                  alt="Picture of the author"
                  height="100%"
                  width="100%"
                  layout="responsive"
                />
              </div>

              <div className="quantity">
                <QuantityIncrementor product={product} />
              </div>

              <div className="title rhs">{product.title}</div>
              <div className="price rhs">
                <div>&#xd7;</div>
                <div className="value">
                  <b>₹</b> {product.price}
                </div>
              </div>
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
            >
              <div className="pictureWrapper picture">
                <Image
                  src={product.image.url}
                  alt="Picture of the author"
                  height="100%"
                  width="100%"
                  layout="responsive"
                />
              </div>

              <div className="quantity">
                <QuantityIncrementor product={product} />
              </div>
            </CartItemStylesSM>
          </motion.div>
        )}
      </AnimatePresence>
    </CartItemStyles>
  );
}
