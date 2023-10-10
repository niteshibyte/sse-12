import { Container, Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import { useSelector } from "react-redux";

type config = {
    vPadding: "64" | "128",
}


export const TouchPointTopSection = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { vPadding: "128" },
        lg: { vPadding: "128" },
        xl: { vPadding: "128" },
        fallback: { vPadding: "64" },
    });

    const { herobanner } = useSelector((state: any) => state?.touchpoint)
    return (
        <>
           { herobanner &&<>
                <Container dimension="full" padding={false} className="bg__light top--section">
                    <Container dimension="extra-large">
                        <Stack as="div" vPadding={value.vPadding} hPadding={24} className="top--media--section">
                            <DepartmentMediaSections
                                mediaClass="media--item--right"
                                mediaImage={herobanner?.banner_image?.url}
                                mediaTitle={herobanner?.banner_title}
                                mediaText={herobanner?.banner_description}
                                mediaButton={herobanner?.banner_cta?.title}
                                mediaButtonClass={"primary"}
                                mediaButtonHref={herobanner?.banner_cta?.href}
                            />
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>

    );
}