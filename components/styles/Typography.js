import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/reenie-beanie';

const Typography = createGlobalStyle`

  @font-face {
    font-family: 'radnika_next';
    src: url('/fonts/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

/* chivo-regular - latin */
@font-face {
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/chivo-v12-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/chivo-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/chivo-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/chivo-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/chivo-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/chivo-v12-latin-regular.svg#Chivo') format('svg'); /* Legacy iOS */
}

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

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
