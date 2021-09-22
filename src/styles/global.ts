import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/MaisonNeueExt-Light.ttf'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Maison Neue';
    font-style: medium;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/MaisonNeueExt-Medium.ttf'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/MaisonNeueExt-Bold.ttf'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 65.5%;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};

      font-size: ${theme.font.sizes.medium};
    }
  `}

`;

export default GlobalStyles;
