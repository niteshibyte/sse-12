'use client';

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';

import {  Stack, useBreakpointsConfig } from '@wonderflow/react-components';

import { useEffect, useState } from 'react';
import { Header } from '../../../components/header/header';
import { BiTopSection } from '../../../components/business-intelligence/top-section';
import { BiResult } from '../../../components/business-intelligence/bi-results';
import { BiBookDemo } from '../../../components/business-intelligence/book-demo';
import { BiProductComparisonList } from '../../../components/business-intelligence/prod-comp';
import { BlogResources } from '../../../components/resources/blog-resources';
import { Footer } from '../../../components/footer/footer';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { SETSINGLEPRODUCT } from '../../../reducer/singleproduct';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function ProductComparison() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const [data, setData] = useState<any>()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

    }, [])

    useEffect(() => {
        setLoading(true)
        if (router?.query?.title) {
            GetProduct(`${router?.query?.title}`)
        }
    }, [router?.query?.title])

    const GetProduct = async (url: string) => {
        try {
            const data: any = await stackWrapper.getSingleProductComperisions('product_comparison_entries', url)
            if (data?.length && data[0]?.length > 0) {
                dispatch(SETSINGLEPRODUCT(data[0][0]))
                setData(data[0][0])
                setLoading(false)
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
            {loading ? <Loader height='100vh' width='100vw' /> : <><Stack as="div" className="bi--page white--theme">
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
                <BiTopSection />
            </Stack>
                <Stack as="div" rowGap={value.rowGap}>
                    <BiResult />
                    <BiBookDemo />
                    <BiProductComparisonList />
                    <Stack as="div" className='mt-128'>
                        <BlogResources show={4} section="true" />
                    </Stack>
                    <Footer />
                </Stack></>}
        </>
    );
}