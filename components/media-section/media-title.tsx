import htmlToTextConvert from "../../helper/htmlToTextConvert";
import { Stack, Text } from "@wonderflow/react-components";

export const MediaTitle = (props:any) =>{
    return(
        <>
            <Stack as="div" className="media--title--group">
                {props.mediaSmallTitle &&
                    <Text as="p" variant="subtitle-1" textAlign="start" className="uppercase">{props.mediaSmallTitle}</Text>
                }
                {props.mediaMainTitle &&
                    <Text as="h1" variant="display-4">{props.mediaMainTitle}</Text>
                }
                {props.mediaParaTitle &&
                    <Text as="p" variant="tagline-2" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaParaTitle)} /></Text>
                }
            </Stack>
        </>
    )
}