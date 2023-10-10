import { Container, Stack } from "@wonderflow/react-components";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";

export const ValueDeliver = () => {
    const { leftrightsection_touchpoint } = useSelector((state: any) => state?.touchpoint)
    return (

        <>
            <Container dimension="extra-large" padding={false}>
                <Stack as="div" direction="column" hPadding={24} rowGap={64}>
                    <SectionHead
                        title={leftrightsection_touchpoint?.section_title}
                    />
                    <Stack as="div" direction="column" rowGap={96}>
                        {
                            leftrightsection_touchpoint?.sections?.left_right_sections?.length > 0 && leftrightsection_touchpoint?.sections?.left_right_sections?.map((item: any, index: number) => {
                                if ((index + 1) % 2 == 0) {
                                    return (
                                        <DepartmentMediaSections
                                            mediaClass="media--item--left mt-16"
                                            mediaImage={item?.image?.url}
                                            mediaTitleSmall={item?.title}
                                            paraBlock={item?.description}
                                            // paraBlockSemiBold="With zero lead time to start accessing insights get started in a flash!"
                                            mediaButton={item?.link?.title}
                                            mediaButtonHref={item?.link?.href}
                                            mediaButtonClass="secondary"
                                        />
                                    )
                                } else {
                                    return (
                                        <DepartmentMediaSections
                                            mediaClass="media--item--right"
                                            mediaImage={item?.image?.url}
                                            mediaTitleSmall={item?.title}
                                            paraBlock={item?.description}
                                            // paraBlockSemiBold="With zero lead time to start accessing insights get started in a flash!"
                                            mediaButton={item?.link?.title}
                                            mediaButtonHref={item?.link?.href}
                                            mediaButtonClass="secondary"
                                        />
                                    )
                                }
                            })
                        }

                    </Stack>
                </Stack>
            </Container>
        </>


    );
}