import { AppProps } from 'next/app'
import GlobalStyle from '../GlobalStyle'
import { Provider } from 'react-redux'
import store from '../store'
import Head from 'next/head'

export default ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Head>
      <title>Eventio</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </Provider>
)
