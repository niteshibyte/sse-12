'use client';
import { Stack, Text } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';

export const ClientWins = () => {
    const { request }: any = useSelector((state) => state)

    return (
        <>
            {request && request?.client_stats_section && <Stack hPadding={24} as="div" className='page-short-width client-wins' direction="column" rowGap={24}>
                <Text as="h4" variant='heading-3'>{request?.client_stats_section?.section_title}</Text>
                <Stack direction='row' wrap columnGap={16} rowGap={16} className='center-content'>

                    {request?.client_stats_section?.global_field && request?.client_stats_section?.global_field?.standard_block?.length > 0 && request?.client_stats_section?.global_field?.standard_block?.map((item: any, index: number) => {
                        return (
                            <Stack as="div" rowGap={24} className="results--list">
                                <Text as="h5" variant="display-3" className="big--tagline">{item?.title}</Text>
                                {/* <Text as="h6" className='text--medium'>CSAT/NPS</Text> */}
                                <Text className='text--normal'>{item?.description}</Text>
                            </Stack>
                        )
                    })}

                </Stack>
            </Stack>}
        </>
    )
}