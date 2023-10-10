import { Accordion, AccordionItem, Card, Stack, Text } from "@wonderflow/react-components";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";
export const CompaniesData = () => {
    const { section_7}: any = useSelector((state: any) => state?.homeData)
    return(
        <>
            {section_7?.global_field?.standard_block?.length != 0 ?
                <Stack direction="row" rowGap={32} columnGap={32} wrap vPadding={16} className="tab--content--block desktop--view animate__animated animate__fadeInUp mt-16 pt-0 benefitSec">
                    {section_7?.global_field?.standard_block?.map((data:any, index:number) =>{
                        return(
                        <Card key={index} bordered className="card--block" highlightOnHover>
                            <Stack as="div" direction="column" rowGap={16}>
                                {data?.input_svg_icon_code_if_required_?  <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(data?.input_svg_icon_code_if_required_)} />: 
                                <Stack as="div" className="card--icon">
                                    <img src={data.image?.url} alt={data?.image?.title} />
                                </Stack>
                                }
                                {data.title &&
                                    <Text as="h4" variant="heading-3" className="card--title"><div dangerouslySetInnerHTML={htmlToTextConvert(data?.title)} /></Text>
                                }
                                {data.description &&
                                    <Text><div dangerouslySetInnerHTML={htmlToTextConvert(data?.description)} /></Text>
                                }
                            </Stack>
                        </Card>
                        );
                    })}
                </Stack>
            :
                <NoDataFound />
            }

            {section_7?.global_field?.standard_block?.length != 0  ?
                <Stack as="div" className="tab--content--block mobile--view animate__animated animate__fadeInUp">
                    <Accordion defaultOpen="1">
                        {section_7?.global_field?.standard_block?.map((data:any,index:number) => {
                            return(
                                <Card key={index} className="card--block" highlightOnHover>
                                    <AccordionItem value={data.companyId} summary={
                                        <Stack direction="row" wrap columnGap={16} vAlign="center">
                                            {data.image &&
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
             :
                <NoDataFound />
             }  
        </>
    );
};