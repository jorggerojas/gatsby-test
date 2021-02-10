import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 !important;
        padding: 0;
    }
    html.has-scroll-smooth {
  overflow: visible; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="vertical"] [data-scroll-container] {
  white-space: nowrap;
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="vertical"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }
`;

export default GlobalStyle;
