import { Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import { Carousel } from "@trendyol-js/react-carousel";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
type config = {
    variant: "display-3" | "heading-3";
    vPadding: "64" | "96" | "128";
}
export const Results = () => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {variant: "heading-3", vPadding: "96"},
        lg: {variant: "display-3", vPadding: "128"},
        xl: {variant: "display-3", vPadding: "128"},
        fallback: {variant: "heading-3", vPadding: "64"}
    });
    const { section_four }: any = useSelector((state: any) => state?.homeData)
    return (
        <>{section_four && <>
            <Container as="div" dimension="full" padding={false} className="bg__light">
                <Container dimension="extra-large">
                    <Stack as="div" direction="column" rowGap={64} className="home--page__results" hPadding={24} vPadding={value.vPadding}>
                        <SectionHead
                            smallTitle=""
                            title={section_four?.title_4}
                            headText={section_four?.sub_title_4}
                        />
                        <Stack direction="row" wrap vAlign="start" hAlign="center" rowGap={32} columnGap={32} className="mt-8">
                            <Stack as="div" wrap direction="row" className="stack--block--content">
                                {section_four?.stats?.length > 0 && section_four?.stats?.map((item: any, index: number) => {
                                    return (
                                        <Stack key={index} as="div" className="results--list" rowGap={32}>
                                            <Text as="h5" variant={value.variant} className="big--tagline">{item?.input_1}</Text>
                                            <Text variant="body-1" className="">{item?.input_2}</Text>
                                        </Stack>
                                    )
                                })}

                            </Stack>

                            <Stack as="div" className="stack--block--image result-slider">
                                {section_four?.side_slider && <Carousel autoSwipe={2000} show={1} slide={1} transition={0.9} >
                                    {section_four?.side_slider?.success_stories?.length > 0 && section_four?.side_slider?.success_stories?.map((item: any, index: number) => {
                                        return (
                                            <Stack key={index} >
                                                <Link href={`/resources/success-story${item?.url}`}>
                                                    <a>
                                                        <Stack as="div" className="stack--image">
                                                            <img src={item?.hero_image?.url} alt={item?.hero_image?.title} />
                                                        </Stack>
                                                        <Text as="h3" variant="heading-3"><div dangerouslySetInnerHTML={htmlToTextConvert(item?.title)}></div></Text>
                                                    </a>
                                                </Link>
                                            </Stack>
                                        )
                                    })}
                                </Carousel>}
                            </Stack>
                        </Stack>
                        <Stack direction="column" hAlign="center" className="mt-8">
                            <Link href={section_four?.button_name_4?.href}>
                                <Button kind="primary" dimension="big"  >{section_four?.button_name_4?.title}</Button>

                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>}</>
    );
};