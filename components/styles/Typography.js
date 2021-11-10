import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/inter';
// import '@fontsource/reenie-beanie';

const Typography = createGlobalStyle`

  /* @font-face {
    font-family: 'radnika_next';
    src: url('/fonts/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */

  html {
    font-family: edo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li {
    letter-spacing: 0.5px;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  .center {
    text-align: center;
  }

  .left {
    text-align: left;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
