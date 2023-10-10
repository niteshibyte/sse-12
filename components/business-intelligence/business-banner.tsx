import { Button, Card, Container, Elevator, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
export const BusinessBanner = () => {
    const {bipage}=useSelector((state:any)=>state)
    return(
        <>
           {bipage && <Container dimension="full" className="businees--banner bg--dark overflow-hidden">
                {/* Circle Images */}
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Stack className="circle--highlight circle-right-bottom">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                
                <Container dimension="extra-large">
                    <Stack as="div" direction='column' vPadding={128}>
                        <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                            {/* Banner Heading */}
                            <SectionHead 
                                largeTitleForm={bipage?.banner_main_title}
                                subTitleForm={bipage?.banner_short_title}
                            />

                            {/* Banner Card */}
                            {bipage?.select_popular_banner_report?.length>0 &&<Elevator resting={1} hover={4} className="banner--card">
                               <Link href={bipage?.select_popular_banner_report[0]?.type=='productcomparison'?`/business-intelligence/product-comparison${bipage?.select_popular_banner_report[0]?.url}`:`/business-intelligence/voc-reports${bipage?.select_popular_banner_report[0]?.url}`}>
                               <a>

                               <Card padding={false} highlightOnHover className="mt-16 overflow-hidden">
                                    <Button as="a" href="#" kind="primary" dimension="small" className="small--button">Most Popular</Button>
                                    <Stack as="div" direction="row" vAlign="center" wrap columnGap={64} rowGap={64}>
                                        <Stack as="div" className="banner--image">
                                            <img src={bipage?.select_popular_banner_report[0]?.type=='productcomparison'?bipage?.select_popular_banner_report[0]?.thumbnail?.url:bipage?.select_popular_banner_report[0]?.thumnail?.url} alt="Business Banner" />
                                        </Stack>
                                        <Stack as="div" direction="column" rowGap={8} vPadding={32} hPadding={16} className="banner--card--body">
                                            <Text as="p" variant="subtitle-2" className="uppercase small--text">{bipage?.title=='Business Intelligence'?"Product Comparison":"VoC report"}</Text>
                                            <Text as="h4" variant="heading-2" className="mt-4">{bipage?.select_popular_banner_report[0]?.title}</Text>
                                            <Text as="p" variant="body-1" className="mt-4"><div dangerouslySetInnerHTML={htmlToTextConvert(bipage?.select_popular_banner_report[0]?.banner_section?.banner_description)} /></Text>
                                        </Stack>
                                    </Stack>
                                </Card>
                               </a>
                               </Link>
                            </Elevator>}
                            
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}