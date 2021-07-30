import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import QuantityIncrementor from './QuantityIncrementor';
import QuantitySelector from './QuantitySelector';

const CartBarItemStyles = styled(motion.div)``;

const CartBarItemStylesSM = styled(motion.div)`
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

const CartBarItemStylesLG = styled(motion.div)`
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
    font-family: 'Nunito';
    font-size: 1.4rem;
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

// animate={{ width: `${cartIsHovering ? '184px' : '102px'}` }}
// transition={{ duration: 5 }}

export default function CartBarItem({ product, index, cartIsHovering }) {
  return (
    <CartBarItemStyles
      animate={{ width: `${cartIsHovering ? '18.4rem' : '10.2rem'}` }}
      style={{ overflow: 'hidden' }}
    >
      <AnimatePresence>
        {cartIsHovering ? (
          <motion.div>
            <CartBarItemStylesLG
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
            </CartBarItemStylesLG>
          </motion.div>
        ) : (
          <motion.div>
            <CartBarItemStylesSM
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
            </CartBarItemStylesSM>
          </motion.div>
        )}
      </AnimatePresence>
    </CartBarItemStyles>
  );
}
