import styled from 'styled-components';
import { Checkbox, Divider as DividerMUI } from '@material-ui/core';

// TODO: make background color variable global
const SideBarStyles = styled.div`
  width: 250px;
  /* min-height: 1rem; */
  height: 60rem;
  position: relative;
  font-family: 'Nunito';
  margin-left: 2rem;
  padding-left: 4rem;
  padding-bottom: 5rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  overflow: scroll;

  .sideBar {
    filter: blur(5px);
  }

  .categorySection {
    margin: 3rem 0;
  }

  .categoryTitle {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .categoryItem {
    font-size: 1.4rem;
    margin-bottom: -0.5rem;
  }
`;

const Divider = styled(DividerMUI)`
  && {
    margin: 3rem 0;
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
      <Divider />
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
