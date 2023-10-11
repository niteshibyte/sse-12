
import { useEffect, useState } from 'react';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../../helper/api'
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';
import { useRouter } from 'next/router';
import { SETTOUCHPOINT } from '../../../reducer/touch-point';
import { TouchPointTopSection } from '../../../components/touchpoint-view/touchpoint-top-section';
import { BirdEyeView } from '../../../components/touchpoint-view/bird-eye-view';
import { CounterView } from '../../../components/touchpoint-view/counter-view';
import { ValueDeliver } from '../../../components/touchpoint-view/value-deliver';
import { CustomerElectronics } from '../../../components/touchpoint-view/consumer-electronics';
import { TouchPointFAQ } from '../../../components/touchpoint-view/touchpoint-faq';
import { ProductsPartnerLogo } from '../../../components/products/products-partner-logos';
import { BlogResources } from '../../../components/resources/blog-resources';
import { BookDemo } from '../../../components/touchpoint-view/book-demo';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128",
}

export default function TouchPoint({ data }: { data: any }) {
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false);
    const router = useRouter()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        setLoader(true)
        if (data?.length > 0 && data[0]?.length > 0) {
            dispatch(SETTOUCHPOINT(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')
            setLoader(false)
        }



    }, [data, router]);
    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

    return (
        <>
            {
                !loader ? <>
                    <Head>

                        <title>{data?.seo_tags?.meta_title}</title>
                        <meta name="description" content={data?.seo_tags?.meta_description} />
                        <meta name="keywords" content={data?.seo_tags?.keywords} />
                        <meta property="og:title" content={data?.seo_tags?.meta_title} />
                        <meta property="og:site_name" content='Wonderflow'></meta>
                        <meta property="og:description" content={data?.seo_tags?.meta_description} />
                        <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                    </Head>
                    <Stack direction='column' rowGap={value.rowGap} className='white--theme bg--grey touchpoint-page'>
                        <Header />
                        <TouchPointTopSection />
                        <BirdEyeView />
                        <CounterView />
                        <ValueDeliver />

                        <CustomerElectronics />

                        <TouchPointFAQ />
                        <ProductsPartnerLogo />
                        <BookDemo />
                        <BlogResources show={4} classCss={"mt-128"} section={true} />
                        <Footer />
                    </Stack>
                </> : <Loader height='100vh' width='100vw' />
            }</>
    )


}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getTouchPointEntry('touchpoint', `/product/${context?.query?.title}`, context.query.lang)
    return {
        props: {
            data,
        },

    };
}





