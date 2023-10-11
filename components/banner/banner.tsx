'use client'
import { Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";

import { useSelector } from "react-redux";
import Link from "next/link";
import Html_React_Parser from "../../helper/html-parser";
import { useRouter } from "next/router";
import { changeUrl } from "../../helper/ChangeLanguage";


type config = {
    variant: "heading-1" | "display-1";
    variant2: "heading-5" | "tagline-1";
}

export const Banner = () => {
    const router=useRouter()
    const { home_banner
    }: any = useSelector((state: any) => state?.homeData)


    const { matches, value } = useBreakpointsConfig<config>({
        md: { variant: "display-1", variant2: "tagline-1" },
        lg: { variant: "display-1", variant2: "tagline-1" },
        xl: { variant: "display-1", variant2: "tagline-1" },
        fallback: { variant: "heading-1", variant2: "heading-5" },
    });

    return (
        <>
            {home_banner && <Container dimension="full" padding={false} className="site--banner banner-video">
                {home_banner?.banner_image?.content_type == 'image/gif' ? <img src={home_banner?.banner_image?.url} /> : <video className="video" width="100%" height="100%" loop autoPlay muted>
                    <source src={home_banner?.banner_image?.url} type="video/mp4" />
                    <source src={home_banner?.banner_image?.url} type="video/ogg" />
                </video>}
                <Stack vPadding={16} hPadding={16}>

                    <Text as="h1" variant="display-1" textAlign="center" className="banner-title" data-aos="fade-up" data-aos-duration="800">{Html_React_Parser(home_banner?.banner_title)}</Text>
                    <Stack as="div" hAlign="center" data-aos="fade-up" data-aos-duration="800">
                        <Text variant={value.variant2} textAlign="center">
                            {Html_React_Parser(home_banner?.banner_description)}
                        </Text>
                        <Stack direction="column" hAlign="center" vAlign="center">
                            <Link href={changeUrl(router.query.lang,`${home_banner?.banner_cta?.href}`)}>
                                <Button kind="primary" dimension="big"  >{home_banner?.banner_cta?.title}</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
};