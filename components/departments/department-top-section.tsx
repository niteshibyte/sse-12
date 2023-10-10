
import { Container, Stack } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { DepartmentMediaSections } from "./department-sections/sections-media";
export const DepartmentTopSection = () => {
    const departmentData = useSelector((state: any) => state.blogData?.departmentData);
    return (
        <>
            {departmentData && <>
                <Container dimension="full" padding={false} className="bg__light top--section">
                    <Container dimension="extra-large">
                        <Stack as="div" vPadding={128} hPadding={24}>
                            <DepartmentMediaSections
                                mediaClass="media--item--right"
                                mediaImage={departmentData?.banner?.banner_image?.url}
                                mediaTitle={departmentData?.banner?.banner_title}
                                mediaText={departmentData?.banner?.banner_description}
                                mediaButton={departmentData?.banner?.banner_cta?.title}
                                mediaButtonHref={departmentData?.banner?.banner_cta?.href}
                                mediaButtonClass='primary'
                            />
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}