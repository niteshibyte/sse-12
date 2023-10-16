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

export default function ProductComparison({data}:{data:any}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const router = useRouter()
   
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length && data[0]?.length > 0) {
            dispatch(SETSINGLEPRODUCT(data[0][0]))
            setLoading(false)
        } else {
            router.push('/404')
        }

    }, [data])

   

  

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
                    <title>{data[0][0]?.seo_tags?.meta_title}</title>
                    <meta data-react-helmet="true" name="description" content={data[0][0]?.seo_tags?.meta_description} />
                    <meta data-react-helmet="true" name="keywords" content={data[0][0]?.seo_tags?.keywords} />
                    <meta data-react-helmet="true" property="og:title" content={data[0][0]?.seo_tags?.meta_title} />
                    <meta data-react-helmet="true" property="og:site_name" content='Wonderflow'></meta>
                    <meta data-react-helmet="true" property="og:description" content={data[0][0]?.seo_tags?.meta_description} />
                    <meta data-react-helmet="true" property="og:image" content={data[0][0]?.seo_tags?.image_link?.href} />
                    <script>
                        {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PQ3W82L')
              `}

                    </script>
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
export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSingleProductComperisions('product_comparison_entries', context.query.title, `${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}