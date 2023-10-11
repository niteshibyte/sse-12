import { useEffect, useState } from 'react';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import { TopBanner } from '../../../../components/resources/analyst-report/top-banner';
import { ReportInfo } from '../../../../components/resources/analyst-report/report-info';
import { OtherAnalystReport } from '../../../../components/resources/analyst-report/other-analyst-report';
import { BlogResources } from '../../../../components/resources/blog-resources';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import stackWrapper from '../../../../helper/api'
import { SETANALYSTSINGLE } from '../../../../reducer/analystsingle';
import Head from 'next/head';
import Loader from '../../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function AnalystReport({data}:{data:any}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true)
    const [analyst,setAnalyst]=useState<any>({})
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length > 0 && data[0]?.length > 0) {
            dispatch(SETANALYSTSINGLE(data[0][0]))
            setAnalyst(data[0][0])

            setLoader(false)
        } else {
            router.push('/404')
        }
    }, [router])
    

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    })

    return (
        <>
            <>

                {!loader ? <Stack as="div" direction='column' rowGap={value.rowGap} className='analyst-report-page'>
                <Head>
                    <title>{analyst?.seo_tags?.meta_title}</title>
                    <meta name="description" content={analyst?.seo_tags?.meta_description} />
                    <meta name="keywords" content={analyst?.seo_tags?.keywords} />
                    <meta property="og:title" content={analyst?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={analyst?.seo_tags?.meta_description} />
                    <meta property="og:image" content={analyst?.seo_tags?.image_link?.href} />
                </Head>
                    <Header />
                    <TopBanner />
                    <ReportInfo />
                    <OtherAnalystReport />
                    <BlogResources show={4} classCss={"mt-128"} section={true} />
                    <Footer />
                </Stack> : <Loader height='100vh' width='100vw' />}
            </>
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSingleAnalyst('analyst_report_entries', context.query.title,`${context.query.lang}`)
    return {
        props: {
            data,
        },

    };
}