import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../../../components/header/header';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Footer } from '../../../../components/footer/footer';
import { WebinarSingleViewBanner } from '../../../../components/resources/webinars/webinar-single-view-banner';
import { BlogResources } from '../../../../components/resources/blog-resources';
import stackWrapper from '../../../../helper/api'
import { RecentWebinar } from "../../../../components/resources/webinars/recent-webinar";
type config = {
    vPadding: "64" | "128",
}
export default function WebinarView({ data, recentData }: { data: any, recentData: any }) {
    const { matches, value } = useBreakpointsConfig<config>({
        md: { vPadding: "128" },
        lg: { vPadding: "128" },
        xl: { vPadding: "128" },
        fallback: { vPadding: "64" },
    });

    return (
        <>
            <Stack className='dark--theme webinar--single--content--page'>
                <Header />
                <WebinarSingleViewBanner webinar={data} />
            </Stack>
            <Stack direction='column' rowGap={value.vPadding} vPadding={value.vPadding} className='webinar--single--content--page'>
                <RecentWebinar recentData={recentData} />
                <BlogResources show={4} section={true} />
            </Stack>
            <Footer />
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSingleWebinar('webinar_entry', context.query.title, `${context.query.lang}`)
    const recentData = await stackWrapper.getNotINWebinar(
        "webinar_entry",
        context.query.title, `${context.query.lang}`
    );
    return {
        props: {
            data,
            recentData
        },

    };
}
