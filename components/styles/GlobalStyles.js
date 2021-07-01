import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #0e6588;
    --darkBlue: #0b506b;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --lightBlue: #4fceb999;
    box-sizing: border-box;
    font-size: 62.5%;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    
  }
  
  /* Links */
  a {
  text-decoration: none;
  color: var(---black);
  }
  a:hover {
    text-decoration: none;
  }
  /* button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  } */

  /* Style System */ 

  /* Scrollbar Styles */
  /* body::-webkit-scrollbar {
  width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  } */


`;

export default GlobalStyles;
