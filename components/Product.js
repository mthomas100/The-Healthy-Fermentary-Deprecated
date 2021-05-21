import styled from 'styled-components';
import { layout } from 'styled-system';

const ProductStyles = styled.div`
  ${layout}
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .productImage {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    //filter: saturate(180%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    &::before {
      content: '';
      display: block;
      padding-top: 56.25%; // 16:9 aspect ratio
    }
  }

  .btn {
    background-color: white;
    border: 1px solid black;
    padding: 0.5rem;
    text-transform: lowercase;
    display: block;
    width: 100%;
  }
`;

export default function Product() {
  return (
    <ProductStyles>
      <img
        src="https://unsplash.it/800/600?image=82"
        alt="picture of flowers"
        className="productImage"
      />
      <div className="content">
        <div className="title">Flex Grow</div>
        <div className="description">
          This defines the ability for a flex item to grow if necessary. It
          accepts a unitless value that serves as a proportion. It dictates what
          amount of the available space inside the flex container the item
          should take up.
        </div>
      </div>
      <button type="button" className="btn">
        Add to Cart
      </button>
    </ProductStyles>
  );
}
