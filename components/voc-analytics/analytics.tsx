import { Button, Card, Container, Stack, Tab, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
type config = {
    direction: "row" | "column";
    hPadding: "0" | "24";
    vPadding: "32" | "64" | "128";
    Padding: "24" | "48" | "64";
    variant: "heading-2" | "display-4";
}
export const Analytics = () => {
    const { section_5_tabs }: any = useSelector((state: any) => state?.homeData)
    const [tabNumber, setTabNumber] = useState(0)
    const [content, setContent] = useState([])
    useEffect(() => {
        setContent(section_5_tabs?.tabs?.filter((item: any, index: number) => index == tabNumber))
    }, [tabNumber, section_5_tabs])

    const { matches, value } = useBreakpointsConfig<config>({
        md: { direction: "row", hPadding: "24", vPadding: "64", variant: "display-4", Padding: "48" },
        lg: { direction: "row", hPadding: "24", vPadding: "128", variant: "display-4", Padding: "64" },
        xl: { direction: "row", hPadding: "24", vPadding: "128", variant: "display-4", Padding: "64" },
        fallback: { direction: "column", hPadding: "0", vPadding: "32", variant: "heading-2", Padding: "24" },
    });

    return (
        <>
            {section_5_tabs && <>
                <Container dimension="extra-large" className="large voc-section">
                    <Stack as="div" hPadding={24}>
                        <Stack as="div" className="short--width another" direction="column" hAlign="center">
                            <Text as="h2" variant={value.variant} textAlign="center">{section_5_tabs?.section_title_5}</Text>
                        </Stack>
                        <Stack as="div" className="tab--gap">
                            <Tab onValueChange={(value: number) => setTabNumber(value)} defaultValue={tabNumber}>

                                {
                                    section_5_tabs?.tabs?.length > 0 && section_5_tabs?.tabs?.map((item: any, index: number) => {
                                        return (
                                            <Tab.Panel variant="body-1" label={item?.tab_name} value={index} className="tab--content--block">
                                                {content?.length > 0 && content?.map((data: any) => {
                                                    return (
                                                        <Card padding={value.Padding} className="card--block full--card--block bg__light--white-green-gradiant" highlightOnHover>
                                                            <Stack direction="row" wrap vAlign="start" hAlign="space-between" rowGap={32} columnGap={32}>
                                                                <Stack as="div" className="card--block--content" rowGap={16}>
                                                                    <Text as="h4" variant="heading-3">
                                                                        {data?.tab_title}
                                                                    </Text>
                                                                    <Text as="p" variant="body-1" className="mt-10">
                                                                        <div dangerouslySetInnerHTML={htmlToTextConvert(data?.tab_sub_title)} />
                                                                    </Text>
                                                                    <Text as="p" variant="body-1" className="mt-10">
                                                                        <div dangerouslySetInnerHTML={htmlToTextConvert(data?.tab_description)} />
                                                                    </Text>
                                                                    <Stack direction="column" hAlign="start" className="mt-12">
                                                                        <Link href={data?.button_link?.href}>
                                                                            <Button kind="primary" dimension="big"  >{data?.button_link?.title}</Button>

                                                                        </Link>
                                                                    </Stack>
                                                                </Stack>
                                                                <Stack as="div" className="full--card--image">
                                                                    <img src={data?.image?.url} alt="Analutics Image" />
                                                                </Stack>
                                                            </Stack>
                                                        </Card>
                                                    )
                                                })}
                                            </Tab.Panel>
                                        )
                                    })
                                }
                            </Tab>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    );
};