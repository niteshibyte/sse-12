import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { TopBannerSection } from '../../../components/adjust/top-baneer-section';
import { ChooseApps } from '../../../components/adjust/choose-apps';
import { Stack } from '@wonderflow/react-components';
import { AdjustFooter } from '../../../components/adjust/adjust-footer';
import { LatestIndustries } from '../../../components/adjust/industries';
import { AdjustPartnersLogos } from '../../../components/adjust/partnerlogos';
import { AdjustMedia } from '../../../components/adjust/adjust-media-slider';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { SETMARKETING } from '../../../reducer/marketing';
import Loader from '../../../components/loader/Loader';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdjustPage({ data }: { data: any }) {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data[0].length > 0) {
            dispatch(SETMARKETING(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')
        }
    }, [data])


    return (
        <>
            <Head>

                <title>{data[0][0]?.seo_tags?.meta_title}</title>
                <meta name="description" content={data[0][0]?.seo_tags?.meta_description} />
                <meta name="keywords" content={data[0][0]?.seo_tags?.keywords} />
                <meta property="og:title" content={data[0][0]?.seo_tags?.meta_title} />
                <meta property="og:site_name" content='Wonderflow'></meta>
                <meta property="og:description" content={data[0][0]?.seo_tags?.meta_description} />
                <meta property="og:image" content={data[0][0]?.seo_tags?.image_link?.href} />
            </Head>
            {!loader ? <Stack as="div" rowGap={96}>
                <TopBannerSection />
                <ChooseApps />
                <Stack as="div">
                    <LatestIndustries />
                    <AdjustPartnersLogos />
                </Stack>
                <AdjustMedia />

                <AdjustFooter />
            </Stack> : <Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.adjustData('marketing_single_page', `/${context.query.title}`, `${context.query.lang}`)
    return {
        props: {
            data,
        },
    };
}