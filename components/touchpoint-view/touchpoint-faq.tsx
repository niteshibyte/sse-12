import { Accordion, AccordionItem, Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";


type config = {
    rowGap: "64" | "32",
}

export const TouchPointFAQ = () => {
const router=useRouter()
    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "64" },
        lg: { rowGap: "64" },
        xl: { rowGap: "64" },
        fallback: { rowGap: "32" },
    });
    
    const { faq_section } = useSelector((state: any) => state?.touchpoint)
    return (
        <>
            {faq_section && <Container dimension="extra-large" className="faq--section">
                <Stack as="div" direction="column" rowGap={value.rowGap} hPadding={24}>
                    <SectionHead
                        title={faq_section?.title}
                    />
                    <Stack as="div" wrap direction="row" vAlign="start" rowGap={32} columnGap={96}>
                        <Stack as="div" className="faq--image--section" rowGap={24}>
                            <Stack as="div" className="faq--image">
                                <img src={faq_section?.image?.url} alt="FAQ Image" />
                            </Stack>
                            <Stack as="div" direction="row" vAlign="center" hAlign="space-between" vPadding={24} hPadding={24} rowGap={16} columnGap={32} className="faq--image--content mt-12">
                                <Text as="h5" variant="heading-5">{faq_section?.image_text}</Text>
                                <Link href={changeUrl(router.query.lang,faq_section?.button?.href)}>
                                    <Button kind='primary' dimension="big"  >{faq_section?.button?.title}</Button>

                                </Link>
                            </Stack>
                        </Stack>
                        <Stack as="div" className="faq--list--section">
                            <Accordion defaultOpen="1">
                                {faq_section?.faq_questions?.length > 0 && faq_section?.faq_questions?.map((item: any, index: number) => {
                                    return (
                                        <AccordionItem className="faq--field" value={`${index + 1}`} summary={<Text as="h4" variant="heading-3" className="card--title">{item?.question}</Text>}>

                                            <Text><div dangerouslySetInnerHTML={htmlToTextConvert(item.faq_answers)} /></Text>
                                        </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        </Stack>
                    </Stack>
                </Stack>
            </Container >}
        </>
    );
};