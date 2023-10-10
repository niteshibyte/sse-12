import { Container, Stack } from "@wonderflow/react-components";
import { MediaSections } from "./bi-sections/media-sections";
import { useSelector } from "react-redux";

export const BiTopSection = () => {
    const { singleproduct }: any = useSelector((state) => state)
    return (
        <>
            {singleproduct && <Container dimension="full" padding={false} className="mt-128 top--section">
                <Container dimension="extra-large">
                    <Stack as="div" vPadding={128} hPadding={24}>
                        <MediaSections
                            mediaClass="media--item--right bi-top-section"
                            mediaImage={singleproduct?.banner_section?.banner_image?.url}
                            mediaSmallTitle={singleproduct?.banner_section?.short_title}
                            mediaTitle={singleproduct?.banner_section?.main_title}
                            mediaText={singleproduct?.banner_section?.banner_description}
                            keypoint={singleproduct?.banner_section?.key_points}

                            mediaButton={singleproduct?.banner_section?.button_text?.title}
                            mediaButtonHref={singleproduct?.banner_section?.button_text?.href}
                            title="Download the product comparison"
                            utm={singleproduct?.utm}
                        />
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}