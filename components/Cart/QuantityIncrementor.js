import styled from 'styled-components';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

import { useCart } from '../../lib/cartState';

const QuantityIncrementorStyles = styled.div`
  font-family: 'Roboto';

  font-weight: 400;

  margin: 0 auto;
  box-shadow: inset 4px 0px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin-top: 1rem;

  .border {
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .quantity {
    font-size: 1.3rem;
    pointer-events: none;
  }

  .decrement,
  .increment {
    font-size: 1.5rem;
    color: #0000007f;

    &:hover {
      color: #000000;
    }
  }

  .decrement {
    margin-right: 1rem;
  }
  .increment {
    margin-left: 1rem;
  }
`;

export default function QuantityIncrementor({ product, componentOrigin }) {
  const { id } = product;
  const { modifyCart } = useCart();

  return (
    <QuantityIncrementorStyles>
      <div className="border">
        <AiFillMinusCircle
          className="decrement"
          onClick={() => modifyCart(id, 'decrement')}
        />
        <div className="quantity">{product.quantity}</div>
        <AiFillPlusCircle
          className="increment"
          onClick={() => modifyCart(id, 'increment')}
        />
      </div>
    </QuantityIncrementorStyles>
  );
}
