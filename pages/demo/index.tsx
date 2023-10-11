import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import {   Stack } from '@wonderflow/react-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'

import { SETREQUESTDEMO } from '../../reducer/request';
import { Header } from '../../components/header/header';
import { MainBanner } from '../../components/request-a-demo/main-banner';
import { Footer } from '../../components/footer/footer';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
export default function RequestADemo({data}:{data:any}) {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        dispatch(SETREQUESTDEMO(data))
            setLoader(false)
    }, [data])
    
    return (
        <>
            {!loader ? <Stack>
                <Head>

                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                </Head>
                <Stack as='div' className='request-a-demo'>
                    <Header />
                    <MainBanner />
                    <Footer />
                </Stack>
            </Stack> :<Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getRequestADemo('request_a_demo_page', 'bltd422610fe7d09a2e', context.query.lang)
    return {
        props: {
            data,
        },
    };
}