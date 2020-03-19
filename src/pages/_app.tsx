import { AppProps } from 'next/app'
import GlobalStyle from '../GlobalStyle'
import { Provider } from 'react-redux'
import store from '../store'
import Head from 'next/head'
import { useEffect } from 'react'
import StorageService from '../StorageService'
import { selectCategory, selectViewMode } from '../store/events/actions'

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const category = StorageService.getCategory()
    if (category) store.dispatch(selectCategory(category))

    const viewMode = StorageService.getViewMode()
    if (viewMode) store.dispatch(selectViewMode(viewMode))
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <title>Eventio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}
