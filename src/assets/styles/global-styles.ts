import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    margin-top: 1.875rem; /* 헤더로 겹치는 부분만큼 margin */
    font-family: 'AppleSDGothic', 'sans-serif';
  }

  * {
    box-sizing: bordeer-box;
  }

  @font-face {
    font-family: 'AppleSDGothic';
    src: url(${require('../fonts/AppleSDGothicNeoB.ttf')});
  }
`;

export default GlobalStyle;  