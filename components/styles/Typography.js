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

  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/nunito-v16-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito-v16-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
  }
  /* nunito-600 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/nunito-v16-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito-v16-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito-v16-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito-v16-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito-v16-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito-v16-latin-600.svg#Nunito') format('svg'); /* Legacy iOS */
  }
  /* nunito-800 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/nunito-v16-latin-800.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito-v16-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito-v16-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito-v16-latin-800.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito-v16-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito-v16-latin-800.svg#Nunito') format('svg'); /* Legacy iOS */
  }

    /* reenie-beanie-regular - latin */
  @font-face {
    font-family: 'Reenie Beanie';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/reenie-beanie-v11-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/reenie-beanie-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/reenie-beanie-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/reenie-beanie-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/reenie-beanie-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/reenie-beanie-v11-latin-regular.svg#ReenieBeanie') format('svg'); /* Legacy iOS */
  }

      /* pathway-gothic-one-regular - latin */
    @font-face {
      font-family: 'Pathway Gothic One';
      font-style: normal;
      font-weight: 400;
      src: url('/fonts/pathway-gothic-one-v9-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../fonts/pathway-gothic-one-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/pathway-gothic-one-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/pathway-gothic-one-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('../fonts/pathway-gothic-one-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/pathway-gothic-one-v9-latin-regular.svg#PathwayGothicOne') format('svg'); /* Legacy iOS */
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

  .left {
    text-align: left;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
