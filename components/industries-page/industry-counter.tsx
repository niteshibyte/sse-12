'use client';
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';

export const IndustryCounterView = (props: any) => {
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data);
    return (
        <>
            <>
                <Container dimension="extra-large" className="counter--block">
                    <Stack hPadding={24} direction='row' wrap columnGap={64} rowGap={32}>
                        {industryPageData?.industry_stats?.block?.length > 0 && industryPageData?.industry_stats?.block?.map((item: any, index: number) => {
                            return (
                                <Stack as="div" className="results--list" rowGap={16} key={index}>
                                    <Text as="h5" variant="display-3" className="big--tagline">{item?.heading}</Text>
                                    <Text as="p" variant='body-1' className='description-width'>{item?.subheading}</Text>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Container>
            </>
        </>
    )
}