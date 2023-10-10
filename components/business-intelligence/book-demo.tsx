import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import BookDemoForm from "../book-demo/book-demo-form";
export const BiBookDemo = () => {
    const { lead_section }: any = useSelector((state: any) => state?.singleproduct)
    return (
        <>
            {lead_section && <Container dimension="full" padding={false} className="bg--dark overflow-hidden">
                <Container dimension="large">
                    <Stack as="div" vPadding={128} hPadding={24}>
                        <Stack direction="row" wrap vAlign="center" hAlign="space-between" rowGap={48} columnGap={48} className="webform-sectionmx-auto" data-aos="zoom-in" data-aos-duration="1000">
                            <Stack className="circle--highlight circle-left-top">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>
                            <Stack className="circle--highlight circle-right-bottom">
                                <img src="/red-circle.png" alt="Red Circle" />

                            </Stack>
                            <Stack as="div" className="webform--content">
                                <Text as="h6" variant="display-4">{lead_section?.section_title}</Text>
                                <Text variant="tagline-2" className="mt-12"><div dangerouslySetInnerHTML={htmlToTextConvert(lead_section?.section_description)} /></Text>
                            </Stack>
                            <Stack as="div" className="webform--form--block form">
                                <BookDemoForm />
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}