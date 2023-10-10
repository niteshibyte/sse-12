import { Card, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { SectionHead } from "../section-head/section-head"
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import NoDataFound from "../no-data-found/no-data-found";
import { useRouter } from "next/router";
type config = {
    variant: "heading-4" | "heading-6";
}
export const DepartmentBenefits = () => {
    const { matches, value } = useBreakpointsConfig<config>({
        md: { variant: "heading-4" },
        xl: { variant: "heading-4" },
        lg: { variant: "heading-4" },
        fallback: { variant: "heading-6" }
    });

    const six_blocks_section = useSelector((state: any) => state.blogData?.departmentData?.six_blocks_section);

    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <Stack as="div" className="full--headings">
                        <SectionHead
                            title={six_blocks_section?.section_title}
                            headText={six_blocks_section?.section_sub_title}
                        />
                    </Stack>

                    {six_blocks_section?.six_blocks?.standard_block?.length > 0 ?
                        <Stack as="div" className="tab--content--block benefits--block mt-16" wrap direction="row" rowGap={32} columnGap={32}>
                            {six_blocks_section?.six_blocks?.standard_block?.map((data: any) => {
                                return (
                                    <Card key={data?._metadata?.uid} bordered className="card--block" highlightOnHover>
                                        <Stack direction="row" vAlign="start" columnGap={24}>
                                            {data.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(data.input_svg_icon_code_if_required_)} /> :
                                                <Stack as="div" className="card--icon">
                                                    <img src={data.image?.url} alt="Card Icon" />
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