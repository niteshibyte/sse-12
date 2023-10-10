import { SectionHead } from "../section-head/section-head";
import { Container, Stack, Text } from "@wonderflow/react-components";
import { ProductMediaSections } from "./product-sections/sections-media";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";
const blockClass = ["media--item--right pl-16 mt-16", "pr-16 mt-16", "media--item--right pl-16 mt-16"];
export const ProductCustomerInsights1 = () => {
    const { pageProductData } = useSelector((state: any) => state.blogData);
    return (
        <>
            <Container dimension="extra-large" className="mt-128 media--text--small">
                <Stack as="div" hPadding={24} direction="column" rowGap={64}>
                    <Stack as="div" className="full--headings">
                        <SectionHead                               
                            title={pageProductData?.new_section_heading}
                        />
                    </Stack>
                    <Stack as="div" direction="column" rowGap={96}>
                        {pageProductData?.right_left_info?.left_right_sections?.length > 0 ? pageProductData?.right_left_info?.left_right_sections?.map((textData: any, index: number) => {
                            return (
                                <ProductMediaSections
                                    id={textData?._metadata?.uid}
                                    mediaClass={blockClass[index]}
                                    mediaSmallTitle={textData?.single_line}
                                    mediaImage={textData?.image?.url}
                                    mediaTitleSmall={textData?.title}
                                    mediaText={textData?.description}
                                    mediaList="true"
                                    mediaButton={textData?.link?.title ?? false}
                                    mediaButtonClass="secondary button"
                                />
                            )
                        }) : <NoDataFound />
                        }
                    </Stack>
                </Stack>
            </Container>
        </>

    );
}