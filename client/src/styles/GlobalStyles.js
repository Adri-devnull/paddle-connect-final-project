import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(rgb(35, 44, 62), rgb(17, 21, 30));
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 0;
  }
  
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
