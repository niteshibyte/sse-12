
import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
export const PartnerNetwork = () => {
    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        <Stack as="div" className="width--64">
                            <SectionHead
                                smallTitle="RESOURCES"
                                title="More from our partner network"
                            />
                        </Stack>
                        <Stack direction="row" columnGap={32} rowGap={32} wrap className="tab--content--block mt-16 image-card-partner">
                            <Card padding={false} className="card--block">
                                <Stack as="div" className="card--image">
                                    <img src="/card-1.png" alt="Image1" />
                                </Stack>
                                <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                    <Text variant="body-2">Article</Text>
                                    <Text as="h5" variant="heading-5" className="mt-4">Top 8 CX Trends in 2023 (And No Shock VoC Analytics Still Tops)</Text>
                                </Stack>
                            </Card>
                            <Card padding={false} className="card--block">
                                <Stack as="div" className="card--image">
                                    <img src="/department-media.png" alt="Image2" />
                                </Stack>
                                <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                    <Text variant="body-2">Success Stories</Text>
                                    <Text as="h5" variant="heading-5" className="mt-4">Automotive company uses VoC analytics to improve mobility experience</Text>
                                </Stack>
                            </Card>
                            <Card padding={false} className="card--block">
                                <Stack as="div" className="card--image">
                                    <img src="/webinar-img3.png" alt="Image3" />
                                </Stack>
                                <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                    <Text variant="body-2">Article</Text>
                                    <Text as="h5" variant="heading-5" className="mt-4">Top 8 CX Trends in 2023 (And No Shock VoC Analytics Still Tops)</Text>
                                </Stack>
                            </Card>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}