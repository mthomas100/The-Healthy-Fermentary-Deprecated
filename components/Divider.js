import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const DividerStyles = styled.div`
  .divider {
    border: 3px dashed #252525;
    padding: 10px 0px;
    margin: 10px 0px;
  }

  .hovering {
    background-color: rgb(81 77 77 / 11%);
  }

  /* .isModifying {
    background-color: white;
  } */

  .inner {
    background-color: white;
    position: relative;
  }
`;

export default function Divider({
  isModifying,
  setIsModifying,
  isEditing,
  setIsEditing,
  children,
}) {
  function handleClick(e) {
    if (e.target.id === 'outer') {
      if (isEditing) {
        setIsEditing(false);
      }
      if (!isModifying) {
        setIsModifying((prev) => !prev);
      }
      e.target.classList.remove('hovering');
      e.target.classList.toggle('isModifying');
    }
  }

  function handleMouse(e) {
    if (e.type === 'mouseenter') {
      e.target.classList.add('hovering');
    }
    if (e.type === 'mouseleave') {
      e.target.classList.remove('hovering');
    }
    if (e.type === 'mouseover' && isModifying) {
      e.target.classList.remove('hovering');
    }
  }
  return (
    <DividerStyles>
      <div
        id="outer"
        className="divider"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        onMouseOver={handleMouse}
        onClick={(e) => handleClick(e)}
      >
        <div className="inner">{children}</div>
      </div>
      {isModifying && (
        <AiOutlineCloseCircle
          className="closeCircle"
          style={{ height: '50px', width: '50px' }}
          onClick={() => {
            setIsModifying(false);
            setIsEditing(false);
          }}
        />
      )}
    </DividerStyles>
  );
}
