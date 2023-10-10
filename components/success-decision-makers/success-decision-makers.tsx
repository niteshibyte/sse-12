import { Container, Card, Separator, Stack, Text, Button, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
type config = {
    hPadding: "0" | "24";
}
export const SuccessDecisionMakers = () => {
    const { section_one }: any = useSelector((state: any) => state?.homeData)

    const { matches, value } = useBreakpointsConfig<config>({
        md: { hPadding: "24" },
        lg: { hPadding: "24" },
        fallback: { hPadding: "0" },
    });
    return (
        <>
            {section_one && <>
                <Container dimension="large" className="success-decision-maker">
                    <Stack as="div" direction="column" rowGap={64} >
                        <SectionHead
                            smallTitle=""
                            title={section_one?.section_title}
                            secondHeadText={section_one?.section_description}
                        />
                        <Stack as="div" direction="column" rowGap={32}>
                            <Stack direction="row" wrap hAlign="center" rowGap={32} columnGap={16} className="mt-8 tab--content--block width--73 mx-auto" data-aos="fade-up" data-aos-duration="1300">

                                {section_one?.client_group?.length > 0 && section_one?.client_group?.map((item: any, index: number) => {
                                    return (
                                        <Card key={index} bordered padding={24} className="card--block" highlightOnHover>
                                            <Stack as="div" direction="column" rowGap={24}>
                                                <Stack className="card--icon--top">
                                                    <img src={item?.client_logo?.url} alt={item?.client_logo?.title} />
                                                </Stack>
                                                <Stack className="fixedText">
                                                    <Text variant="body-1" className=""><div dangerouslySetInnerHTML={htmlToTextConvert(item?.client_message)} /></Text>
                                                    <Text variant="body-2" className="">{item?.name_and_designation}</Text>
                                                </Stack>
                                            </Stack>
                                            
                                            <Stack direction="row" wrap vAlign="start" hAlign="center" rowGap={8} columnGap={4} className="mt-8 bottom--text">

                                                {item?.stats?.length > 0 && item?.stats?.map((data: any, index: number) => {
                                                    return (
                                                        <Stack className="info--group mt-32 pt-4" key={index}>
                                                            <Stack className="info--wrapper">
                                                                <Text variant="heading-6" className="text-uppercase text--with--icon Semibold highlight--text">
                                                                    <img src={data?.file_icon?.url} alt={data?.file_icon?.title} />
                                                                    {data?.input_1}
                                                                </Text>
                                                                <Text variant="body-2" className="mt--6">{data?.input_2}</Text>
                                                            </Stack>
                                                        </Stack>
                                                    )
                                                })}


                                            </Stack>
                                        </Card>
                                    )
                                })}
                            </Stack>
                            <Stack direction="column" wrap hAlign="center" className="mt-8">
                                <Link href={section_one?.button_name?.href}>
                                    <Button kind="primary" dimension="big"  >{section_one?.button_name?.title}</Button>

                                </Link>

                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    );
}