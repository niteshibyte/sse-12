import { Accordion, AccordionItem, Card, Stack, Tab, Text } from "@wonderflow/react-components";



import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";

export const ProductTabs = () => {
    const { section_three }: any = useSelector((state: any) => state?.homeData)
    return (
        <>
            {
                section_three && section_three?.six_blocks_home &&
                section_three?.six_blocks_home?.standard_block?.length > 0 &&
                <Stack direction="row" rowGap={32} columnGap={32} wrap vPadding={16} className="tab--content--block desktop--view mt-16" data-aos="zoom-in" data-aos-duration="1000">
                    {section_three?.six_blocks_home?.standard_block?.map((data: any, index: number) => {
                        return (
                            <Card key={index} bordered className="card--block animate__animated animate__fadeInUp" highlightOnHover>
                                <Stack as="div" direction="column" rowGap={16}>
                                    {data?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(data.input_svg_icon_code_if_required_)} />

                                        :
                                        <Stack as="div" className="card--icon" >
                                            <img src={data?.image?.url} alt="Card Icon" />
                                        </Stack>
                                    }
                                    {data.title &&
                                        <Text as="h4" variant="heading-3" className="card--title">{data.title}</Text>
                                    }
                                    {data.description &&
                                        <Text>{data.description}</Text>
                                    }
                                </Stack>
                            </Card>
                        )
                    })}
                </Stack>
            }


            {section_three && section_three?.six_blocks_home &&
                section_three?.six_blocks_home?.standard_block?.length > 0 &&
                <Stack as="div" className="tab--content--block mobile--view animate__animated animate__fadeInUp">
                    <Accordion defaultOpen="1">
                        {section_three?.six_blocks_home?.standard_block?.map((data: any, index: number) => {
                            return (
                                <Card key={index} className="card--block" highlightOnHover>
                                    <AccordionItem value={data.companyId} summary={
                                        <Stack direction="row" wrap columnGap={16} vAlign="center">
                                            {data?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(data.input_svg_icon_code_if_required_)} />

                                                :
                                                <Stack as="span" className="card--icon">
                                                    <img src={data.image?.url} alt="Card Icon" />
                                                </Stack>
                                            }
                                            {data.title &&
                                                <Text as="h4" variant="heading-4" className="card--title">{data.title}</Text>
                                            }
                                        </Stack>
                                    }>
                                        {data.description &&
                                            <Text>{data.description}</Text>
                                        }
                                    </AccordionItem>
                                </Card>
                            );
                        })}
                    </Accordion>
                </Stack>
            }
        </>
    );
};
