import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';

const LoadingContainerStyles = styled.div`
  display: fixed;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const PulseStyles = styled.div`
  span {
    margin: 10px;
  }
`;

export default function Loading() {
  return (
    <LoadingContainerStyles>
      <PulseStyles>
        <PulseLoader color="#000000d8" speedMultiplier="0.5" size="20px" />
      </PulseStyles>
    </LoadingContainerStyles>
  );
}
