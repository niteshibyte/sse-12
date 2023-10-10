import React from 'react'
import { Container, Stack, Text, List, useBreakpointsConfig } from '@wonderflow/react-components';
import { useSelector } from 'react-redux';
import { PopupButton } from '../../common-blog-section/popup-button';

type config = {
    direction: "row" | "column";
}
export default function FreeSavoury() {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { direction: "row" },
        lg: { direction: "row" },
        xl: { direction: "row" },
        fallback: { direction: "column" },
    })

    const singlereport = useSelector((state: any) => state?.singlereport)
    return (
        <>
            {singlereport?.download_report_section && <>
                <Container dimension="full" padding={false} className="section--with--circle product-top-section mediaSecBlock overflow-hidden no-radius">
                    <Container dimension="extra-large" className="">
                        <Stack direction={value.direction} vAlign='center' as="div" hPadding={24} vPadding={128}>
                            <Stack as="div" direction='column' rowGap={24} className="media--body">
                                <Text as="h2" variant="display-4" data-aos="fade-up" data-aos-duration="500">{singlereport?.download_report_section?.section_title}</Text>
                                <Text as="p" variant='tagline-2' style={{ color: "#fff" }}>{singlereport?.download_report_section?.keypoints?.key_point_title}</Text>
                                <List as="ul" className='checkList'>
                                    {singlereport?.download_report_section?.keypoints?.key_points?.length > 0 && singlereport?.download_report_section?.keypoints?.key_points?.map((item: any) => {
                                        return (
                                            <List.Li variant="body-1" vPadding="8">{item}</List.Li>
                                        )
                                    })}
                                </List>
                                <Stack as="div" direction='row' className='popupButton mt-8'>
                                    <PopupButton
                                        popupButton={singlereport?.download_report_section?.download_button?.title}
                                        title={singlereport?.download_report_section?.section_title}
                                        image={singlereport?.download_report_section?.background_image?.url}
                                    />
                                </Stack>
                            </Stack>
                            <Stack direction="row" fill wrap as="div" className="media__item">
                                <img src={singlereport?.download_report_section?.background_image?.url} alt="Media Image" />
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}
