import { Accordion, AccordionItem, Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
import { useRouter } from "next/router";
import { changeUrl } from "../../helper/ChangeLanguage";
type config = {
    rowGap: "24" | "64";
}
export const ProductFAQ = () => {
    const router=useRouter()
    const {matches, value} = useBreakpointsConfig<config>({
        md: {rowGap: "24"},
        lg: {rowGap: "64"},
        xl: {rowGap: "64"},
        fallback: {rowGap: "24"},
    })

    const { pageProductData } = useSelector((state: any) => state?.blogData);

    return (
        <>
            <Container dimension="extra-large" className="faq--section">
                <Stack as="div" direction="column" rowGap={value.rowGap} hPadding={24}>

                    <SectionHead
                        title={pageProductData?.productpage_faq && pageProductData?.productpage_faq?.title}
                    />

                    <Stack as="div" wrap direction="row" vAlign="start" rowGap={32} columnGap={96} className="media--item--right">
                        <Stack as="div" className="faq--image--section mobile--faq--image--section" rowGap={24}>
                            <Stack as="div" className="faq--image">
                                <img src={pageProductData?.productpage_faq?.image?.url} alt="FAQ Image" />
                            </Stack>
                        </Stack>
                        {pageProductData?.productpage_faq?.faq_questions?.length != 0 ?
                            <Stack as="div" direction="column" rowGap={32} className="faq--list--section">
                                <Accordion defaultOpen="1">
                                    {pageProductData?.productpage_faq?.faq_questions.map((data: any, index: string) => {
                                        return (
                                            <AccordionItem className="faq--field" key={index} value={`${index + 1}`} summary={
                                                <Text as="h4" variant="heading-3" className="card--title">{data.faq_question}</Text>
                                            }>
                                                {data.faq_answers &&
                                                    <Text><div dangerouslySetInnerHTML={htmlToTextConvert(data.faq_answers)} /></Text>
                                                }
                                            </AccordionItem>
                                        );
                                    })}
                                </Accordion>
                            </Stack>
                            :
                            <Text as="p" textAlign="center" color="danger">No Data found.</Text>
                        }
                        <Stack as="div" className="faq--image--section desktop--faq--image--section" rowGap={24}>
                            <Stack as="div" className="faq--image">
                                <img src={pageProductData?.productpage_faq?.image?.url} alt="FAQ Image" />
                            </Stack>
                            <Stack as="div" direction="row" wrap vAlign="center" hAlign="space-between" vPadding={24} hPadding={24} rowGap={16} columnGap={32} className="faq--image--content">
                                <Text as="h5" variant="heading-5">{pageProductData?.productpage_faq?.image_text}</Text>

                                <Link href={changeUrl(router.query.lang,pageProductData?.productpage_faq?.button?.href)  }>
                                    <Button kind='primary' dimension="big"  >{pageProductData?.productpage_faq?.button?.title}</Button>

                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};