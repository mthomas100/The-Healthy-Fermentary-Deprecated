import styled from 'styled-components';

const SideBarStyles = styled.div`
  width: 250px;
  height: auto;
  position: relative;
  border: 1px solid black;

  .categoryTitle {
    font-size: 1.5rem;
  }

  .categoryItem {
    font-size: 1rem;
  }
`;

export default function Sidebar() {
  return (
    <SideBarStyles>
      <div className="categoryTitle">Type</div>
      <div className="categoryItem">ItemX</div>
      <div className="categoryItem">ItemX</div>
      <div className="categoryItem">ItemX</div>
      <div className="categoryTitle">Type</div>
      <div className="categoryItem">ItemX</div>
      <div className="categoryItem">ItemX</div>
      <div className="categoryItem">ItemX</div>
    </SideBarStyles>
  );
}
