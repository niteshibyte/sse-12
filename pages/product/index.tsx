import { useEffect, useState } from 'react';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import containtStact from '../../helper/api';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/header/header';
import { ProductTopSection } from '../../components/products/top-section';
import { ProductResults } from '../../components/products/product-results/product-results';
import { ProductsPartnerLogo } from '../../components/products/products-partner-logos';
import { ProductCustomerInsights } from '../../components/products/product-customer-insights';
import { ProductBenefits } from '../../components/products/product-benefits-section';
import { ProductCustomerInsights1 } from '../../components/products/product-customer-insights1';
import { ProductTestimonialSlider } from '../../components/products/testimonial-slider';
import { ProductFAQ } from '../../components/products/faq-section';
import { ProductBookDemo } from '../../components/products/book-demo';
import { Footer } from '../../components/footer/footer';
import { setProductPageData} from '../../reducer/blog';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

type config = {
    rowGap: "64" | "128",
}

export default function Products({ data }: { data: any }) {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        dispatch(setProductPageData(data));
        setLoader(false)
    }, [data])



    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

    return (
        <>
            {!loader ? <Stack as="div"><Stack direction='column' rowGap={value.rowGap} className='products-page'>
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
                <ProductTopSection />
                <ProductResults />
                <ProductsPartnerLogo />
                <ProductCustomerInsights />
                <ProductBenefits />
                <ProductCustomerInsights1 />

                <ProductTestimonialSlider />
                <ProductFAQ />
                <ProductsPartnerLogo />
                <ProductBookDemo />
            </Stack>
                <Footer />
            </Stack> : <Loader height='100vh' width='100vw' />}
        </>
    );


}

export const getServerSideProps = async (context: any) => {
    const data = await containtStact.getProductData("product_page", "bltc32d48c2f26df4d3", context.query.lang)
    return {
        props: {
            data,
        },
    };
}