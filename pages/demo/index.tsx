'use client';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import {  Spinner, Stack } from '@wonderflow/react-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'
import { useSelector } from 'react-redux';
import { SETREQUESTDEMO } from '../../reducer/request';
import { Header } from '../../components/header/header';
import { MainBanner } from '../../components/request-a-demo/main-banner';
import { Footer } from '../../components/footer/footer';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
export default function RequestADemo() {
    const [loader, setLoader] = useState(true)
    const { request }: any = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        if (Object.keys(request).length == 0) {
            getRequest()

        } else {
            setLoader(false)
        }
    }, [request])
    const getRequest = async () => {
        try {
            const data = await stackWrapper.getRequestADemo('request_a_demo_page', 'bltd422610fe7d09a2e')

            dispatch(SETREQUESTDEMO(data))
            setLoader(false)

        } catch (error) {
            setLoader(false)

        }

    }
    return (
        <>
            {!loader ? <Stack>
                <Head>

                    <title>{request?.seo_tags?.meta_title}</title>
                    <meta name="description" content={request?.seo_tags?.meta_description} />
                    <meta name="keywords" content={request?.seo_tags?.keywords} />
                    <meta property="og:title" content={request?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={request?.seo_tags?.meta_description} />
                    <meta property="og:image" content={request?.seo_tags?.image_link?.href} />
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