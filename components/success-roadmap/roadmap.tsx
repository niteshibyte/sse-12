import { Button, Chip, Container, List, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
type config = {
    rowGap: "48" | "64" | "96";
}
export const Roadmap = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {rowGap: "64"},
        lg: {rowGap: "96"},
        xl: {rowGap: "96"},
        fallback: {rowGap: "48"}
    })
    const { section_two }: any = useSelector((state: any) => state?.homeData)
    return (
        <>{
            section_two && <>
                <Container dimension="extra-large">
                    <Stack as="div" hPadding={24} direction="column" rowGap={64}>
                        <SectionHead
                            smallTitle={section_two?.section_short_title}
                            title={section_two?.section_main_title}
                            headText=""
                        />
                        <Stack as="div" direction="column" rowGap={value.rowGap}>

                            {section_two && section_two?.left_right_section_home
                                ?.map((item: any, index: number) => {
                                    return (
                                        <Stack className={(index + 1) % 2 != 0 ? "mediaGap media--item--right" : "mediaGap"} direction="row" vAlign="center" wrap rowGap={32} columnGap={32} data-aos="fade-up" data-aos-duration="500">
                                            <Stack direction="row" fill wrap as="div" className="media__item">
                                                <img src={item?.section_image?.url} alt="Media Image" />
                                            </Stack>
                                            <Stack className="media--body">
                                                <Stack as="div" direction="column" rowGap={16}>
                                                    <Text variant="subtitle-2" className="text-uppercase">{item?.input_one}</Text>
                                                    <Text variant="heading-2" as="h3">{item?.input_two}</Text>
                                                </Stack>
                                                <Stack vPadding={16} className="media--list">
                                                    <Text as="p"><div dangerouslySetInnerHTML={htmlToTextConvert(item?.description)} /></Text>
                                                    <List as="ol">
                                                       
                                                    </List>
                                                </Stack>
                                                <Stack className="media--tags" direction="row" wrap vPadding={16} rowGap={8} columnGap={16}>
                                                    {item?.key_points && item?.key_points?.map((data: any) => {
                                                        return <Chip icon={index == 0 ? "check" : "arrow-up-right"} color="cyan">{data}</Chip>
                                                    })}
                                                </Stack>
                                                <Stack direction="column" hAlign="start" vAlign="center" vPadding={16}>
                                                    <Link href={item?.button_name?.href}>
                                                        <Button kind="secondary" dimension="big">{item?.button_name?.title}</Button>

                                                    </Link>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    )
                                })}
                        </Stack>
                    </Stack>
                </Container>
            </>
        }</>
    );
};