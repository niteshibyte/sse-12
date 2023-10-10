import { Container, Stack } from "@wonderflow/react-components";
import { ProductMediaSections } from "../products/product-sections/sections-media";
export const InsightsCulture = () => {
    return (
        <>
            <Container dimension="extra-large" className="media--text--small mt-16">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        <ProductMediaSections
                            mediaClass=""
                            mediaImage="/media-image2.png"
                            mediaTitle="Elevate your insights culture with world class AI tools"
                            mediaTextSmall="With the distinction of being the world's largest repository of extensively analyzed public feedback, Wonderflow's data lake boasts an array of remarkable characteristics:"
                            mediaList='t'
                            mediaList1='Secure via VPN and demilitarized Zone'
                            mediaList2="Horizontal scalability"
                            mediaList3="Highly Available via multi-region and multi-provider architecture"
                            mediaButton="Learn more"
                            mediaButtonClass="secondary button"
                        />
                    </Stack>
                </Container>
            </Container>
        </>

    );
}