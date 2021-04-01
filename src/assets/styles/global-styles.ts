import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    margin-top: 1.875rem; /* 헤더로 겹치는 부분만큼 margin */
    overflow-x: hidden;
    font-family: 'InfinitySans-RegularA1', 'sans-serif';
    
  }

  body {
    ::-webkit-scrollbar {
      width: 10px;
      background: none;
    }
    ::-webkit-scrollbar-track{
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(97, 97, 97,0.4);
    }
    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
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