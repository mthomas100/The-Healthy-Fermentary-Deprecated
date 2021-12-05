import { useRef } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';
import useComponentSize from '../lib/useComponentSize';

const SubHeaderStyles = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
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

const CategoryButtonStyles = styled.div`
  height: 3rem;
  padding: 2rem 4rem;
  border: 2px solid black;
  box-shadow: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #ffffff;
  font-size: 1.2rem;
  cursor: default;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    background-color: #000000c0;
    color: white;
  }
`;

export default function SubHeader({ categories, setSelectedCategory }) {
  const categoriesRef = useRef(null);
  const windowSize = useWindowSize();
  const categoriesSize = useComponentSize(categoriesRef);

  function handleCategoryButtonClick(category) {
    setSelectedCategory(category);
  }

  return (
    <SubHeaderStyles
      justifyContent={
        categoriesSize.width > windowSize.width ? 'left' : 'center'
      }
    >
      <CategoriesStyles ref={categoriesRef}>
        <CategoryButtonStyles
          onClick={(e) => handleCategoryButtonClick(e.target.innerText)}
        >
          All
        </CategoryButtonStyles>
        {categories.map((category) => (
          <CategoryButtonStyles
            onClick={(e) => handleCategoryButtonClick(e.target.innerText)}
          >
            {category.name}
          </CategoryButtonStyles>
        ))}
      </CategoriesStyles>
    </SubHeaderStyles>
  );
}
