import { useSelector } from "react-redux";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import { Container, Stack } from "@wonderflow/react-components";
export const MediaImageLeftView = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.left_right_section && <>
                <Container dimension="full" padding={false} className="bg__light top--section left-image-sec no--bg">
                    <Container dimension="extra-large">
                        <Container dimension="full" padding={false}>
                            <Stack as="div" hPadding={24}>
                                {becomeapartner?.left_right_section?.left_right_sections?.length > 0 && becomeapartner?.left_right_section?.left_right_sections?.map((item: any, index: number) => {
                                    return (

                                        <DepartmentMediaSections
                                            mediaClass="media--item--left"
                                            mediaImage={item?.image?.url}
                                            mediaTitleSmall={item?.title}
                                            paraBlock={item?.description}
                                            mediaButton={item?.link?.title}
                                            mediaButtonHref={item?.link?.href}
                                            mediaButtonClass="secondary button"
                                        />

                                    )
                                })}
                            </Stack>

                        </Container>
                    </Container>
                </Container>
            </>}
        </>

    );
}