import { Container, List, Stack, Text } from "@wonderflow/react-components";
import { useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import BookDemoForm from "./book-demo-form";
type config = {
    direction: "row" | "column";
    hPadding: "24";
    vPadding: "32" | "64" | "128";
}
export const BookDemo = () => {
    const { matches, value } = useBreakpointsConfig<config>({
        md: { direction: "row", hPadding: "24", vPadding: "64" },
        lg: { direction: "row", hPadding: "24", vPadding: "128" },
        xl: { direction: "row", hPadding: "24", vPadding: "128" },
        fallback: { direction: "column", hPadding: "24", vPadding: "32" },
    });
    
    const { section_six }: any = useSelector((state: any) => state?.homeData)
    return (
        <>
            {section_six && <>
                <Container dimension="full" padding={false} className="bg--dark overflow-hidden">
                    <Container dimension="extra-large">
                        <Stack as="div" hPadding={value.hPadding} vPadding={value.vPadding}>
                            <Stack direction={value.direction} wrap vAlign="center" hAlign="space-between" rowGap={48} columnGap={176} className="webform-section" data-aos="zoom-in" data-aos-duration="1000">
                                <Stack className="circle--highlight circle-left-top">
                                    <img src="/red-circle.png" alt="Red Circle" />
                                </Stack>
                                <Stack className="circle--highlight circle-right-bottom">
                                    <img src="/red-circle.png" alt="Red Circle" />

                                </Stack>
                                <Stack as="div" className="webform--content">

                                    <Text as="h6" variant="heading-1" className="fs-48"><div dangerouslySetInnerHTML={htmlToTextConvert(section_six?.highlighted_text)} /></Text>
                                    <Text variant="tagline-2" className="mt-8 text--normal">{section_six?.key_points_title}</Text>
                                    <List>
                                        {section_six?.key_points && section_six?.key_points?.length > 0 && section_six?.key_points?.map((item: any, index: number) => {
                                            return (
                                                <List.Li key={index}>
                                                    <Stack as="div" direction="row" vAlign="center" columnGap={16}>
                                                        <Stack className="icon--image">
                                                            <img src={item?.icon?.url} alt="icon" />
                                                        </Stack>
                                                        <Text as="p">{item?.keypoint}</Text>
                                                    </Stack>
                                                </List.Li>
                                            )
                                        })}
                                    </List>
                                </Stack>
                                <Stack as="div" className="webform--form--block form">
                                    <BookDemoForm />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
};