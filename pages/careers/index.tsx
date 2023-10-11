import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CareerTopSection } from '../../components/careers/career-top-section';
import { CareerResult } from '../../components/careers/career-result';
import { CareerBenefits } from '../../components/careers/career-benefits';
import { DiscoverWonderflow } from '../../components/careers/discover-wonderflow';
import { TeamSlider } from '../../components/careers/team-slider';
import { UnlockPotential } from '../../components/careers/unlock-potential';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'
import { SETCAREERS } from '../../reducer/career';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

type config = {
    rowGap: "64" | "96" | "128",
}

export default function Careers({ data }: { data: any }) {
    const [loader, setLoader] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        dispatch(SETCAREERS(data))
        setLoader(false)
    }, [data])


    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "96" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

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
                <Stack as='div' className='white--theme bg--grey career-page'>
                    <Header />
                    <CareerTopSection />
                    <Stack as='div' rowGap={value.rowGap}>
                        <CareerResult />
                        <UnlockPotential />
                        <CareerBenefits />
                        <TeamSlider />
                        <DiscoverWonderflow />
                        <Footer />
                    </Stack>
                </Stack>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getCareer('career_page', 'bltf169b70be5ed3027', context.query.lang)
    return {
        props: {
            data,
        },
    };
}