import Image from 'next/image';
import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
// import CartBarItemStyles from './styles/CartBarItemStyles';

const CartBarItemStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.cartHover ? 'auto 1fr' : 'auto 0fr'};
  grid-template-rows: auto;
  background-color: ${(props) => (props.i % 2 === 0 ? `#ffffff` : `#f4f3f3`)};
  padding: 2rem 2rem;
  transition: 0.4s all;

  .MuiSelect-icon {
    top: unset !important;
  }

  .picture {
    grid-area: 1 / 1 / 2 / 2;
  }
  .quantity {
    grid-area: 2 / 1 / 3 / 2;
  }

  .title {
    grid-area: 1 / 2 / 2 / 3;
    align-self: center;
    font-family: 'Nunito';
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  .price {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0.5rem;
    font-size: 1.3rem;
    font-family: 'Nunito';
    width: auto;

    .times {
    }

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

export default function CartBarItem({ product, i, cartHover }) {
  return (
    <CartBarItemStyles i={i} cartHover={cartHover}>
      <div className="pictureWrapper picture">
        <Image
          src={product.image.url}
          alt="Picture of the author"
          width="100%"
          height="auto"
          layout="responsive"
        />
      </div>
      <QuantitySelector product={product} />

      <div className="title rhs">{product.title}</div>
      <div className="price rhs">
        <div className="times">&#xd7;</div>
        <div className="value">
          <b>₹</b> {product.price}
        </div>
      </div>
    </CartBarItemStyles>
  );
}
