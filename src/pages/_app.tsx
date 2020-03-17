import { AppProps } from 'next/app'
import GlobalStyle from '../GlobalStyle'

export default ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)
