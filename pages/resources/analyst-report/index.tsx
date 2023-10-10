
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Container, Spinner } from '@wonderflow/react-components';
import { Footer } from '../../../components/footer/footer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Stack from '../../../helper/api'
import AnalystBannerContent from '../../../components/resources/analyst/analyst-banner-content';
import { SETANALYSTPAGE } from '../../../reducer/analyst';
import { Header } from '../../../components/header/header';
import { AnalystSinglePage } from '../../../components/resources/analyst/analyst-single-page';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';
export default function page() {

    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch();
    const [data, setData] = useState<any>()

    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        getAnalyst()

    }, [])
    const getAnalyst = async () => {
        try {
            const data = await Stack.gewAnalystData("analyst_report_page", "blt4d17ce3372045bbb")
            setData(data)
            dispatch(SETANALYSTPAGE(data))
            setLoader(false)
        } catch (error) {
            setLoader(false)

        }
    }

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
                <Container as="div" dimension='full' padding={false} className='analyst-report-single'>
                    <Container className='dark--theme resouces--content--page site--banner--image' padding={false}>
                        <Header />

                        <AnalystBannerContent />
                    </Container>
                    <AnalystSinglePage />
                    <Footer />
                </Container>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}
