import styled from 'styled-components';

const OuterWrapperStyles = styled.div`
  background-color: #fed624;
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(35)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,0%,1)'/><path d='M10-10L20 0v10L10 0zM20 0L10-10V0l10 10zm0 10L10 0v10l10 10zm0 10L10 10v10l10 10zM0 20l10-10v10L0 30zm0-10L10 0v10L0 20zM0 0l10-10V0L0 10z'  stroke-width='4' stroke='hsla(221,50.6%,15.9%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
  position: relative;
  z-index: 0;
  padding: 8rem;
  width: 100%;
`;

export default function OuterWrapper({ children }) {
  return <OuterWrapperStyles>{children}</OuterWrapperStyles>;
}
