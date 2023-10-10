'use client';
import { Container } from '@wonderflow/react-components';
import { SectionHead } from '../../../components/section-head/section-head';
import { Stack } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';
export default function SuccessStoryBannerContent() {
    const successstory = useSelector((state: any) => state?.successstory);
    return (


        <Container dimension="full" padding={false} className="section--with--circle product-top-section overflow-hidden no-radius">
            <Stack className="circle--highlight circle-left-top">
                <img src="/red-circle.png" alt="Red Circle" />
            </Stack>
            <Stack className="circle--highlight circle-right-bottom">
                <img src="/red-circle.png" alt="Red Circle" />
            </Stack>
            <Container dimension="extra-large">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24} vPadding={128}>
                        <SectionHead
                            largeTitleForm={successstory?.title}
                            subTitleForm={successstory?.description}
                        />
                    </Stack>
                </Container>
            </Container>
        </Container>


    )
}
