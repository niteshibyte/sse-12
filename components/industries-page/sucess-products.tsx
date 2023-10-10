
import { MediaSections } from "./industry-sections/sections-media";
import { SectionHead } from "../section-head/section-head";
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";

export const SuccessProducts = () => {
    const [achieve_faster_success, setAchieve_faster_success] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );
    useEffect(() => {
        if (industryPageData) {
            setAchieve_faster_success(industryPageData?.achieve_faster_success_for_your_products)
        }

    }, [industryPageData])
    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <Stack as="div" className="industry--headings">
                        <SectionHead
                            title={achieve_faster_success?.title}
                        />
                    </Stack>
                    <Stack as="div" direction="column" rowGap={96}>
                        {achieve_faster_success?.infographics_block?.length > 0 ? achieve_faster_success?.infographics_block?.map((item: any, index: number) => {
                            if ((index + 1) % 2 != 0) {
                                return (
                                    <MediaSections key={index}
                                        mediaClass="media--item--right pl-16 mt-16"
                                        mediaImage={item?.hero_image?.url}
                                        mediaTitleSmall={item?.title}
                                        mediaParaBlock={item?.description}
                                        mediaButton={item?.button?.title}
                                        mediaButtonHref={item?.button?.href}
                                        mediaButtonClass='primary'

                                    />
                                )
                            } else {
                                return (
                                    <MediaSections
                                        key={index}
                                        mediaClass="pr-16 mt-128"
                                        mediaImage={item?.hero_image?.url}
                                        mediaTitleSmall={item?.title}
                                        mediaParaBlock={item?.description}
                                        mediaButton={item?.button?.title}
                                        mediaButtonHref={item?.button?.href}
                                        mediaButtonClass="secondary"
                                    />
                                )
                            }
                        }) : <NoDataFound />}
                    </Stack>

                </Stack>
            </Container>
        </>

    );
}