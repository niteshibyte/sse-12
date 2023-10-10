'use client';
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from 'react-redux';
export const CounterView = () => {
    const { counter_section} = useSelector((state: any) => state?.touchpoint)
    return (
        <>
           {counter_section&& <>
                <Container dimension="extra-large" className="mt-128 bird-vierw-counter">
                    <Container dimension="full" padding={false} className='counter--block'>
                        <Stack hPadding={24} direction='row' hAlign='center' wrap columnGap={64} rowGap={32}>
                            {counter_section?.length>0 && counter_section?.map((item:any,index:number)=>{
                                return(
                                    <Stack as="div" className="results--list" rowGap={16}>
                                    <Text as="h5" variant="display-3" className="big--tagline">{item?.textbox1}</Text>
                                    <Text as="p" variant='body-1' className='description-width'>{item?.textbox2}</Text>
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