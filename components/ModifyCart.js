import styled from 'styled-components';
import { useCart } from '../lib/cartState';

export default function ModifyCart({ id }) {
  const { modifyCart } = useCart();

  const ModifyButtonStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    color: red;
    border: 3px solid gray;
    margin: 0 5px;
  `;

  function handleModifyCart(value) {
    modifyCart(id, value);
  }

  return (
    <>
      <ModifyButtonStyles onClick={() => handleModifyCart('inc')}>
        +
      </ModifyButtonStyles>
      <ModifyButtonStyles onClick={() => handleModifyCart('dec')}>
        -
      </ModifyButtonStyles>
    </>
  );
}
