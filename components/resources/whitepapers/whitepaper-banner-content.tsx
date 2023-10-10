'use client';
import { Container, useBreakpointsConfig } from '@wonderflow/react-components';
import { SectionHead } from '../../../components/section-head/section-head';
import { Stack } from "@wonderflow/react-components";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function WhitePaperBannerContent() {
    const [banner, setBanner] = useState<any>({})
    const whitePaperData = useSelector((state: any) => state?.whitePaper);
    useEffect(() => {
        setBanner(whitePaperData)
    }, [whitePaperData])
    return (
        <>

            <>
                <Stack as='div' direction='column' className="section--with--circle product-top-section overflow-hidden no-radius">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Container dimension="extra-large">
                        <Stack as="div" hPadding={24} vPadding={128}>
                            <SectionHead
                                largeTitleForm={banner?.title}
                                subTitleForm={banner?.description}
                            />
                        </Stack>
                    </Container>
                </Stack>
            </ >
        </>
    )
}
