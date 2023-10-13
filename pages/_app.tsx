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
    <head>
        <link rel="stylesheet" href="https://static-production.npmjs.com/styles.cb65339e823461fa6d91.css" />
        <title>next-seo - npm</title>
        <meta data-react-helmet="true" http-equiv="cleartype" content="on" />
        <meta data-react-helmet="true" name="apple-mobile-web-app-capable" content="yes" />
        <meta data-react-helmet="true" name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes" />
        <meta data-react-helmet="true" property="og:image" content="https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png" />
        <meta data-react-helmet="true" name="msapplication-TileColor" content="#cb3837" />
        <meta data-react-helmet="true" name="msapplication-TileImage" content="https://static-production.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png" />
        <meta data-react-helmet="true" name="msapplication-config" content="https://static-production.npmjs.com/668aac888e52ae13cac9cfd71fabd31f.xml" />
        <meta data-react-helmet="true" name="theme-color" content="#cb3837" />
        <meta data-react-helmet="true" name="description" content="SEO plugin for Next.js projects. Latest version: 6.1.0, last published: 4 months ago. Start using next-seo in your project by running `npm i next-seo`. There are 139 other projects in the npm registry using next-seo." />
        <meta data-react-helmet="true" property="og:description" content="SEO plugin for Next.js projects. Latest version: 6.1.0, last published: 4 months ago. Start using next-seo in your project by running `npm i next-seo`. There are 139 other projects in the npm registry using next-seo." />
        <meta data-react-helmet="true" property="og:title" content="next-seo" />
        <meta data-react-helmet="true" property="og:url" content="https://www.npmjs.com/package/next-seo" />
        <meta data-react-helmet="true" property="og:site_name" content="npm" />
        <meta data-react-helmet="true" name="keywords" content="next.js,seo,react,node,ssr" />
        <meta data-react-helmet="true" name="twitter:card" content="summary" />
        <meta data-react-helmet="true" name="twitter:url" content="https://www.npmjs.com/package/next-seo" />
        <meta data-react-helmet="true" name="twitter:title" content="npm: next-seo" />
        <meta data-react-helmet="true" name="twitter:description" content="SEO plugin for Next.js projects. Latest version: 6.1.0, last published: 4 months ago. Start using next-seo in your project by running `npm i next-seo`. There are 139 other projects in the npm registry using next-seo." />

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

        <style data-styled="active" data-styled-version="5.3.5"></style></head>
     
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
