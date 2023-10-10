import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Container } from '@wonderflow/react-components';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Stack from '../../../helper/api'
import { SETWHITEPAPERDATA } from '../../../reducer/whitePaper';
import WhitePaperBannerContent from '../../../components/resources/whitepapers/whitepaper-banner-content';
import { WhitePaperSinglePage } from '../../../components/resources/whitepapers/whitepaper-single-page';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

export default function page() {

    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch();
    const [data, setData] = useState<any>()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        getWebinar()

    }, [])
    const getWebinar = async () => {
        try {
            const data = await Stack.getWhitePaperData("whitepaper_page", "blt6f4c61851c90a696")
            setData(data)
            dispatch(SETWHITEPAPERDATA(data))
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
                <Container className='dark--theme resouces--content--page site--banner--image white-paper-page' padding={false}>
                    <Header />
                    <WhitePaperBannerContent />
                </Container>
                <WhitePaperSinglePage />
                <Footer />
            </> :<Loader height='100vh' width='100vw' />}
        </>
    )
}
