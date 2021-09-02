import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';
import useComponentSize from '../lib/useComponentSize';

const SubHeaderStyles = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #fcfcfc;
  overflow-x: auto;
  box-shadow: black;
  display: flex;
  align-items: center;
  justify-content: left;
  border: 2px solid purple;
`;

const CategoriesStyles = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 2px solid green;
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
  const categoriesRef = useRef(null);
  const windowSize = useWindowSize();
  const categoriesSize = useComponentSize(categoriesRef);

  useEffect(() => {
    console.log('cat', categoriesSize.width);
    console.log('window', windowSize.width);
  }, [windowSize]);

  return (
    <SubHeaderStyles>
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
