'use client';

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

export default function ProductComparison() {
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const [data,setData]=useState<any>()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (router?.query?.title) {
            getVocReport(`${router?.query?.title}`)
        }


    }, [router?.query?.title])
    const getVocReport = async (title: string) => {
        try {
            const data: any = await stackWrapper.getSingleReport("voc_report_entries", title)
            if (data?.length > 0 && data[0]?.length > 0) {
                dispatch(SETSINGLEREPORT(data[0][0]))
                setData(data[0][0])
                setLoader(false)
            } else {
                router.push('/404')
            }

        } catch (error) {
            router.push('/404')

        }
    }

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
                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
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