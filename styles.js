import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --background-color:#f2ebe9;
    --darkbackground-color:#eddcd9;
    --title-color: #264143;
    --header-color: #794163
  }

  body {
    margin: 60px auto;
    font-family: system-ui;

  } 



`;
