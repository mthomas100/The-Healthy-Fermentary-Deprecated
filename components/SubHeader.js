import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';
import useComponentSize from '../lib/useComponentSize';

const SubHeaderStyles = styled.div`
  width: 100%;
  height: auto;
  background-color: #fcfcfc;
  overflow-x: auto;
  box-shadow: black;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 3rem 1rem;
`;

const CategoriesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
`;

const CategoryStyles = styled.div`
  height: 3rem;
  padding: 2rem 4rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #ffffff;
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default function SubHeader() {
  const categoriesRef = useRef(null);
  const windowSize = useWindowSize();
  const categoriesSize = useComponentSize(categoriesRef);

  return (
    <SubHeaderStyles
      justifyContent={
        categoriesSize.width > windowSize.width ? 'left' : 'center'
      }
    >
      <CategoriesStyles ref={categoriesRef}>
        <CategoryStyles>All</CategoryStyles>
        <CategoryStyles>Kombucha</CategoryStyles>
        <CategoryStyles>Mead</CategoryStyles>
        <CategoryStyles>Kombucha</CategoryStyles>
        <CategoryStyles>Mead</CategoryStyles>
      </CategoriesStyles>
    </SubHeaderStyles>
  );
}
