'use client';
import { Container, List,  Stack } from "@wonderflow/react-components";
import { MediaTitle } from '../../../components/media-section/media-title';
import { PopupButton } from './popup-button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loader from "../../loader/Loader";
export default function CustomerCentricity({whitepaperData}:{whitepaperData:any}) {
    const router = useRouter()
    const [data, setData] = useState<any>()
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        setLoader(true)
        if (whitepaperData?.length > 0 && whitepaperData[0]?.length > 0) {

            setData(whitepaperData[0][0])

            setLoader(false)
        } else {
            router.push('/404')
        }
    }, [whitepaperData,router])



    


    return (
        <>
            {!loader ? <>
                <Head>
                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
                </Head>
                <Container dimension="extra-large" className="mt-128">
                    <Stack as="div" vPadding={128}>
                        <Stack hPadding={24} direction='row' wrap columnGap={32} rowGap={32} vAlign='center' className='media--row'>
                            <Stack direction='column' rowGap={32} as="div" className='media--content'>
                                <MediaTitle
                                    mediaMainTitle={data?.title}
                                    mediaParaTitle={data?.description}
                                />
                                {data?.key_points && <List className='circleCheckList'>
                                    <h1>{data?.key_points?.keypoint_title}</h1>
                                    {data?.key_points?.points?.length > 0 && data?.key_points?.points?.map((item: any) => {
                                        return <List.Li>{item?.title}</List.Li>
                                    })}


                                </List>}
                                <Stack as="div" direction='row' className='popupButton'>
                                    <PopupButton
                                        popupButton={data?.download_url?.title}
                                        image={data?.featured_image?.url}
                                        utm={data?.utm}
                                    />
                                </Stack>
                            </Stack>
                            <Stack as="div" className='media--image'>
                                <img src={data?.featured_image?.url} alt="Block Image" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </> :<Loader  height='100vh' width='100vw' />}
        </>
    )
}