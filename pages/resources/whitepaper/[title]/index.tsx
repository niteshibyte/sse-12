import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import { Container,  Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import CustomerCentricity from '../../../../components/resources/whitepaper-view/customer-centricity';
import { BlogResources } from '../../../../components/resources/blog-resources';
import { RecentWhitePaper } from '../../../../components/resources/whitepapers/recent-whitepaper';

import stackWrapper from '../../../../helper/api'
import Head from 'next/head';
type config = {
    rowGap: "64" | "128";
}

export default function WhitepaperView({data,recentData}:{data:any,recentData:any}) {
  

    const {matches, value} = useBreakpointsConfig<config>({
        md: {rowGap: "128"},
        lg: {rowGap: "128"},
        xl: {rowGap: "128"},
        fallback: {rowGap: "64"},
    })  

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
                <Container dimension='full' padding={false} className='white--theme bg--grey white--paper--page'>
                    <Header />
                    <CustomerCentricity whitepaperData={data} />
                    <Stack as="div" direction='column' rowGap={value.rowGap}>
                        <RecentWhitePaper recentData={recentData} />
                        <BlogResources show={4} section={true} />
                        <Footer />
                    </Stack>
                </Container>
            </>
       
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSingleWhitePaper('whitepaper_entries', context.query.title, `${context.query.lang}`)
    const recentData = await stackWrapper.getNotInWhitePaper(
        "whitepaper_entries",
        context.query.title, `${context.query.lang}`
    );
  
    return {
        props: {
            data,
            recentData
        },

    };
}
