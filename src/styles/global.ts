import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialiased;
  }
`
