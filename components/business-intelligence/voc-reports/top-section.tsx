import { Container, Stack } from "@wonderflow/react-components";
import { MediaSections } from "../bi-sections/media-sections";
import { useSelector } from "react-redux";

export const BiVocTopSection = () => {
    const { banner_section, utm } = useSelector((state: any) => state?.singlereport)
    return (
        <>
            {banner_section && <Container dimension="full" padding={false} className="mt-128 top--section">
                <Container dimension="extra-large">
                    <Stack as="div" vPadding={128} hPadding={24}>
                        <MediaSections
                            mediaClass="media--item--right bi-top-section"
                            mediaImage={banner_section?.banner_image?.url}
                            mediaText={banner_section?.banner_description}
                            mediaTitle={banner_section?.short_title}
                            mediaButton={banner_section?.button?.title}
                            mediaButtonHref={banner_section?.button?.href}
                            utm={utm}
                            title="Download the Voc report"
                        />
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}