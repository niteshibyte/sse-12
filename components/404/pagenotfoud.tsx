import { Container, Stack, Text } from "@wonderflow/react-components";
export const PageNotFound = () => {
    return (
        <>
            <>
                <Container dimension="full" padding={false} className="top--section">
                    <Container dimension="extra-large">
                        <Stack direction="column" wrap vPadding={160} vAlign="center" hAlign="space-between" rowGap={32}>
                                <Text as="h1" variant="display-1" textAlign="center">404</Text>
                                <Text as="h4" variant="heading-1" textAlign="center">Page Not Found</Text>
                        </Stack>
                    </Container>
                </Container>
            </>
        </>
    )
}