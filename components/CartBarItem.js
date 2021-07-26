import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';

const CartBarItemStyles = styled(motion.div)`
  width: 100%;
  display: grid;
  // grid-template-columns: 'auto auto';
  grid-template-rows: auto;
  grid-template-areas:
    'picture title'
    'quantity price';
  padding: 2rem 2rem;

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

const variants = {
  open: {
    width: 'auto',
    opacity: '1',
  },
  closed: {
    width: '0',
    opacity: '0',
  },
};

export default function CartBarItem({ product, index, cartIsHovering }) {
  return (
    <CartBarItemStyles index={index} cartIsHovering={cartIsHovering}>
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
        <QuantitySelector product={product} />
      </div>
      <AnimatePresence>
        {cartIsHovering && (
          <>
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="title rhs"
            >
              {product.title}
            </motion.div>
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="price rhs"
            >
              <div>&#xd7;</div>
              <div className="value">
                <b>₹</b> {product.price}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </CartBarItemStyles>
  );
}
