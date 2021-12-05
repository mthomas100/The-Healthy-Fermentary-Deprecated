import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMeasure } from 'react-use';
import { useWindowSize } from '../lib/useWindowSize';
import { useLayout } from '../lib/layoutState';

const CategoriesWrapperStyles = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  overflow-x: auto;
  box-shadow: black;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 3rem 1rem;

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 1.5rem;

    .selected {
      background-color: #000000c0;
      color: white;
    }
  }
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

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  const windowSize = useWindowSize();
  const [categoriesRef, { width, height }] = useMeasure();
  const { setCategoriesHeight } = useLayout();

  function handleCategoryButtonClick(category) {
    setSelectedCategory(category);
  }

  useEffect(() => {
    setCategoriesHeight(height);
  });

  return (
    <CategoriesWrapperStyles
      justifyContent={width > windowSize.width ? 'left' : 'center'}
    >
      <div className="categories" ref={categoriesRef}>
        <CategoryButtonStyles
          onClick={(e) => handleCategoryButtonClick(e.target.innerText)}
          className={selectedCategory === 'All' ? 'selected' : ''}
        >
          All
        </CategoryButtonStyles>
        {categories.map((category) => (
          <CategoryButtonStyles
            onClick={(e) => handleCategoryButtonClick(e.target.innerText)}
            key={category.name}
            className={category.name === selectedCategory ? 'selected' : ''}
          >
            {category.name}
          </CategoryButtonStyles>
        ))}
      </div>
    </CategoriesWrapperStyles>
  );
}
