import { useSelector } from "react-redux";
import { Container, Stack, Text } from "@wonderflow/react-components";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
import ContactForm from "../book-demo/contact-form";
export const ContactTopBanner = () => {
    const { contact }: any = useSelector((state) => state)
    return (
        <>
            {contact && contact?.hero_banner && <>
                <Container dimension="full" padding={false} className="bg--dark webform-section overflow-hidden">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Container dimension="extra-large">
                        <Stack direction="row" vPadding={128} hPadding={24} wrap vAlign="center" hAlign="space-between" rowGap={48} columnGap={128} className="animate__animated animate__fadeInUp">
                            <Stack as="div" className="webform--content">
                                <Text as="h1" variant="display-3">{contact?.hero_banner?.banner_title} </Text>
                                <Text as="p" className="tagline-2 mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(contact?.hero_banner?.banner_description)} /></Text>
                                <Text as="a" variant="tagline-2" className="text-yellow mt-8 text--underline">
                                    <Link href="#">
                                        <a>
                                            info@wonderflow.ai
                                        </a>
                                    </Link>
                                </Text>
                            </Stack>
                            <Stack as="div" hPadding={48} vPadding={48} className="webform--form--block form">
                                <ContactForm />
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}