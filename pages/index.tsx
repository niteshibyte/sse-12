
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import "animate.css";
import { useEffect, useState } from 'react';
import { Button, Container, Spinner, Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { useDispatch } from 'react-redux';
import stackWrapper from '../helper/api'
import { useSelector } from 'react-redux';
import { SETHOMEDATA } from '../reducer/homeData';
import { Banner } from '../components/banner/banner';
import Head from 'next/head';
import Loader from '../components/loader/Loader';
import { PartnerLogos } from '../components/customer-support/customer-logos';
import { SuccessDecisionMakers } from '../components/success-decision-makers/success-decision-makers';
import { Roadmap } from '../components/success-roadmap/roadmap';
import { Benefits } from '../components/benefits/benefits';
import { Results } from '../components/results/results';
import { Analytics } from '../components/voc-analytics/analytics';
import { BookDemo } from '../components/book-demo/book-demo';
import { StayWithUs } from '../components/stay-with-us/companies';
import { Standard } from '../components/future-standard/standard';
import { HomeResource } from '../components/home/resources';
import { Footer } from '../components/footer/footer';
import { useRouter } from 'next/router';
import { Header } from '../components/header/header';

export default function Home({ data }: { data: any }) {
  const dispatch = useDispatch()
  
  const router = useRouter()
  useEffect(() => {
    document.body.classList.remove("mega--menu--open")
    dispatch(SETHOMEDATA(data))
  }, [data])
  const [loader, setLoader] = useState(false)
  


  type config = {
    rowGap: "64" | "96" | "128",
  }



  const { matches, value } = useBreakpointsConfig<config>({
    md: { rowGap: "96" },
    lg: { rowGap: "128" },
    xl: { rowGap: "128" },
    fallback: { rowGap: "64" },
  });



  return (
    <>
      <head>
        <title>{data?.seo_tags?.meta_title}</title>
            <meta data-react-helmet="true"  name="description" content={data?.seo_tags?.meta_description} />
            <meta data-react-helmet="true" name="keywords" content={data?.seo_tags?.keywords} />
            <meta data-react-helmet="true" property="og:title" content={data?.seo_tags?.meta_title} />
            <meta data-react-helmet="true" property="og:site_name" content='Wonderflow'></meta>
            <meta data-react-helmet="true" property="og:description" content={data?.seo_tags?.meta_description} />
            <meta data-react-helmet="true" property="og:image" content={data?.seo_tags?.image_link?.href} />

        <script>
          {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PQ3W82L')
              `}

        </script>

        </head>
      {!loader ? <>
        <Stack as="div" direction='column' rowGap={value.rowGap} className='home--page'>
          {/* <Head>

            <title>{homeData?.seo_tags?.meta_title}</title>
            <meta name="description" content={homeData?.seo_tags?.meta_description} />
            <meta name="keywords" content={homeData?.seo_tags?.keywords} />
            <meta property="og:title" content={homeData?.seo_tags?.meta_title} />
            <meta property="og:site_name" content='Wonderflow'></meta>
            <meta property="og:description" content={homeData?.seo_tags?.meta_description} />
            <meta property="og:image" content={homeData?.seo_tags?.image_link?.href} />
          </Head> */}
          <Header />
          <Banner />
          <PartnerLogos />
          <SuccessDecisionMakers />
          <Roadmap />
          <Benefits />
          <Results />
          <Analytics />
          <BookDemo />
          <StayWithUs />
          <Standard />
          <HomeResource />

          <Footer />
        </Stack>
      </> : <Loader height='100vh' width='100vw' />}

    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const data = await stackWrapper.getHomePage('home_page', 'blt8b06eea0c35a7994', `${context.query.lang}`)
  return {
    props: {
      data,
    },
  };
}
