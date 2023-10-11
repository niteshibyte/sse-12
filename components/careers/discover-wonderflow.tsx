import { Button, Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";

export const DiscoverWonderflow = () => {
    const router=useRouter()
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.promotional_banner
                && <>
                    <Container dimension="extra-large">
                        <Stack as="div" hPadding={24}>
                            <Stack as="div" rowGap={32} hPadding={24} vPadding={128} className="section--with--circle width--60 bg--dark overflow-hidden mb--0">
                                {/* Circle Images */}
                                <Stack className="circle--highlight circle-left-top">
                                    <img src="/red-circle.png" alt="Red Circle" />
                                </Stack>
                                <Stack className="circle--highlight circle-right-bottom">
                                    <img src="/red-circle.png" alt="Red Circle" />
                                </Stack>

                                {/* Section Head */}
                                <SectionHead
                                    title={career?.promotional_banner?.banner_title}
                                    headText={career?.promotional_banner?.banner_description}
                                />

                                {/* Button */}
                                <Stack as="div" direction="column" hAlign="center" className="mt-6">
                                    <Link href={changeUrl(router.query.lang,`${career?.promotional_banner?.button_name?.href}`)}>
                                        <Button kind='primary' dimension="big"  >{career?.promotional_banner?.button_name?.title}</Button>

                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </>}
        </>
    );
}