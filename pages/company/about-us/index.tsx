
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import {  Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';
import { AboutBanner } from '../../../components/about-us/about-banner';
import { AboutMission } from '../../../components/about-us/about-mission';
import { AboutReults } from '../../../components/about-us/about-results';
import { WonderflowTeam } from '../../../components/about-us/wonderflow-team';
import { AboutFoundation } from '../../../components/about-us/about-foundation';
import { ProvenImpact } from '../../../components/about-us/proven-impact';
import { CustomerFeedback } from '../../../components/about-us/customer-feedback';
import { AboutTestimonial } from '../../../components/about-us/about-testimonial';
import { GlobalPresence } from '../../../components/about-us/global-presence';
import { JoinTeam } from '../../../components/about-us/join-team';
import { Empowering } from '../../../components/about-us/empowering';
import { useEffect, useState } from 'react';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { SETABOUTUS } from '../../../reducer/about';

import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function AboutUs({data}:{data:any}) {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        dispatch(SETABOUTUS(data))
        setLoader(false)
    }, [data])
  

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

    return (
        <>
            {!loader ? <>
                <Head>

                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                </Head>
                <Stack as='div' rowGap={value.rowGap} className='white--theme about-page'>
                    <Header />
                    <AboutBanner />
                    <AboutMission />
                    <AboutReults />
                    <Empowering />
                    <WonderflowTeam />
                    <AboutTestimonial />
                    <AboutFoundation />
                    <ProvenImpact />
                    <CustomerFeedback />
                    <GlobalPresence />
                    <JoinTeam />
                    <Footer />
                </Stack>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getAboutUsPage('about_us_page', 'blt01088a200f6cd6c0', context.query.lang)
    return {
        props: {
            data,
        },

    };
}