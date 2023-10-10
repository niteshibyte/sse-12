'use client';
import { Container, Stack, Text, List, Button } from "@wonderflow/react-components";
import { CardSlider } from '../../../components/image-card-slider/card-slider';
import { SectionHead } from '../../../components/section-head/section-head';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export const RecentWhitePaper = () => {
    const [data, setData] = useState<any>()
    const select_categories = useSelector((state: any) => state?.whitePaper?.select_categories);
    useEffect(() => {
        setData(select_categories)
    }, [select_categories])
    return (
        <>
            {data && <>
                <Container dimension="extra-large" className="mt-128">
                    <Container dimension="full" padding={false}>
                        <Stack direction="row" as="div" wrap vAlign="center" hAlign="center" className="slider--head center">
                            <SectionHead
                                title="Recent WhitePapers"
                            />
                        </Stack>
                        <Stack hPadding={24} direction='row' wrap columnGap={32} rowGap={16} vAlign='center' className='mt-16 tab--content--block'>
                            {data && data?.length > 0 && data?.map((item: any, index: number) => {
                                return (
                                    <CardSlider
                                        cardImage="/whitepaper-1.png"
                                        semiTitle={item?.title}
                                    />
                                )
                            })}

                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}