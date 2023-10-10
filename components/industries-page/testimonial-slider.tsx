import { Avatar, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { SectionHead } from "../section-head/section-head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
type config = {
    show: 1 | 2;
}
export const TestimonialSlider = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { show: 2 },
        fallback: { show: 1 }
    });

    const [testimonial, setTestimonial] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );

    useEffect(() => {
        if (industryPageData) {
            setTestimonial(industryPageData?.testimonial[0])
        }

    }, [industryPageData])
    return (
        <>
            <Container dimension="full" padding={false} className="section--with--circle bg--dark overflow-hidden no-radius testimonial--section">
                {/* Circle Images */}
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Stack className="circle--highlight circle-right-bottom">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>

                {/* Section Head */}
                <Container dimension="extra-large">
                    <Stack as="div" vPadding={128} hPadding={24} direction="column" rowGap={64} className="testi--slider">
                        {/* Section Head */}
                        <SectionHead
                            title={testimonial?.heading}
                            headText={testimonial?.sub_heading}
                        />

                        {/* Testimonial slider */}

                        {testimonial?.testimonials_clients && <Stack direction="row" columnGap={24} className="desktop--testi--slider">

                            {testimonial?.testimonials_clients?.client?.length > 0 && testimonial?.testimonials_clients?.client?.map((item: any, index: number) => {
                                return (
                                    <Stack as="div" direction="row" vPadding={16} hPadding={16} vAlign="start" rowGap={16} columnGap={16} className="bg--dark--1 quotation-style-1 rounded-12 quote--style">
                                        <Stack as="div" className="quote--mark">
                                            <img src="/quotation--mark.png" alt="Quotation Mark" />
                                        </Stack>
                                        <Stack as="div" className="quote--content">
                                            <Text as="blockquote" variant="tagline-2" className="intro--text">{item?.review_message}</Text>
                                            <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-6">
                                                {item?.client_image?.url &&
                                                    // <Stack as="div" className="blog--author--image">
                                                    <Avatar dimension="big" src={item?.client_image?.url} alt="Author Name" />
                                                    // </Stack>
                                                }
                                                <Stack as="div" className="blog--author--details">
                                                    <Text as="p" className="text--bold">{item?.client_name}</Text>
                                                    <Text as="p">{item?.client_designation}</Text>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                )
                            })}


                        </Stack>}

                        <Stack as="div" className="mobile--testi--slider">
                            {testimonial?.testimonials_clients && <Carousel autoSwipe={1500} show={value.show} slide={1} transition={0.5}>

                                {testimonial?.testimonials_clients?.client?.length > 0 && testimonial?.testimonials_clients?.client?.map((item: any, index: number) => {
                                    return (
                                        <Stack as="div" direction="row" vPadding={16} hPadding={16} vAlign="start" rowGap={16} columnGap={16} className="bg--dark--1 quotation-style-1 rounded-12">
                                            <Stack as="div" className="quote--mark">
                                                <img src="/quotation--mark.png" alt="Quotation Mark" />
                                            </Stack>
                                            <Stack as="div" className="quote--content">
                                                <Text as="blockquote" variant="tagline-2" className="intro--text">{item?.review_message}</Text>
                                                <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-6">
                                                    {item?.client_image?.url &&
                                                        <Avatar dimension="big" src={item?.client_image?.url} alt="Author Name" />
                                                    }
                                                    <Stack as="div" className="blog--author--details">
                                                        <Text as="p" className="text--bold">{item?.client_name}</Text>
                                                        <Text as="p">{item?.client_designation}</Text>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    )
                                })}


                            </Carousel>}
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}