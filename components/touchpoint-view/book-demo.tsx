import { Button, Container, Stack, Text, Textfield, Toggle, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import BookDemoForm from "../book-demo/book-demo-form";

type config = {
    vPadding: "64" | "128";
}

export const BookDemo = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { vPadding: "128" },
        lg: { vPadding: "128" },
        xl: { vPadding: "128" },
        fallback: { vPadding: "64" },
    });
    
    const { promotion_lead_banner } = useSelector((state: any) => state?.touchpoint)
    return(
        <>
            <Container dimension="full" padding={false} className="bg--dark webform-section overflow-hidden">
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Stack className="circle--highlight circle-right-bottom">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>

                <Container dimension="large" padding={false}>
                    <Stack direction="row" hPadding={24} vPadding={value.vPadding} wrap vAlign="center" hAlign="space-between" rowGap={value.vPadding} columnGap={128} className="animate__animated animate__fadeInUp">
                        <Stack as="div" direction="column" rowGap={32} className="webform--content">
                            <Stack as="div" direction="column" rowGap={32} className="webform--image">
                                <img src={promotion_lead_banner?.image?.url} alt="Webform Image" />
                            </Stack>
                            <Stack as="div" direction="column" rowGap={24} className="webform--content--data">
                                <Text as="h1" variant="display-4">{promotion_lead_banner?.title}</Text>
                                <Text as="p" variant="tagline-2">{promotion_lead_banner?.description}</Text>
                            </Stack>
                        </Stack>
                        <Stack as="div" className="webform--form--block form">
                            
                            <BookDemoForm />
                           
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
};