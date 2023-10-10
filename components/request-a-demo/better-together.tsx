'use client';
import { Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";

export const BetterTogether = () => {
    const { request }: any = useSelector((state) => state)

    return (
        <>
            {request && request?.partners && request?.partners?.partner_logo?.length > 0 && <Stack hPadding={24} as="div" className='page-short-width' direction="column" rowGap={24}>
                <Text as="h4" variant='heading-3'>{request?.partners?.section_title}</Text>
                <Stack direction='row' wrap columnGap={16} rowGap={16} className='center-content'>

                    {request?.partners?.partner_logo?.map((item: any, index: number) => {
                        return (
                            <Stack key={index} as="div" rowGap={16} className="results--list">
                                <img src={item?.url} alt="Logo" />
                            </Stack>
                        )
                    })}


                </Stack>
            </Stack>}
        </>
    )
}