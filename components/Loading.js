import styled from 'styled-components';
import PulseLoaderEl from './PulseLoaderEl';

const LoadingContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
`;

export default function Loading() {
  return (
    <LoadingContainerStyles>
      <PulseLoaderEl />
    </LoadingContainerStyles>
  );
}
