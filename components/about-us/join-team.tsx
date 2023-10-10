import { Button, Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";

export const JoinTeam = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && about?.promotion_banner_2 && <>
                <Container dimension="extra-large">
                    <Stack as="div" hPadding={24}>
                        <Stack as="div" vPadding={128} rowGap={24} hPadding={24} className="mt-128 section--with--circle width--60 bg--dark overflow-hidden mb--0">
                            {/* Circle Images */}
                            <Stack className="circle--highlight circle-left-top">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>
                            <Stack className="circle--highlight circle-right-bottom">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>

                            {/* Section Head */}
                            <SectionHead
                                title={about?.promotion_banner_2?.section_title}
                                headText={about?.promotion_banner_2?.section_description}
                            />

                            {/* Button */}
                            <Stack as="div" direction="column" hAlign="center" className="mt-6">
                                <Link href={about?.promotion_banner_2?.button_name?.href}>
                                    <Button kind='primary' dimension="big"  >{about?.promotion_banner_2?.button_name?.title}</Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    );
}