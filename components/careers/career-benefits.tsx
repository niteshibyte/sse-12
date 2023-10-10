import { Container, Card, Stack, Text, Accordion, AccordionItem, } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
export const CareerBenefits = () => {
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.benefits_section && <>
                <Container dimension="full" padding={false}>
                    <Container dimension="extra-large">
                        <Stack as="div" rowGap={64} hPadding={24}>
                            <SectionHead
                                smallTitle=""
                                title={career?.benefits_section?.section_title}
                                headText=""
                            />
                            {/* Desktop View Data  /> */}
                            <Stack direction="row" rowGap={32} columnGap={32} wrap vPadding={16} className="tab--content--block desktop--view animate__animated animate__fadeInUp mt-16">

                                {career?.benefits_section?.six_blocks_section && career?.benefits_section?.six_blocks_section?.standard_block?.length > 0 && career?.benefits_section?.six_blocks_section?.standard_block?.map((item: any, index: number) => {
                                    return (
                                        <Card bordered className="card--block" highlightOnHover>
                                            <Stack as="div" rowGap={16}>
                                                {item?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(item?.input_svg_icon_code_if_required_)} /> : <Stack as="div" className="card--icon">
                                                    <img src={item?.image?.url} alt="Icon" />
                                                </Stack>}
                                                <Text as="h4" variant="heading-3" className="card--title">{item?.title}</Text>
                                                <Text as="p" variant="body-1">{item?.description}</Text>
                                            </Stack>
                                        </Card>
                                    )
                                })}

                            </Stack>

                            {/* Mobile View Data */}

                            <Stack as="div" className="tab--content--block mobile--view">
                                <Accordion defaultOpen="1">
                                    {career?.benefits_section?.six_blocks_section && career?.benefits_section?.six_blocks_section?.standard_block?.length > 0 && career?.benefits_section?.six_blocks_section?.standard_block?.map((item: any, index: number) => {
                                        return (
                                            <Card className="card--block" highlightOnHover>
                                                <AccordionItem value={`${index + 1}`} className="custom--according"
                                                    summary={
                                                        <>
                                                            <Stack as="span" className="card--icon fs-18">
                                                                <img src={item?.image?.url} alt="Card Icon" />
                                                            </Stack>
                                                            <Text as="h4" className="card--title fs-18">{item?.title}</Text>
                                                        </>
                                                    }>
                                                    <Text>{item?.description}</Text>
                                                </AccordionItem>
                                            </Card>
                                        )
                                    })}
                                </Accordion>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
};