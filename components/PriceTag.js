import styled from 'styled-components';

const PriceStyles = styled.div`
  position: absolute;
  z-index: 1;
  top: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000000c5;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  .currency {
    margin-right: 2px;
  }

  .price {
    text-align: center;
    color: white;
    font-size: 1.3rem;
  }
`;

export default function PriceTag({ price }) {
  return (
    <PriceStyles>
      <div className="price">
        <span className="currency">$</span>
        {price}
      </div>
    </PriceStyles>
  );
}
