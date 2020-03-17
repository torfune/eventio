import { createGlobalStyle } from 'styled-components'
import { COLOR } from './constants'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Hind', sans-serif;
    color: ${COLOR.GREY};
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  h2 {
    margin-bottom: 4rem;
    color: ${COLOR.GREY_LIGHT};
    font-weight: 500;
    font-size: 1.8rem;
  }

  button {
    padding: 0;
  }
`

export default GlobalStyle
