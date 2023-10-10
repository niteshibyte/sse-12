import { Container, Stack, Text, List } from "@wonderflow/react-components";
import dateFormat from "dateformat";
import { Profile } from "../../../components/user-profile/profile";
import { useEffect, useState } from "react";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import {  useRouter } from "next/router";
import Head from "next/head";
import Loader from "../../loader/Loader";
export const WebinarSingleViewBanner = ({webinar}:{webinar:any}) => {
    const router=useRouter()
    const [data,setData]=useState<any>({})
       useEffect(() => {
    if (webinar?.length > 0 && webinar[0]?.length > 0) {
        setData(webinar[0][0])

    } else {
        router.push('/404')
    }
}, [webinar,router])
    return (
        <>
            {Object.keys(data)?.length>0 ? <>
                <Head>
                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                </Head>
                <Container dimension="full" padding={false} className="section--with--circle product-top-section overflow-hidden no-radius">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle-2.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Container dimension="extra-large">
                        <Stack as="div" className="banner--blog--data tab--content--block" direction="row" vAlign="Start" wrap rowGap={64} columnGap={64} hPadding={24} vPadding={128}>
                            <Stack className="banner--block">
                                <Stack as="div" direction="column" rowGap={32} className="banner--left--block">
                                    <Stack as="div" className="video--block">
                                        <iframe width="100%" height="378" src={data?.upload_video_link?.href?.replace('/watch?v=', '/embed/')} title="Decision Intelligence Video: How It Will Boost Your Business"></iframe>
                                    </Stack>
                                    <Stack as="div" className="speaker--block mt-16 desktop-view" rowGap={16}>
                                        <Stack as="div" rowGap={32}>
                                            <Text as="h3" variant="heading-3" className="mb-8">Speakers</Text>
                                            {data?.speakers?.speaker?.map((item: any) => {
                                                return (
                                                    <Profile
                                                        clientProfile={item?.profile_avatar?.url}
                                                        userName={item?.speaker_name}
                                                        designation={item?.designation}
                                                    />
                                                )
                                            })}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack className="banner--block">
                                <Stack as="div" direction="column" rowGap={32} className="banner-right-block">
                                    <Text as="h1" variant="display-4" className="fs-56">{data?.title} </Text>
                                    <Text as="p" variant="tagline-2"><div dangerouslySetInnerHTML={htmlToTextConvert(data?.description)} /></Text>
                                    {data?.keypoints?.key_points_title && <Text as="h4" variant="heading-3" className="mt-8">{data?.keypoints?.key_points_title}</Text>}
                                    <List className="checkList mt-8">
                                        {data?.keypoints?.points?.length > 0 && data?.keypoints?.points?.map((item: any) => {
                                            return <List.Li>{item?.key_points}</List.Li>
                                        })}


                                    </List>
                                    <Stack as="div" className="calenderData mt-8" vPadding={16} hPadding={24}>
                                        <Stack className="banner--blog--data tab--content--block" rowGap={32} columnGap={32} vAlign="start" direction="row">
                                            <Stack className="calender--icon" rowGap={8}>
                                                <Stack as="div" direction="row" columnGap={16} vAlign="center">
                                                    <img src="/calendar-solid.svg" alt="Calender Icon" />
                                                    <Text as="p">Date</Text>
                                                </Stack>

                                                <Text as="p" className="text--white mt-2" variant="subtitle-1">{dateFormat(data?.date, " mmmm dd, yyyy")}</Text>
                                            </Stack>
                                            <Stack className="calender--icon" rowGap={8}>
                                                <Stack as="div" direction="row" columnGap={16} vAlign="center">
                                                    <img src="/magnifiers.svg" alt="Calender Icon" />
                                                    <Text as="p">Keywords</Text>
                                                </Stack>
                                                <Text as="p" className="text--white mt-2" variant="subtitle-1">{data?.keywords[0]}</Text>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}