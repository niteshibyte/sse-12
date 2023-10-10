import { Container, Stack } from "@wonderflow/react-components"
import { useSelector } from "react-redux"

export const TrustIcon = () => {

    return(
        <>
            <Container dimension="extra-large">
                <Container dimension="full">
                    <Stack direction="row" hAlign="end" className="salesforce-trust-icon">
                        <img src="https://privacy-policy.truste.com/privacy-seal/seal?rid=0a5802d6-2a9a-4865-9fe9-70e1140cf3b6" alt="Trust Icon" />
                    </Stack>
                </Container>
            </Container>
        </>
    )
}