import { createGlobalStyle } from 'styled-components';
import { colorsVariables } from './../Style/ColorsVariables';
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
  background-image: ${colorsVariables.backgroundGradient};
  color: ${colorsVariables.white};
  min-height: 100vh;
  font-family: 'Quicksand', sans-serif;
}

  button {
  cursor: pointer;
}
  ul,
  nav,
  a,
  li {
  text-decoration: none;
  list-style: none;
}
`;

export default GlobalStyle;
