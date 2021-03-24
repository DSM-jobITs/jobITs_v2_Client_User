import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    margin-top: 1.875rem; /* 헤더로 겹치는 부분만큼 margin */
    font-family: 'InfinitySans-RegularA1', 'sans-serif';
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #006004;
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  }

  * {
    box-sizing: bordeer-box;
  }

  @font-face {
    font-family: 'HangeulNuri-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;  