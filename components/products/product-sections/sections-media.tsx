import { Button, List, Stack, Text } from "@wonderflow/react-components";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import Link from "next/link";
import { useRouter } from "next/router";
import { changeUrl } from "../../../helper/ChangeLanguage";

export const ProductMediaSections = (props: any) => {
    const router=useRouter()
    return (
        <Stack className={props.mediaClass} direction="row" vAlign="center" wrap rowGap={32} columnGap={96} key={props?.id}>
            {props.mediaImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.mediaImage} alt="Media Image" />
                </Stack>
            }

            <Stack as="div" className="media--body" direction="column" rowGap={16}>
                {props.mediaSmallTitle &&
                    <Text as="p" variant="subtitle-2" className="uppercase"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaSmallTitle)} /></Text>
                }
                {props.mediaTitle &&
                    <Text as="h3" variant="heading-2"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaTitle)} /></Text>
                }
                {props.mediaTitleSmall &&
                    <Text as="h3" variant="heading-2"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaTitleSmall)} /></Text>
                }
                {props.mediaText &&
                    <Text as="p" variant="body-1" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaText)} /></Text>
                }
                {props.mediaTextSmall &&
                    <Text as="p" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaTextSmall)} /></Text>
                }
                {props.mediaList &&
                    <List className="bullet--listing">
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
                    <Stack direction="column" hAlign="start" vAlign="center">
                        <Link href={changeUrl(router.query.lang,props.mediaButtonHref) }>
                            <Button kind={props.mediaButtonClass} dimension="big"  >{props.mediaButton}</Button>

                        </Link>
                       
                    </Stack>
                }
            </Stack>
        </Stack>
    );
}