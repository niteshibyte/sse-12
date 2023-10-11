import React from 'react'
import { Container, Stack, Text } from "@wonderflow/react-components";
import Link from 'next/link';
import { changeUrl } from '../../helper/ChangeLanguage';
import { useRouter } from 'next/router';
export default function ThankYou() {
    const router=useRouter()
    return (
        <>
            <>
                <Container dimension="extra-large">
                    <Container dimension="full" padding={false}>
                        <Stack as="div" hPadding={24}>
                            <Stack as="div" className="">
                                <Stack className="mediaGap" direction="row" vAlign="center" wrap rowGap={32} columnGap={32} vPadding={64} data-aos="zoom-in" data-aos-duration="1000">
                                    <Stack direction="row" fill wrap as="div" className="media__item">
                                        <img src="/thank-you.png" alt="Media Image" />
                                    </Stack>
                                    <Stack className="media--body">
                                        <Text as="h2" variant='heading-2'>Thank you for getting in touch</Text>
                                        <Text variant='subtitle-1' className='fs-22 mt-2'>We'll get back to you within 24 hours.</Text>
                                        <Text variant="body-2" className='fs-18 emText mt-8'>If you don't see any mail from us, please check also your spam folder.</Text>
                                        <Text variant="body-2" className='fs-18 mt-4 text--dark'>Learn how the top brands use consumer feedback to become more consumer centric.</Text>
                                        <Stack direction="column" hAlign="start" vAlign="center" vPadding={16} className='mt-4'>
                                            <Link className="" href={changeUrl(router.query.lang,'/blog')}><a className="primaryBtn">Read our blog</a></Link>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>
        </>
    )
}
