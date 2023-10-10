import { Card, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components"
import { SectionHead } from "../section-head/section-head"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import htmlToTextConvert from "../../helper/htmlToTextConvert"
import NoDataFound from "../no-data-found/no-data-found"
type config = {
    variant: "heading-4" | "heading-6";
}
export const IndustryBenefits = () => {
    const [benefits, setBenefits] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );
    useEffect(() => {
        if (industryPageData ) {
            setBenefits(industryPageData?.benefits)
        }

    }, [industryPageData])
    const {matches, value} = useBreakpointsConfig<config>({
        md: { variant: "heading-4" },
        xl: { variant: "heading-4" },
        lg: { variant: "heading-4" },
        fallback: { variant: "heading-6" }
    });
    return(
        <>
            <Container dimension="extra-large" className="mt-128">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <SectionHead 
                        title={benefits?.benefit_title}
                        headText={benefits?.benefit_subtitle}
                    />

                    {benefits?.benefit_block?.length>  0 ?
                        <Stack as="div" className="tab--content--block benefits--block mt-16" wrap direction="row" rowGap={32} columnGap={32}>
                            {benefits?.benefit_block?.map((data:any, index:number) => {
                                return(
                                    <Card key={index} bordered className="card--block" highlightOnHover>
                                        <Stack direction="row" vAlign="start" columnGap={24}>
                                            {data.svg_icon_code_if_required_?<Stack as="div" className="card--icon"  dangerouslySetInnerHTML={htmlToTextConvert(data.svg_icon_code_if_required_)}/>: 
                                                <Stack as="div" className="card--icon">
                                                    <img src={data.info_icon?.url} alt="Card Icon" />
                                                </Stack>
                                            }
                                            {data.title &&
                                                <Stack as="div" className="card--body">
                                                    <Text as="h4" variant={value.variant}>{data.title}</Text>
                                                </Stack>
                                            }
                                        </Stack>
                                    </Card>
                                );
                            })}
                        </Stack>
                    :
                        <NoDataFound />
                    }
                </Stack>
            </Container>
        </>
    )
}