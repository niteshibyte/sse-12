import { Avatar, Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";

type config = {
    show: 1 | 2;
}

export const AboutTestimonial = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {show: 2},
        fallback: {show: 1}
    });

    const { about }: any = useSelector((state) => state)

    return (
        <>
            {about && about?.testimonials?.length > 0 && <>
                <Container dimension="full" padding={false} className="section--with--circle bg--dark overflow-hidden no-radius">
                    {/* Circle Images */}
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>

                    {/* Section Head */}
                    <Container dimension="extra-large">
                        <Stack as="div" hPadding={24} vPadding={128}>
                            <Stack as="div" rowGap={64} className="testi--slider width--64">
                                {/* Section Head */}
                                <SectionHead
                                    title={about?.testimonials[0]?.heading}
                                    secondHeadText={about?.testimonials[0]?.sub_heading}
                                />

                                {/* Testimonial slider */}
                                <Stack direction="row" columnGap={24} className="desktop--testi--slider">
                                    {about?.testimonials[0]?.testimonials_clients && about?.testimonials[0]?.testimonials_clients?.client?.length > 0 && about?.testimonials[0]?.testimonials_clients?.client?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div" direction="row" vPadding={24} hPadding={32} vAlign="start" rowGap={16} columnGap={16} className="bg--dark--1 quotation-style-1 rounded-12 quote--style">
                                                <Stack as="div" className="quote--mark">
                                                    <img src="/quotation--mark.png" alt="Quotation Mark" />
                                                </Stack>
                                                <Stack as="div" className="quote--content">
                                                    <Text as="blockquote" variant="tagline-2" className="intro--text"><div dangerouslySetInnerHTML={htmlToTextConvert(item?.review_message)} /></Text>
                                                    <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-20">
                                                        {item?.client_image?.url &&
                                                            <Avatar dimension="big" src={item?.client_image?.url} alt="Client name" />
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
                                </Stack>
                                <Stack as="div" className="mobile--testi--slider">
                                    <Carousel autoSwipe={1500} show={value.show} slide={1} transition={0.5}>
                                        {about?.testimonials[0]?.testimonials_clients && about?.testimonials[0]?.testimonials_clients?.client?.length > 0 && about?.testimonials[0]?.testimonials_clients?.client?.map((item: any, index: number) => {
                                            return (
                                                <Stack as="div" direction="row" vPadding={24} hPadding={32} vAlign="start" rowGap={16} columnGap={16} className="bg--dark--1 quotation-style-1 rounded-12">
                                                    <Stack as="div" className="quote--mark">
                                                        <img src="/quotation--mark.png" alt="Quotation Mark" />
                                                    </Stack>
                                                    <Stack as="div" className="quote--content">
                                                        <Text as="blockquote" variant="tagline-2" className="intro--text"><div dangerouslySetInnerHTML={htmlToTextConvert(item?.review_message)} /></Text>
                                                        <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-20">
                                                            {item?.client_image?.url &&
                                                                <Avatar dimension="big" src={item?.client_image?.url} alt="Client name" />
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

                                    </Carousel>
                                </Stack>

                                <Stack direction="column" hAlign="center" vAlign="center" className="mt-16">
                                    <Link href={"#"}>
                                        <Button kind="primary" dimension="big"  >Learn more</Button>

                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}