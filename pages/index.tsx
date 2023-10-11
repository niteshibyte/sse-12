
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import "animate.css";
import { useEffect, useState } from 'react';
import { Stack, useBreakpointsConfig } from "@wonderflow/react-components";
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
  console.log(data?.section_8_promotional?.hero_image?.url)
  useEffect(() => {
    document.body.classList.remove("mega--menu--open")
    dispatch(SETHOMEDATA(data))
  }, [router])
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
      <Head>

        <title>{data?.seo_tags?.meta_title}</title>
        <meta name="description" content={data?.seo_tags?.meta_description} />
        <meta name="keywords" content={data?.seo_tags?.keywords} />
        <meta property="og:title" content={data?.seo_tags?.meta_title} />
        <meta property="og:site_name" content='Wonderflow'></meta>
        <meta property="og:description" content={data?.seo_tags?.meta_description} />
        <meta property="og:image" content='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' />
      </Head>
      {!loader ? <>
        <Stack as="div" direction='column' rowGap={value.rowGap} className='home--page'>

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
  const data = await stackWrapper.getHomePage('home_page', 'blt8b06eea0c35a7994', context.query.lang)
  return {
    props: {
      data,
    },
  };
}
