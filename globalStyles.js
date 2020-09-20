import { injectGlobal } from "emotion";
injectGlobal`
html {
  font-size: 62.5%;
  height: 100%;

}
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;

  }
  
  body {
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    overflow-x:hidden ;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    margin-top: 0px !important;
    height: 100%;

  }
  img {
    border: 0;
  }
  #root {
    background: #e9e9e9;
    min-height: 100%;
    min-width: 100%;
  }
  a{
    text-decoration:none;
  }
  li{
    list-style-type:none;
  }
  input:focus,
  textarea:focus,
  button:focus,
  a:focus,
  article:focus {
    outline: none !important;
    border:none;
  }
`;
