import Link from "next/link";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import { Button, List, Stack, Text } from "@wonderflow/react-components";
export const MediaSections = (props: any) => {
    return (
        <Stack className={props.mediaClass} direction="row" vAlign="center" wrap rowGap={32} columnGap={96}>
            {props.mediaImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.mediaImage} alt="Media Image" />
                </Stack>
            }
            <Stack as="div" direction="column" rowGap={24} className="media--body">
                {props.mediaTitle &&
                    <Text as="h2" variant="display-4">{props.mediaTitle}</Text>
                }
                {props.mediaSubTitle &&
                    <Text as="h3" variant="heading-2" className="mt-8">{props.mediaSubTitle}</Text>
                }
                {props.mediaTitleSmall &&
                    <Text as="h2" variant="heading-2">{props.mediaTitleSmall}</Text>
                }
                {props.mediaText &&
                    <Text as="p" variant="tagline-2" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaText)} /></Text>
                }
                {props.mediaParaBlock &&
                    <Text as="p" variant="body-1" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaParaBlock)} /></Text>
                }
                {props.mediaList &&
                    <List>
                        {props.mediaList1 &&
                            <List.Li>{props.mediaList1}</List.Li>
                        }
                        {props.mediaList2 &&
                            <List.Li>{props.mediaList2}</List.Li>
                        }
                        {props.mediaList3 &&
                            <List.Li>{props.mediaList3}</List.Li>
                        }
                    </List>
                }
                {props.mediaButton &&
                    <Stack direction="column" hAlign="start" vAlign="center" className="mt-8">

                        <Link href={props.mediaButtonHref}>
                            <Button kind={props.mediaButtonClass} dimension="big"  >{props.mediaButton}</Button>

                        </Link>
                    </Stack>
                }
            </Stack>
        </Stack>
    );
}