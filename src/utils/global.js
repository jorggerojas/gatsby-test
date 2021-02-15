import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 !important;
        padding: 0;
    }
    /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */

    html.has-scroll-smooth {
      overflow: hidden;
    }

    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .has-scroll-smooth body {
      overflow: hidden;
    }


    /* Specifying the scroll container manually */

    .has-scroll-smooth #___gatsby,
    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh;
    }

    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 11px;
      height: 100vh;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0;
    }

    .c-scrollbar:hover {
      transform: scaleX(1.45);
    }

    .c-scrollbar:hover,
    .has-scroll-scrolling .c-scrollbar,
    .has-scroll-dragging .c-scrollbar {
      opacity: 1;
    }

    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
      width: 7px;
      border-radius: 10px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab;
    }

    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }

    html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }

    html[data-direction='down'] .header {
      transform: translateY(-100%);
    }
`;

export default GlobalStyle;
