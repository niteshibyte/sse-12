import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import {  Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { useEffect, useState } from 'react';
import { Header } from '../../../components/header/header';
import { BiVocTopSection } from '../../../components/business-intelligence/voc-reports/top-section';
import { BiVocRoadmap } from '../../../components/business-intelligence/voc-reports/voc-roadmap';
import { BiRecentVocReports } from '../../../components/business-intelligence/voc-reports/recent-voc-reports';
import { BlogResources } from '../../../components/resources/blog-resources';
import { Footer } from '../../../components/footer/footer';
import { useRouter } from 'next/router';
import stackWrapper from '../../../helper/api'
import { SETSINGLEREPORT } from '../../../reducer/singlereport';
import { useDispatch } from 'react-redux';
import FreeSavoury from '../../../components/business-intelligence/voc-reports/free-savoury';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function ProductComparison({data}:{data:any}) {
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length > 0 && data[0]?.length > 0) {
            dispatch(SETSINGLEREPORT(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')
        }


    }, [data])
   

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    })

    return (
        <>
            {!loader ? <Stack as="div" direction='column' rowGap={value.rowGap} className="bi--page white--theme">
            <Head>
                    <title>{data[0][0]?.seo_tags?.meta_title}</title>
                    <meta data-react-helmet="true" name="description" content={data[0][0]?.seo_tags?.meta_description} />
                    <meta data-react-helmet="true" name="keywords" content={data[0][0]?.seo_tags?.keywords} />
                    <meta data-react-helmet="true" property="og:title" content={data[0][0]?.seo_tags?.meta_title} />
                    <meta data-react-helmet="true" property="og:site_name" content='Wonderflow'></meta>
                    <meta data-react-helmet="true" property="og:description" content={data[0][0]?.seo_tags?.meta_description} />
                    <meta data-react-helmet="true" property="og:image" content={data[0][0]?.seo_tags?.image_link?.href} />
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
                <Header />
                <BiVocTopSection />
                <BiVocRoadmap />
                <FreeSavoury />
                <BiRecentVocReports />
                <BlogResources show={4} section="true" />
                <Footer />
            </Stack> : <Loader height='100vh' width='100vw' />}
        </>
    );
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSingleReport("voc_report_entries", context.query.title, `${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}