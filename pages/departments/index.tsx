
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import {  Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { DepartmentTopSection } from '../../components/departments/department-top-section';
import { DepartmentPartnerLogo } from '../../components/departments/department-partner-logos';
import { DepartmentBenefits } from '../../components/departments/departments-benefits';
import { DepartmentCustomerFocus } from '../../components/departments/customer-focus';
import { BusinessInsights } from '../../components/departments/usiness-insights';
import containtStact from '../../helper/api';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setDepartmentData } from '../../reducer/blog';
import { useRouter } from 'next/router';
import { CommonBlogSection } from '../../components/common-blog-section/common-blog-section';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

type config = {
    rowGap: "64" | "128",
}

export default function Departments({data}:{data:any}) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const router = useRouter()
   
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length > 0 && data[0]?.length > 0) {
            dispatch(setDepartmentData(data[0][0]));
            setLoading(false);
        } else {
            router.push('/404')
        }


    }, [router]);


   

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    });

    return (
        <>
            {loading ? <Loader height='100vh' width='100vw' /> :
                <Stack as="div" direction='column' rowGap={value.rowGap} className='white--theme bg--grey industry-page'>
                    <Head>

                        <title>{data[0][0]?.seo_tags?.meta_title}</title>
                        <meta name="description" content={data[0][0]?.seo_tags?.meta_description} />
                        <meta name="keywords" content={data[0][0]?.seo_tags?.keywords} />
                        <meta property="og:title" content={data[0][0]?.seo_tags?.meta_title} />
                        <meta property="og:site_name" content='Wonderflow'></meta>
                        <meta property="og:description" content={data[0][0]?.seo_tags?.meta_description} />
                        <meta property="og:image" content={data[0][0]?.seo_tags?.image_link?.href} />
                    </Head>
                    <Header />
                    <DepartmentTopSection />
                    <DepartmentPartnerLogo />
                    <DepartmentBenefits />
                    <DepartmentCustomerFocus />
                    {/* <DepartmentFeedback /> */}
                    <BusinessInsights />
                    <CommonBlogSection
                        underneethSmallTitle="RESOURCES"
                        title="Hear from brands revolutionizing customer experiences with Wonderflow"
                    />
                    <Footer />
                </Stack>}
        </>
    );
}


export const getServerSideProps = async (context: any) => {
    const data = await containtStact.getDepartmentData("department_page1", '/departments/digital',`${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}