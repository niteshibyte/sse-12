import { Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
type config = {
    variant : "heading-2" | "display-4";
    variant2 : "tagline-1" | "tagline-3";
}
export const SectionHead = (props: any) => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {variant : "display-4", variant2 : "tagline-3"},
        lg: {variant : "display-4", variant2 : "tagline-1"},
        xl: {variant : "display-4", variant2 : "tagline-1"},
        fallback: {variant : "heading-2", variant2 : "tagline-3"},       
    });
    return (
        <Stack direction="column" rowGap={16} className="short--width animate__animated animate__fadeInUp">
            {props.largeTitleForm &&
                <Text as="h2" variant="display-2" textAlign="center" data-aos="fade-up" data-aos-duration="500">
                    {props.largeTitleForm}
                </Text>
            }
            {props.largeTitle &&
                <Text as="h2" variant="display-3" textAlign="center" data-aos="fade-up" data-aos-duration="500">
                    {props.largeTitle}
                </Text>
            }
            {props.smallTitle &&
                <Text variant="subtitle-1" textAlign="center" data-aos="fade-up" data-aos-duration="500">{props.smallTitle}</Text>
            }
            {props.title &&
                <>
                    {props.category && <Text as="h2" variant={value.variant} textAlign="center" data-aos="fade-up" data-aos-duration="500">{props.category}</Text>}

                    <Text as="h2" variant={value.variant} textAlign="center" data-aos="fade-up" data-aos-duration="500">{props.title}</Text>
                    {props.author && <Text as="h2" variant={value.variant} textAlign="center" data-aos="fade-up" data-aos-duration="500">by {props.author}</Text>}

                </>
            }
            {props.underneethSmallTitle &&
                <Text variant="subtitle-1" textAlign="center" data-aos="fade-up" data-aos-duration="500">{props.underneethSmallTitle}</Text>
            }
            {props.headText &&
                <Text textAlign="center" variant="tagline-2" className="mt-8 text--normal" data-aos="fade-up" data-aos-duration="500"><div dangerouslySetInnerHTML={htmlToTextConvert(props.headText)} /></Text>
            }
            {props.secondHeadText &&
                <Text textAlign="center" variant="tagline-2" className="mt-8 text--normal" data-aos="fade-up" data-aos-duration="500"><div dangerouslySetInnerHTML={htmlToTextConvert(props.secondHeadText)} /></Text>
            }
            {props.paraBlock &&
                <Text textAlign="center" variant="body-1" className="mt-8 fs-18" data-aos="fade-up" data-aos-duration="500">{props.paraBlock}</Text>
            }
            {props.mediumTitle &&
                <Text as="p" textAlign="center" className="fs-22 mt-8" data-aos="fade-up" data-aos-duration="500"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediumTitle)} /></Text>
            }
            {props.subTitleForm &&
                <Text as="h4" variant={value.variant2} textAlign="center" className="mt-8 text--normal" data-aos="fade-up" data-aos-duration="500"><div dangerouslySetInnerHTML={htmlToTextConvert(props.subTitleForm)} /></Text>
            }
            {props.miniTitle &&
                <Text as="p" textAlign="center" className="fs-18 mt-8" data-aos="fade-up" data-aos-duration="500"><div dangerouslySetInnerHTML={htmlToTextConvert(props.miniTitle)} /></Text>
            }
            {
                props.paraTitle &&
                <Text as="p" variant="subtitle-1" data-aos="fade-up" data-aos-duration="500">{props.paraTitle}</Text>
            }
        </Stack>
    );
}