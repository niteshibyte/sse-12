import {  Container, Stack, Text } from "@wonderflow/react-components";

import { useSelector } from "react-redux";

export const TeamTopSection = () => {
    const {banner}:any =useSelector((state:any)=>state?.team)
    return(
        <>
            {banner&&
            <Container dimension="extra-large">
                    <Stack as="div" hPadding={24} vPadding={128}>
                        <Stack className="short--width animate__animated animate__fadeInUp">
                            <Text variant="body-2" textAlign="center" className="mb--12">{banner?.banner_title}</Text>
                            <Text as="h3" variant="display-3" textAlign="center">{banner?.banner_sub_titel}</Text>
                            <Text variant="body-1" textAlign="center" className="fs-22 mt-8">{banner?.banner_description}</Text>
                        </Stack>
                    </Stack>
            </Container>}
        </>
    );
}