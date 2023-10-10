import { Container, Stack, Text, Avatar, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
type config = {
    vPadding: "64" | "96" | "128";
}
export const ProductTestimonialSlider = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {vPadding: "96"},
        lg: {vPadding: "128"},
        xl: {vPadding: "128"},
        fallback: {vPadding: "64"}
    });

    const { pageProductData } = useSelector((state: any) => state?.blogData);
    return (
        <>
            {pageProductData?.testimonial?.length > 0 && <>
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
                        <Stack as="div" hPadding={24} vPadding={value.vPadding}>
                            <Stack as="div" direction="column" rowGap={64} className="testi--slider width--64">
                                {/* Section Head */}
                                <SectionHead
                                    title={pageProductData?.testimonial[0]?.heading}
                                    mediumTitle={pageProductData?.testimonial[0]?.sub_heading}
                                />

                                {/* Testimonial slider */}
                              
                                <Stack as="div" direction="row" wrap rowGap={24} columnGap={24}>
                                    {pageProductData?.testimonial[0] && pageProductData?.testimonial[0]?.testimonials_clients?.client?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div" direction="row" vPadding={16} hPadding={16} vAlign="start" rowGap={16} columnGap={16} className="bg--dark--1 quotation-style-1 rounded-12">
                                                <Stack as="div" className="quote--mark">
                                                    <img src="/quotation--mark.png" alt="Quotation Mark" />
                                                </Stack>
                                                <Stack as="div" className="quote--content">
                                                    <Text as="blockquote" variant="tagline-2" className="intro--text">“{item?.review_message}”</Text>
                                                    <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-20">
                                                       {item?.client_image
                                                                ?.url&& 
                                                            <Avatar dimension="big" src={item?.client_image
                                                                ?.url} alt={item?.client_name} />
                                                        }
                                                        <Stack as="div" className="blog--author--details">
                                                            <Text as="p" variant="body-1" className="text--bold">{item?.client_name}</Text>
                                                            <Text as="p" variant="body-1" className="text--normal">{item?.client_designation}</Text>
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        )
                                    })}
                                </Stack>
                                   
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}