import { Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";

import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";
type config = {
    variant: "heading-2" | "display-4";
    vPadding: "64" | "96" | "128";
}

export const Standard = () => {
    const router=useRouter()
    const { section_8_promotional }: any = useSelector((state: any) => state?.homeData)

    const { matches, value } = useBreakpointsConfig<config>({
        md: { variant: "display-4", vPadding: "96" },
        lg: { variant: "display-4", vPadding: "128" },
        xl: { variant: "display-4", vPadding: "128" },
        fallback: { variant: "heading-2", vPadding: "64" },
    });

    return (
        <>
            {section_8_promotional && <>
                <Container dimension="full" padding={false} className="bg__light">
                    <Container dimension="large">
                        <Stack as="div" direction="column" rowGap={32} vPadding={value.vPadding}>
                            <Stack as="div" direction="column" rowGap={16} className="info--content short--width animate__animated animate__fadeInUp">
                                <Text as="h2" variant={value.variant} textAlign="center"><div dangerouslySetInnerHTML={htmlToTextConvert(section_8_promotional?.short_title)} /></Text>
                                <Text variant="subtitle-1" textAlign="center" className="mt-4"><div dangerouslySetInnerHTML={htmlToTextConvert(section_8_promotional?.main_title)} /></Text>
                                <Stack direction="column" hAlign="center" className="mt-40">
                                    <Link href={changeUrl(router.query.lang,section_8_promotional?.button_name?.href)}>
                                        <Button kind="primary" dimension="big"  >{section_8_promotional?.button_name?.title}</Button>

                                    </Link>
                                </Stack>
                            </Stack>
                            <Stack className="info--image mt-4 animate__animated animate__fadeInUp">
                                <img src={section_8_promotional?.hero_image?.url} alt={section_8_promotional?.hero_image?.title} />
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
};