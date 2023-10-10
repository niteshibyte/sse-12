import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import { Container,  Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import CustomerCentricity from '../../../../components/resources/whitepaper-view/customer-centricity';
import { BlogResources } from '../../../../components/resources/blog-resources';
import { RecentWhitePaper } from '../../../../components/resources/whitepapers/recent-whitepaper';
import { useEffect } from 'react';
import stackWrapper from '../../../../helper/api'
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
