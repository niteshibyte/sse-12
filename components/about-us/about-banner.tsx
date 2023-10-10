import { Button, Container, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";

export const AboutBanner = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && <>
                <Container dimension="extra-large" className="top-section">
                    <Stack as="div" rowGap={40} hPadding={24}>
                        <Stack className="animate__animated animate__fadeInUp">
                            <Text variant="subtitle-1" textAlign="center" className="text--medium">{about?.hero_banner?.banner_sub_titel}</Text>
                            <Text as="h2" variant="display-2" textAlign="center">{about?.hero_banner?.banner_title}</Text>
                            <Text as="p" variant="tagline-1" textAlign="center" className="mt-8 text--normal"><div dangerouslySetInnerHTML={htmlToTextConvert(about?.hero_banner?.banner_description)} /></Text>
                        </Stack>
                        <Stack as="div" direction="column" wrap hAlign="center" className="mt-10">
                            <Link href={about?.hero_banner?.banner_cta?.href}>
                                <Button kind="primary" dimension="big"  >{about?.hero_banner?.banner_cta?.title}</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    );
}