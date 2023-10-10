'use client';
import { Container } from '@wonderflow/react-components';
import { SectionHead } from '../../../components/section-head/section-head';
import { Stack } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';
export default function WebinarBannerContent() {
    const { webinar } = useSelector((state: any) => state?.webinar);
    return (
        <>
            {webinar &&
                <>
                    <Stack as="div" direction='column' className="section--with--circle product-top-section overflow-hidden no-radius">
                        <Stack className="circle--highlight circle-left-top">
                            <img src="/red-circle.png" alt="Red Circle" />
                        </Stack>
                        <Stack className="circle--highlight circle-right-bottom">
                            <img src="/red-circle.png" alt="Red Circle" />
                        </Stack>
                        <Container dimension="extra-large">
                            <Stack as="div" hPadding={24} vPadding={128}>
                                <SectionHead
                                    largeTitleForm={webinar?.title}
                                    subTitleForm={webinar?.description}
                                />
                            </Stack>
                        </Container>
                    </Stack>
                </ >
            }
        </>
    )
}
