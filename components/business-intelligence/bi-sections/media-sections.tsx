import {  List, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import { PopupButton } from "../../common-blog-section/popup-button";

type config = {
    variant: "heading-2" | "display-3";
}
export const MediaSections = (props: any) => {
    const { matches, value } = useBreakpointsConfig<config>({
        md: { variant: "display-3" },
        lg: { variant: "display-3" },
        xl: { variant: "display-3" },
        fallback: { variant: "heading-2" },
    })
    return (
        <Stack className={props.mediaClass} direction="row" vAlign="center" wrap rowGap={32} columnGap={80}>
            {props.mediaImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.mediaImage} alt="Media Image" />
                </Stack>
            }
            <Stack as="div" direction="column" rowGap={24} className="media--body">
                {props.mediaSmallTitle &&
                    <Text as="p" variant="body-2">{props.mediaSmallTitle}</Text>
                }
                {props.mediaTitle &&
                    <Text as="h3" variant={value.variant}><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaTitle)} /></Text>
                }
                {props.mediaText &&
                    <Text as="p" variant="tagline-2" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaText)} /></Text>
                }
                {props.keypoint?.length > 0 &&
                    <List className="checkList">
                        {props?.keypoint?.map((item: any) => {
                            return <List.Li vPadding="8" marker="circle-check" markerColor="var(--highlight-green-foreground)" variant="tagline-2">{item.key_point}</List.Li>
                        })}

                    </List>
                }
                <Stack as="div" className="grid2" direction="row" vAlign="start">
                    {props.mediaPropsPara && <Stack className="propsBlock green" rowGap={8} >
                        <Text as="p"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaPropsPara)} /></Text>
                        <Stack as="div" rowGap={8} columnGap={8} wrap className="mt-6" direction="row">
                            {props.mediaList && props.mediaList?.map((item: any) => {
                                return <Text as="span" textAlign="center">{item}</Text>
                            })

                            }
                        </Stack>
                    </Stack>}
                    {props.mediaConsPara && <Stack className="propsBlock red" rowGap={8} >
                        <Text as="p"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaConsPara)} /></Text>
                        <Stack as="div" rowGap={8} columnGap={8} wrap className="mt-6" direction="row">
                            {props.mediaListCons && props.mediaListCons?.map((item: any) => {
                                return <Text as="span" textAlign="center">{item}</Text>
                            })

                            }
                        </Stack>
                    </Stack>}
                </Stack>
                <Stack as="div" direction='row' className='popupButton'>
                    <PopupButton
                        popupButton={props.mediaButton}
                        title={props?.title}
                        image={props.mediaImage}
                        utm={props?.utm}
                    />
                </Stack>

            </Stack>
        </Stack>
    );
}