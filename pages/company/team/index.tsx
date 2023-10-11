
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';
import { TeamTopSection } from '../../../components/team/team-top-section';
import { OurLeadership } from '../../../components/team/our-leadership';
import { OurBoardMember } from '../../../components/team/our-board-member';
import { useEffect, useState } from 'react';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { SETTEAM } from '../../../reducer/team';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

type config = {
    rowGap: "64" | "128";
}

export default function Team({ data }: { data: any }) {
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        dispatch(SETTEAM(data))
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
            {loader ? <Loader height='100vh' width='100vw' /> :
                <>
                    <Head>

                        <title>{data?.seo_tags?.meta_title}</title>
                        <meta name="description" content={data?.seo_tags?.meta_description} />
                        <meta name="keywords" content={data?.seo_tags?.keywords} />
                        <meta property="og:title" content={data?.seo_tags?.meta_title} />
                        <meta property="og:site_name" content='Wonderflow'></meta>
                        <meta property="og:description" content={data?.seo_tags?.meta_description} />
                        <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                    </Head>
                    <Stack as="div" className='white--theme team-page'>
                        <Header />
                        <TeamTopSection />
                        <Stack as="div" direction='column' rowGap={value.rowGap} className='white--theme team-page'>
                            <OurBoardMember />
                            <OurLeadership />
                            <Footer />
                        </Stack>
                    </Stack>
                </>

            }
        </ >

    )
}
export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getTeam('team_page', 'blt5164d5f7594ac24b', context.query.lang)
    return {
        props: {
            data,
        },

    };
}