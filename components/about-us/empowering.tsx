
import { Container, Stack, Card, Text, AccordionItem, Accordion } from "@wonderflow/react-components";
import { SectionHead } from "../../components/section-head/section-head";
import { CardBlock } from "./card-block";
import { useSelector } from "react-redux";
export const Empowering = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && about?.keyfeatures && <>
                <Container dimension="extra-large">
                    <Stack as="div" direction="row" columnGap={32} rowGap={32} vAlign="start" hPadding={24}>
                        <Stack as="div" className="slider--wrapper empowerBlock">
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title={about?.keyfeatures?.short_title}
                                    headText={about?.keyfeatures?.description}
                                />
                            </Stack>

                            {/* Desktop View */}

                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="tab--content--block desktop--view">
                                
                                {about?.keyfeatures?.featured_tiles?.length>0 &&about?.keyfeatures?.featured_tiles?.map((item:any,index:number)=>{
                                return(
                                    <CardBlock
                                        cardImage={item?.image?.url}
                                        semiTitle={item?.highlighted_text}
                                        semiTitleRed={item?.tile_title}
                                        paraBlock={item?.tile_description}
                                    /> 
                                )
                                })}
                                
                            </Stack>

                            {/* Mobile View */}

                            <Stack as="div" className="tab--content--block mobile--view">
                                <Accordion defaultOpen="1">
                                    {about?.keyfeatures?.featured_tiles?.length>0 &&about?.keyfeatures?.featured_tiles?.map((item:any,index:number)=>{
                                        return(
                                            <Card className="card--block" highlightOnHover>
                                        
                                                <AccordionItem value={`${item+1}`} className="custom--according"
                                                summary={<>
                                                    <Stack as="span" className="card--icon">
                                                        <img src={item?.image?.url} alt="Card Image" />
                                                    </Stack> {item?.highlighted_text}
                                                </>}
                                                >
                                                    <Text>{item?.tile_description}</Text>
                                                </AccordionItem>  
                                            
                                            </Card>
                                        )
                                    })}
                                </Accordion>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    )
}