import { Button, Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { changeUrl } from "../../helper/ChangeLanguage";
export const VocIntelligence = () => {
    const router=useRouter()
    const [newsletter, setNewsletter] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );

    useEffect(() => {
        if (industryPageData) {
            setNewsletter(industryPageData?.newsletter[0])
        }

    }, [industryPageData])
    return (
        <>
            {Object.keys(newsletter)?.length>0 && <Container dimension="extra-large" className="mb-128">
                <Stack as="div" hPadding={24}>
                    <Stack as="div" direction="column" rowGap={24} vPadding={128} hPadding={24} className="section--with--circle width--60 bg--dark overflow-hidden no-margin">
                        <Stack className="circle--highlight circle-left-top">
                            <img src="/red-circle.png" alt="Red Circle" />
                        </Stack>
                        <Stack className="circle--highlight circle-right-bottom">
                            <img src="/red-circle.png" alt="Red Circle" />
                        </Stack>

                        <SectionHead
                            title={newsletter?.banner_title}
                            headText={newsletter?.banner_description}
                        />

                        {/* Button */}
                        <Stack as="div" direction="column" hAlign="center" className="mt-6">
                        <Link href={changeUrl(router.query.lang,newsletter?.button_text?.href)}>
                            <Button kind='primary' dimension="big"  >{newsletter?.button_text?.title}</Button>
                        </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
}