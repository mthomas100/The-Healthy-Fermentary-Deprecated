import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';

const PulseStyles = styled.div`
  span {
    margin: 10px;
  }
`;

export default function PulseLoaderEl() {
  return (
    <PulseStyles>
      <PulseLoader color="#000000d8" speedMultiplier="0.5" size="20px" />
    </PulseStyles>
  );
}
