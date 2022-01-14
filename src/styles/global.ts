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
    font-size: 60%;
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

  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 500ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
      opacity: 1;
    }

    .ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
  }


`;

export default GlobalStyles;
