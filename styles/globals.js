import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
  --yellow-color: #FFEBAF;
  --background-color: #FFFEFB;
  --text-color: #3E3E3E;
  background-color: #FFFEFB;
  direction: rtl;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
padding: 0;
  margin: 0;
  box-sizing: border-box;
}`;

export default GlobalStyle;
