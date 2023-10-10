import { Button, Container, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { useSelector } from "react-redux";

export const CustomerFeedback = () => {
    const { about }: any = useSelector((state) => state)

    return (
        <>
            {about && about?.promotional_banner_section && <>
                <Container padding={false} dimension="full" className="mt-128">
                    <Container dimension="large">
                        <Stack as="div" rowGap={24} className="info--content">
                            <Stack as="div" rowGap={16}>
                                <Text variant="subtitle-1" textAlign="center" className="text--medium">{about?.promotional_banner_section?.section_description_promotional}</Text>
                                <Text variant="display-4" textAlign="center">{about?.promotional_banner_section?.section_title_promotional}</Text>
                                <Stack direction="column" hAlign="center">
                                    <Link href={about?.promotional_banner_section?.button_name?.href}>
                                        <Button kind='primary' dimension="big"  >{about?.promotional_banner_section?.button_name?.title}</Button>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack className="info--image">
                            <img src={about?.promotional_banner_section?.banner_image?.url} alt="Insight image" />
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
};