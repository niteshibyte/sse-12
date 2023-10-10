import { useSelector } from "react-redux";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import { Container, Stack } from "@wonderflow/react-components";
export const BecomePartnerTopSection = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.hero_banner && <>
                <Container dimension="full" padding={false} className="bg__light top--section no--bg">
                    <Container dimension="extra-large">
                        <Container dimension="full" padding={false}>
                            <Stack as="div" hPadding={24} vPadding={128}>
                                <DepartmentMediaSections
                                    mediaClass="media--item--right"
                                    mediaImage={becomeapartner?.hero_banner?.banner_image?.url}
                                    mediaTitle={becomeapartner?.hero_banner?.banner_title}
                                    mediaText={becomeapartner?.hero_banner?.banner_description}
                                    mediaButton={becomeapartner?.hero_banner?.banner_cta?.title}
                                    mediaButtonHref={becomeapartner?.hero_banner?.banner_cta?.href}
                                    mediaButtonClass={'primary'}

                                />
                            </Stack>
                        </Container>
                    </Container>
                </Container>
            </>}
        </>

    );
}