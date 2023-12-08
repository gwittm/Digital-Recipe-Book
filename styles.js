import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --submitbutton-color:#BC986A;
    --background-color:#f2ebe9;
/*     --header-color:#de5499;
 */    --darkbackground-color:#eddcd9;
    --font-color: ff397754;
    --title-color: #264143;
/*     --title-color:#ff8a44
 */    --header-color: #794163
  }

  body {
    margin: 80px auto;
    font-family: system-ui;

  }



`;
