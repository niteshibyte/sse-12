'use client';
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';
export const CareerResult = () => {
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.stats_section?.length > 0 && <>
                <Container dimension="large" className="counter--block">
                    <Stack hPadding={24} direction='row' hAlign='center' wrap columnGap={64} rowGap={32}>
                        {career?.stats_section?.map((item: any, index: number) => {
                            return (
                                <Stack key={index} as="div" className="results--list" rowGap={16}>
                                    <Text as="h5" variant="display-3" className="big--tagline">{item?.input_1}</Text>
                                    <Text as="p" className='description-width text--normal'>{item?.input_2}</Text>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Container>
            </>}
        </>
    )
}