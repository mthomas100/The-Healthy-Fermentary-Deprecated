import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

const SideBarStyles = styled.div`
  width: 250px;
  height: auto;
  position: relative;
  /* border: 1px solid black; */
  padding: 0 0 0 2rem;
  font-family: 'Nunito';
  /* top: -10px; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

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
