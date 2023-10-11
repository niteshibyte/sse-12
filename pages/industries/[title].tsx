import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { TopSection } from '../../components/industries-page/top-section';
import { SuccessProducts } from '../../components/industries-page/sucess-products';
import { IndustryTeams } from '../../components/industries-page/section-teams';
import { IndustryBenefits } from '../../components/industries-page/industry-benefits';
import { VocIntelligence } from '../../components/industries-page/voc-intelligence';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { SETINDUSTRYPAGEDATA } from '../../reducer/industry-page';
import { IndustryPartnerLogo } from '../../components/industries-page/partner-logos';
import { TestimonialSlider } from '../../components/industries-page/testimonial-slider';
import StackWrapper from '../../helper/api'
import { useRouter } from 'next/router';
import { IndustryCounterView } from '../../components/industries-page/industry-counter';
import { IndustryResource } from '../../components/industries-page/resources/industry-resources';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

type config = {
    rowGap: "64" | "128",
}

export default function IndustriesPage({data}:{data:any}) {
    const router = useRouter();
    const pageTitle = router?.query?.title;
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length > 0 && data[0]?.length > 0) {
            dispatch(SETINDUSTRYPAGEDATA(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')
            setLoader(false)
        }

    }, [router])
    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

    return (
        <>
            {!loader ? <>
                <Stack direction='column' rowGap={value.rowGap} className={'white--theme bg--grey industry-page page--' + pageTitle}>
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
                    <TopSection />
                    <IndustryPartnerLogo />
                    <IndustryBenefits />
                    <SuccessProducts />
                    <IndustryCounterView />
                    <IndustryTeams />
                    <TestimonialSlider />
                    <VocIntelligence />
                    <IndustryResource />

                    <Footer />
                </Stack>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    );
}

export const getServerSideProps = async (context: any) => {
    const data = await StackWrapper.getIndustoryData('industry_page', context.query.title,`${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}