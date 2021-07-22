import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

// TODO: make background color variable global
const SideBarStyles = styled.div`
  width: 250px;
  min-height: 60rem;
  height: auto;
  position: relative;
  font-family: 'Nunito';
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 4rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-right-radius: 2rem;

  hr {
    margin: 3rem 0;
  }

  .categorySection {
    margin: 3rem 0;
  }

  .categoryTitle {
    font-size: 2em;
    margin-bottom: 1rem;
  }

  .categoryItem {
    font-size: 1.6rem;
    margin-bottom: -0.5rem;
  }
`;

export default function Sidebar() {
  return (
    <SideBarStyles>
      <section className="categorySection">
        <div className="categoryTitle">Type</div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Kombucha
        </div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Mead
        </div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Kefir
        </div>
      </section>
      <hr />
      <section className="Ingredients">
        <div className="categoryTitle">Ingredients</div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Lemon
        </div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Chocolate
        </div>
        <div className="categoryItem">
          <Checkbox color="gray" />
          Chile
        </div>
      </section>
    </SideBarStyles>
  );
}
