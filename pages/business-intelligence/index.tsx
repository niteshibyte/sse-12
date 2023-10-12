
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';

import { Container, Spinner, Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { useEffect, useState } from 'react';
import stackWrapper from '../../helper/api'
import { useDispatch } from 'react-redux';
import { SETBIPAGE } from '../../reducer/bipage';
import { Header } from '../../components/header/header';
import { BusinessBanner } from '../../components/business-intelligence/business-banner';
import { Reports } from '../../components/business-intelligence/reports';
import { BlogResources } from '../../components/resources/blog-resources';
import { Footer } from '../../components/footer/footer';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function BusinessINtelligence({data}:{data:any}) {
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        dispatch(SETBIPAGE(data))
        setLoader(false)

    }, [data])
    

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    })

    return (
        <>
            {!loader ? <Stack as="div" direction='column' rowGap={value.rowGap} className='bi--page'>
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
                <BusinessBanner />
                <Reports />
                <BlogResources show={4} section="true" />
                <Footer />
            </Stack> : <Loader height='100vh' width='100vw' />}
        </>
    );
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getBIPageData('bi_general_page', 'blt9a9196bfd5a020a8', `${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}
