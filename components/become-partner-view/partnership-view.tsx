import { Container, Card, Stack, Text, Accordion, AccordionItem, } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
export const PartnerShipView = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.six_block_section && <>
                <Container dimension="full" padding={false} className="mt-128">
                    <Container dimension="extra-large">
                        <Container dimension="full" padding={false}>
                            <Stack as="div" hPadding={24} vPadding={128}>
                                <SectionHead
                                    smallTitle=""
                                    title={becomeapartner?.six_block_section?.block_title}
                                    headText=""
                                />
                                {/* Desktop View Data  /> */}
                                <Stack direction="row" rowGap={32} columnGap={32} wrap vPadding={16} className="tab--content--block desktop--view animate__animated animate__fadeInUp">

                                    {
                                        becomeapartner?.six_block_section?.six_blocks &&
                                        becomeapartner?.six_block_section?.six_blocks?.standard_block?.length > 0 &&
                                        becomeapartner?.six_block_section?.six_blocks?.standard_block?.map((item: any, index: number) => {
                                            return (
                                                <Card className="card--block" highlightOnHover>
                                                    <Stack as="div" direction="column" rowGap={16}>
                                                        {item?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert
                                                            (item.input_svg_icon_code_if_required_)} /> : <Stack as="div" className="card--icon">
                                                            <img src={item?.image?.url} alt="Icon" />
                                                        </Stack>}
                                                        <Text as="h4" variant="heading-3" className="card--title">{item?.title}</Text>
                                                        <Text as="p" variant="body-1">{item?.description}</Text>
                                                    </Stack>
                                                </Card>
                                            )
                                        })
                                    }



                                </Stack>

                                {/* Mobile View Data */}

                                <Stack as="div" className="tab--content--block mobile--view">
                                    <Accordion defaultOpen="1">
                                        <Card className="card--block" highlightOnHover>

                                            {
                                                becomeapartner?.six_block_section?.six_blocks &&
                                                becomeapartner?.six_block_section?.six_blocks?.standard_block?.length > 0 &&
                                                becomeapartner?.six_block_section?.six_blocks?.standard_block?.map((item: any, index: number) => {
                                                    return (
                                                        <AccordionItem value="1" summary="Services offering">
                                                            <Stack direction="row" wrap columnGap={16} vAlign="center">
                                                                <Stack as="span" className="card--icon">
                                                                    <img src={item?.image?.url} alt="Card Icon" />
                                                                </Stack>
                                                                <Text as="h4" variant="heading-4" className="card--title">{item?.title}</Text>
                                                            </Stack>
                                                            <Text>{item?.description}</Text>
                                                        </AccordionItem>
                                                    )
                                                })}

                                        </Card>
                                    </Accordion>
                                </Stack>

                            </Stack>
                        </Container>
                    </Container>
                </Container>
            </>}
        </>
    );
};