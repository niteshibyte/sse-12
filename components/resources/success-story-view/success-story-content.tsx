'use client';
import { Container, Stack, Text, List, Button } from "@wonderflow/react-components";
import stackWrapper from '../../../helper/api'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import htmlToTextConvert from '../../../helper/htmlToTextConvert';
export default function SuccessStoryContent(props:any) {
    const { successsingle } = useSelector((state: any) => state)
    return (
        <>
            {successsingle&&<>
                <Container dimension="extra-large" className="mt-128 success-story-content-block">
                    <Container dimension="full" padding={false}>
                        <Stack hPadding={128} direction='row' vAlign="start" wrap columnGap={152} rowGap={32} className='success-story'>
                           
                            <Stack as="div" className='short--width'>
                                    <div dangerouslySetInnerHTML={htmlToTextConvert(successsingle?.main_body_content_success_story)}/>
                                    <Stack as="div" className='bg__light rounded-12 '>
                                        <Text as="h2" variant='heading-2'>About Wonderflow</Text>
                                        <Text as="p"><div dangerouslySetInnerHTML={htmlToTextConvert(successsingle?.about_wonderflow)}/></Text>
                                    </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}