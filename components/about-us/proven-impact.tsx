import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";


export const ProvenImpact = () => {
    const { about }: any = useSelector((state) => state)

    return (
        <>
            {about && about?.nine_block_section && <>
                <Container dimension="extra-large" className="mt-128">
                    <Container dimension="full" padding={false}>
                        <Stack as="div" rowGap={64} hPadding={24}>
                            <Stack as="div" className="full--headings">
                                <SectionHead
                                    title={about?.nine_block_section?.section_title}
                                    headText={about?.nine_block_section?.section_sub_title}
                                />
                            </Stack>
                            <Stack as="div" className="tab--content--block benefits--block mt-16" wrap direction="row" rowGap={32} columnGap={32}>

                                {about?.nine_block_section?.nine_blocks && about?.nine_block_section?.nine_blocks?.standard_block
                                    ?.length > 0 && about?.nine_block_section?.nine_blocks?.standard_block
                                        ?.map((item: any, index: number) => {
                                            return (
                                                <Card key={index} bordered className="card--block" highlightOnHover>
                                                    <Stack direction="row" vAlign="center" columnGap={24}>
                                                        {item?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(item.input_svg_icon_code_if_required_)} /> : <Stack as="div" className="card--icon">
                                                            <img src={item?.image?.url} alt="Card Icon" />
                                                        </Stack>}
                                                        <Stack as="div" className="card--body">
                                                            <Text as="h5" variant="heading-3">{item?.title}</Text>
                                                        </Stack>
                                                    </Stack>
                                                </Card>
                                            )
                                        })}
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}