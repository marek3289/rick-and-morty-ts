import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.dark};
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul {
    list-style: none;
  }
  h1, h2, h3, p {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
