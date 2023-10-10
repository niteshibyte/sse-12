'use client';
import { Container, Stack, Text, } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';
export const CounterView = (props: any) => {
    const { successsingle } = useSelector((state: any) => state)
    return (
        <>
            {successsingle && <>
                <Container dimension="extra-large" className="mt-128">
                    <Container dimension="full" padding={false} className='counter--block'>
                        <Stack hPadding={24} direction='row' wrap columnGap={64} rowGap={32}>
                            {successsingle?.success_story_stats?.length > 0 && successsingle?.success_story_stats?.map((item: any, index: number) => {
                                return (
                                    <Stack as="div" className="results--list" rowGap={16}>
                                        <Text as="h5" variant="display-3">{item?.input_one}</Text>
                                        <Text className='description-width'>{item?.input_two}</Text>
                                    </Stack>
                                )
                            })}


                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}