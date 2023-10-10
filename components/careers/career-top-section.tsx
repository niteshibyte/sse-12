import { useSelector } from "react-redux";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import { Container, Stack } from "@wonderflow/react-components";
export const CareerTopSection = () => {
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.hero_banner && <>
                <Container dimension="full" padding={false} className="bg__light top--section no--bg pb-0">
                    <Container dimension="extra-large">
                        <Stack as="div" vPadding={128} hPadding={24}>
                            <DepartmentMediaSections
                                mediaClass="media--item--right"
                                mediaImage={career?.hero_banner?.banner_image?.url}
                                mediaTitle={career?.hero_banner?.banner_title}
                                mediaText={career?.hero_banner?.banner_description}
                                mediaButton={career?.hero_banner?.banner_cta?.title}
                                mediaButtonHref={career?.hero_banner?.banner_cta?.href}
                                mediaButtonClass='primary'
                            />
                        </Stack>
                    </Container>
                </Container>
            </ >}
        </>

    );
}