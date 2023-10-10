import { Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import { WebinarResource } from "../common-blog-section/webinar-resources";
import { WhitePaperResource } from "../common-blog-section/whitepaper-resources";
import { SuccessStoryResource } from "../common-blog-section/success-story-resources";
import { AnalyticsResource } from "../common-blog-section/analytic-resources";
import { VoCReportResource } from "../common-blog-section/VoC-report-resource";
import { ProductComparisonResource } from "../common-blog-section/product-comparison-resource";
import { BlogResources } from "../common-blog-section/blog-resources";
export const HomeResource = () => {
    const { section_9_resources }: any = useSelector((state: any) => state?.homeData)
    const getComponent = (type: string, item: any) => {
        switch (type) {
            case "webinar":
                return <WebinarResource item={item} />
            case "whitepaper":
                return <WhitePaperResource item={item} />
            case "successstory":

                return <SuccessStoryResource item={item} />
            case "analytics":

                return <AnalyticsResource item={item} />
            case "vocreport":

                return <VoCReportResource item={item} />
            case "productcomparison":

                return <ProductComparisonResource item={item} />
            case "blog":

                return <BlogResources item={item} />
            default:
                return null
        }
    }
    return (
        <>
            {section_9_resources && <Container dimension="extra-large" className="home-blog">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <SectionHead

                        title={section_9_resources?.main_title}
                        underneethSmallTitle={section_9_resources?.sub_title}
                    />


                    <Stack as="div" className="mt-16 tab--content--block animate__animated animate__fadeInUp" direction="row" wrap rowGap={32} columnGap={32} hAlign="center">
                        {section_9_resources?.reference?.length > 0 &&
                            section_9_resources?.reference?.map((item: any, index: number) => {
                                return getComponent(item?.type, item)
                            })
                        }
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
};