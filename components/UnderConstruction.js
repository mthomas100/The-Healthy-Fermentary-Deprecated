import styled from 'styled-components';
import { Typography as TypographyMUI } from '@material-ui/core';

const UnderConstructionStyles = styled.div`
  height: auto;
  border-top: solid 4px;
  border-bottom: solid 4px;
  background-color: yellow;
  border-image: repeating-linear-gradient(
      -75deg,
      yellow,
      yellow 10px,
      black 10px,
      black 20px
    )
    20;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;

  .text {
    text-align: center;
    padding: 2rem;
  }
`;

export default function UnderConstruction() {
  return (
    <UnderConstructionStyles>
      <TypographyMUI variant="h6">
        Excuse the mess. This website is currently under construction.
      </TypographyMUI>
    </UnderConstructionStyles>
  );
}
