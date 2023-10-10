import { Container, Stack } from "@wonderflow/react-components";
import { MediaSections } from "../bi-sections/media-sections";
import { SectionHead } from "../../section-head/section-head";
import { useSelector } from "react-redux";
export const BiVocRoadmap = () => {
    const singlereport = useSelector((state: any) => state?.singlereport)
    return (
        <>
            {singlereport && <Container dimension="extra-large" className="voc-media--sections">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <SectionHead
                        title={singlereport?.section_title}
                    />
                    <Stack as="div" direction="column" rowGap={96}>
                        {singlereport?.section_two_brand_keypoints &&
                            <MediaSections
                                mediaClass={"media--item--right" }
                                mediaImage={singlereport?.section_two_brand_keypoints?.section_image?.url}
                                
                                mediaText={singlereport?.section_two_brand_keypoints?.left_description_area}
                                mediaPropsPara={singlereport?.section_two_brand_keypoints?.negative_impact_section?.title}
                                mediaList={singlereport?.section_two_brand_keypoints?.positive_impact_section?.points}
                                mediaConsPara={singlereport?.section_two_brand_keypoints?.positive_impact_section?.title}
                                mediaListCons={singlereport?.section_two_brand_keypoints?.negative_impact_section?.points}
                            />
                        }
                        {singlereport?.left_right_sections?.left_right_sections?.length > 0 && singlereport?.left_right_sections?.left_right_sections?.map((item: any, index: number) => {
                            return (
                                <MediaSections
                                    mediaClass={((index + 1) % 2 == 0) ? "media--item--right mt-16":"mt-128" }
                                    mediaImage={item?.image?.url}
                                    mediaTitle={item?.title}
                                    mediaText={item?.description}
                                />
                            )
                        })}
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
}