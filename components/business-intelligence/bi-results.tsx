import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';

export const BiResult = () => {
    const { stats_section }: any = useSelector((state: any) => state?.singleproduct)
    return (
        <>
            {stats_section?.length > 0 && <Container dimension="extra-large" className="mt-16">
                <Container dimension="full" padding={false} className='counter--block'>
                    <Stack hPadding={24} direction='row' wrap columnGap={64} rowGap={32}>
                        {stats_section?.map((item: any, index: number) => {
                            return (
                                <Stack as="div" className="results--list" rowGap={16}>
                                    <Text as="h5" variant="display-3">{item?.input_1}</Text>
                                    <Text as="p" variant='body-1' className='uppercase' fw-bold>{item?.input_2}</Text>
                                    <Text className='fs-18 description-width mt-2'>{item?.input_3}</Text>
                                </Stack>
                            )
                        })}

                       
                    </Stack>
                </Container>
            </Container>}
        </>
    )
}