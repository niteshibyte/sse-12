import { SectionHead } from "../section-head/section-head";

import { Container, Stack, Text } from "@wonderflow/react-components";
import { ProductMediaSections } from "./product-sections/sections-media";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";

const blockClass = ["media--item--right pl-16 mt-16", "pr-16 mt-16", "media--item--right pl-16 mt-16"];
export const ProductCustomerInsights = () => {
    const { pageProductData } = useSelector((state: any) => state.blogData);

    return (
        <>
            <Container dimension="extra-large" className="media--text--small">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <Stack as="div" className="full--headings">
                        <SectionHead
                            smallTitle={pageProductData?.left_right_sections[0]?.short_title}
                            title={pageProductData?.left_right_sections[0]?.title}
                        />
                    </Stack>
                    {pageProductData?.left_right_sections[0]?.left_right_sections_internal?.left_right_sections?.length > 0 ? pageProductData?.left_right_sections[0]?.left_right_sections_internal?.left_right_sections?.map((textData: any, index: number) => {
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
                                mediaButtonHref={textData?.link?.href ?? "#"}
                                mediaButtonClass="secondary"
                            />
                        )
                    }) : <NoDataFound />
                    }

                </Stack>
            </Container>
        </>

    );
}