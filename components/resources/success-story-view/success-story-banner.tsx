'use client';
import { Container, Stack } from "@wonderflow/react-components";
import { MediaTitle } from '../../../components/media-section/media-title';
import { useSelector } from 'react-redux';
import Head from 'next/head';

export default function SuccessStoryBanner() {
    const {successsingle}=useSelector((state:any)=>state)
    return (
        <>
            {successsingle&&<>
                <Head>
                    <title>{successsingle?.seo_tags?.meta_title}</title>
                    <meta name="description" content={successsingle?.seo_tags?.meta_description} />
                    <meta name="keywords" content={successsingle?.seo_tags?.keywords} />
                    <meta property="og:title" content={successsingle?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={successsingle?.seo_tags?.meta_description} />
                    <meta property="og:image" content={successsingle?.seo_tags?.image_link?.href} />
                </Head>
                <Container dimension="extra-large">
                        <Stack hPadding={24} vPadding={128} direction='row' wrap columnGap={64} rowGap={32} vAlign='center' className='media--row'>
                            <Stack as="div" className='media--content'>
                                <MediaTitle
                                    mediaSmallTitle={successsingle?.category
                                        ?.length > 0 && successsingle?.category
                                        [0]?.title}
                                    mediaMainTitle={successsingle?.title}
                                    mediaParaTitle={successsingle?.short_description}
                                />
                            </Stack>
                            <Stack as="div" className='media--image'>
                                <img src={successsingle?.hero_image?.url} alt="Success Story Image" />
                            </Stack>
                        </Stack>
                </Container>
            </>}
        </>
    )
}