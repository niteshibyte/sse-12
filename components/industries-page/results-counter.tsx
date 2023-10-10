import { Container, Stack, Text } from "@wonderflow/react-components";
export const ResultsCounter = () => {
    return(
        <>
            <Container dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        <Stack as="div" wrap direction="row" className="stack--block--content">
                            <Stack as="div" className="results--list" rowGap={16}>
                                <Text as="h5" variant="display-3" className="big--tagline">6-level</Text>
                                <Text variant="body-1">Cleaning and deduplication processes.</Text>
                            </Stack>
                            <Stack as="div" className="results--list" rowGap={16}>
                                <Text as="h5" variant="display-3" className="big--tagline">+300M</Text>
                                <Text variant="body-1">Reviews on Amazon</Text>
                            </Stack>
                            <Stack as="div" className="results--list" rowGap={16}>
                                <Text as="h5" variant="display-3" className="big--tagline">Billions</Text>
                                <Text variant="body-1">Of private records</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}