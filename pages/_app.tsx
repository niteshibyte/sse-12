import { Provider } from 'react-redux'
import "../styles/main.css";
import '../styles/nitesh.css'
import "../styles/additional-css-file.css"
import type { AppProps } from 'next/app'
import store from "../store/store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { ResponsiveProvider } from '@wonderflow/react-components';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Provider store={store}>

    <html lang="en" data-theme="light">
      
      
      {/* <ResponsiveProvider> */}
        <Component {...pageProps} />
      {/* </ResponsiveProvider> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQ3W82L"
        height="0" width="0" style={{ display: "none", visibility: 'hidden' }}></iframe>
      </noscript>
    </html>
  </Provider>
}

export default MyApp
