import styled from 'styled-components';

const SubHeaderStyles = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  box-shadow: black;
`;

const CategoryStyles = styled.div`
  height: 3rem;
  padding: 0 3rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #ffffff;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default function SubHeader() {
  return (
    <SubHeaderStyles>
      <CategoryStyles>All</CategoryStyles>
      <CategoryStyles>Kombucha</CategoryStyles>
      <CategoryStyles>Mead</CategoryStyles>
      <CategoryStyles>Kombucha</CategoryStyles>
      <CategoryStyles>Mead</CategoryStyles>
    </SubHeaderStyles>
  );
}
