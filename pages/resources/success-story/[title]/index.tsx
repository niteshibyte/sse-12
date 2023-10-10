import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import { RecentSuccessStory } from '../../../../components/resources/success-story-view/recent-success-story';
import SuccessStoryBanner from '../../../../components/resources/success-story-view/success-story-banner';
import SuccessStoryContent from '../../../../components/resources/success-story-view/success-story-content';
import { CounterView } from '../../../../components/resources/success-story-view/counter-view';
import { BlogResources } from '../../../../components/resources/blog-resources';
import StackWrapper from '../../../../helper/api'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { SETSUCCESSSTORYSINGLE } from '../../../../reducer/successStorySingle';
import Loader from '../../../../components/loader/Loader';
import stackWrapper from '../../../../helper/api'
type config = {
    rowGap: "64" | "128";
}

export default function SuccessStory({ data, recentData }: { data: any, recentData: any }) {

    const [loader, setLoader] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data?.length > 0 && data[0]?.length > 0) {

            dispatch(SETSUCCESSSTORYSINGLE(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')
        }
    }, [router?.query, data])

    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128" },
        lg: { rowGap: "128" },
        xl: { rowGap: "128" },
        fallback: { rowGap: "64" },
    })

    return (
        <>
            {!loader ? <>
                <Stack direction='column' rowGap={128} className='white--theme success-story-page'>
                    <Header />
                    {/* <BreadCrumb
                        folderName="Resources"
                        fileText={data?.title}
                    /> */}
                    <SuccessStoryBanner />
                    <CounterView />
                    <SuccessStoryContent />
                    <RecentSuccessStory recentStory={recentData} />
                    <BlogResources show={4} classCss={true} section={true} />
                    <Footer />
                </Stack>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getSuccessSingle('success_stories_entry', context.query.title, `${context.query.lang}`)
    const recentData = await stackWrapper.getSuccessRecent(
        "success_stories_entry",
        context.query.title, `${context.query.lang}`
    );

    return {
        props: {
            data,
            recentData
        },

    };
}