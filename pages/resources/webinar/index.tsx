
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack } from '@wonderflow/react-components';
import { Header } from '../../../components/header/header';
import { WebinarSinglePage } from '../../../components/resources/webinars/webinar-single-page'
import { Footer } from '../../../components/footer/footer';
import WebinarBannerContent from '../../../components/resources/webinars/webinar-banner-content';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StackWrapper from '../../../helper/api'
import { SETWEBINARDATA } from '../../../reducer/webinar';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';
export default function page({ data }: { data: any }) {

    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        dispatch(SETWEBINARDATA(data))
        setLoader(false)

    }, [data])


    return (
        <>
            <Head>

                <title>{data?.seo_tags?.meta_title}</title>
                <meta name="description" content={data?.seo_tags?.meta_description} />
                <meta name="keywords" content={data?.seo_tags?.keywords} />
                <meta property="og:title" content={data?.seo_tags?.meta_title} />
                <meta property="og:site_name" content='Wonderflow'></meta>
                <meta property="og:description" content={data?.seo_tags?.meta_description} />
                <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
            </Head>

            {!loader ? <>

                <Stack className='dark--theme resouces--content--page site--banner--image webinar-page'>
                    <Header />
                    <WebinarBannerContent />
                </Stack>
                <WebinarSinglePage />
                <Footer />
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await StackWrapper.gewWebinareData("webinar_page", "blt9334a60c040a264d", `${context.query.lang}`)
    return {
        props: {
            data,
        },
    };
}
