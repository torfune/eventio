import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind-Regular.ttf') format('truetype');
    font-weight: 400;
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

  body {
    font-size: 1.6rem;
    font-family: 'Hind', sans-serif;
  }

  p {
    font-size: 1rem;
  }
`

export default GlobalStyle
