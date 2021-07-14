import styled from 'styled-components';

import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';

const CheckoutStyles = styled.div`
  position: relative;
  top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;

const StepperStyles = styled.div`
  height: 100px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  .steps {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .step {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 15rem;

      .stepBubble {
        height: 20px;
        width: 20px;
        background-color: lightgray;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .stepNumber {
        }
      }
      .stepText {
      }
    }
  }
`;

// Step Circle with # inside it
// Line between dots
// Centered (middle dot always middle of screen)
// Current Step Colored. Finished Step Checked & Colored
// make step # scheme generate programmatically

export default function Checkout() {
  return (
    <>
      <StepperStyles>
        <div className="line" />
        <div className="steps">
          <div className="step">
            <div className="stepBubble">
              <div className="stepNumber">#</div>
            </div>
            <div className="stepText">Text Describing the Step</div>
          </div>
          <div className="line" />
          <div className="step">
            <div className="stepBubble">
              <div className="stepNumber">#</div>
            </div>
            <div className="stepText">Text Describing the Step</div>
          </div>
          <div className="line" />
          <div className="step">
            <div className="stepBubble">
              <div className="stepNumber">#</div>
            </div>
            <div className="stepText">Text Describing the Step</div>
          </div>
        </div>
      </StepperStyles>
      <CheckoutStyles>
        <CheckoutForm />
        <CartSummary />
      </CheckoutStyles>
    </>
  );
}
