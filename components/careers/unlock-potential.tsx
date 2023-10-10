import { Accordion, AccordionItem, Container, Stack, Text, Card } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";

export const UnlockPotential = () => {
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.faq_section_career && <Container dimension="extra-large" className="faq--section mt-128 slider--title--width">
                <Stack rowGap={64} as="div" hPadding={24}>
                    <SectionHead
                        title={career?.faq_section_career?.section_title}
                        secondHeadText={career?.faq_section_career?.section_description}
                    />
                    <Stack as="div" wrap direction="row" vAlign="start" rowGap={32} columnGap={96} className="mt-16">
                        {/* Desktop View */}
                        <Stack as="div" className="faq--list--section desktop--view">
                            <Accordion defaultOpen="1">
                                {career?.faq_section_career?.faq?.length > 0 && career?.faq_section_career?.faq?.map((item: any, index: number) => {
                                    return (
                                        <><AccordionItem className="faq--field" value={`${index + 1}`} summary={
                                            <Text as="h3" variant="heading-3" className="card--title">{item?.question}</Text>
                                        }>
                                            <Stack as="div" direction="column">
                                                <Stack as="div" className="faq--image--section">
                                                    <Stack as="div" className="faq--image">
                                                        {item?.faq_image && <img src={item?.faq_image?.url} alt="FAQ Image" />}
                                                    </Stack>
                                                </Stack>
                                                <Text as="p" variant="body-1" className="description-block">{item?.answer}</Text>
                                            </Stack>
                                        </AccordionItem>
                                        </>
                                    )
                                })}

                            </Accordion>

                        </Stack>

                        {/* Mobile View  */}

                        <Stack as="div" className="tab--content--block mobile--view--faq">
                            <Accordion defaultOpen="1">
                                {career?.faq_section_career?.faq?.length > 0 && career?.faq_section_career?.faq?.map((item: any, index: number) => {
                                    return (
                                        <Card className="card--block" highlightOnHover>
                                            <AccordionItem value={`${index + 1}`} className="custom--according"
                                                summary={
                                                    <>
                                                        <Stack as="span" className="card--icon fs-18">
                                                            {item?.faq_image && <img src={item?.faq_image?.url} alt="FAQ Image" />}
                                                        </Stack>
                                                        <Text as="h4" className="card--title fs-18">{item?.question}</Text>
                                                    </>
                                                }>
                                                <Text>{item?.answer}</Text>
                                            </AccordionItem>
                                        </Card>
                                    )
                                })}
                            </Accordion>
                        </Stack>

                    </Stack>
                </Stack>
            </Container>}
        </>
    );
};