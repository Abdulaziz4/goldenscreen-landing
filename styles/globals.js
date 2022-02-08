import { createGlobalStyle } from "styled-components";

// import cairo200 from "../public/assets/fonts/cairo-v17-arabic-200.woff";
// import cairo200w2 from "../public/assets/fonts/cairo-v17-arabic-200.woff2";
// import cairo300 from "../public/assets/fonts/cairo-v17-arabic-300.woff";
// import cairo300w2 from "../public/assets/fonts/cairo-v17-arabic-300.woff2";
// import cairo500 from "../public/assets/fonts/cairo-v17-arabic-500.woff";
// import cairo500w2 from "../public/assets/fonts/cairo-v17-arabic-500.woff2";
// import cairo600 from "../public/assets/fonts/cairo-v17-arabic-600.woff";
// import cairo600w2 from "../public/assets/fonts/cairo-v17-arabic-600.woff2";
// import cairo700 from "../public/assets/fonts/cairo-v17-arabic-700.woff";
// import cairo700w2 from "../public/assets/fonts/cairo-v17-arabic-700.woff2";
// import cairo800 from "../public/assets/fonts/cairo-v17-arabic-800.woff";
// import cairo800w2 from "../public/assets/fonts/cairo-v17-arabic-800.woff2";
// import cairo900 from "../public/assets/fonts/cairo-v17-arabic-900.woff";
// import cairo900w2 from "../public/assets/fonts/cairo-v17-arabic-900.woff2";
// import cairoReg from "../public/assets/fonts/cairo-v17-arabic-regular.woff";
// import cairoRegw2 from "../public/assets/fonts/cairo-v17-arabic-regular.woff2";

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
