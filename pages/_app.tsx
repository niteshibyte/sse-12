import "../styles/main.css";
import '../styles/nitesh.css'
import "../styles/additional-css-file.css"

import type { AppProps } from 'next/app'

import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <html lang="en" data-theme="light">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/png" />
        <title>Wonderflow</title>

        <script>
          {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PQ3W82L')
              `}

        </script>
      </Head>
      {/* <ResponsiveProvider> */}
        <Component {...pageProps} />
      {/* </ResponsiveProvider> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQ3W82L"
        height="0" width="0" style={{ display: "none", visibility: 'hidden' }}></iframe>
      </noscript>
    </html>
  )
}

export default MyApp
