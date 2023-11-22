import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --submitbutton-color:#BC986A;
    --header-color:#659DBD;
    --title-color:#8D8741;
    --background-color:#FBEEC1;
    --editbutton-color:#DAAD86;
    --hover-color:#8D8741;
  }

  body {
    margin: 80px;
    font-family: system-ui;

  }



`;
