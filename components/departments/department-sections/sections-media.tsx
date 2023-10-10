import { Button, List, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const DepartmentMediaSections = (props: any) => {
    const router=useRouter()
    return (
        <Stack className={props.mediaClass} direction="row" vAlign="center" wrap rowGap={32} columnGap={96} key={props?.id}>
            {props.mediaImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.mediaImage} alt="Media Image" />
                </Stack>
            }

            <Stack as="div" direction="column" rowGap={32} className="media--body">
                {props.mediaSmallTitle &&
                    <Text as="p" variant="subtitle-2" className="uppercase">{props.mediaSmallTitle}</Text>
                }
                {props.mediaTitle &&
                    <Text as="h1" variant="display-3">{props.mediaTitle}</Text>
                }
                {props.mediaTitleSecond &&
                    <Text as="h6" variant="heading-1">{props.mediaTitleSecond}</Text>
                }
                {props.mediaTitleSmall &&
                    <Text as="h3" variant="heading-2">{props.mediaTitleSmall}</Text>
                }
                {props.mediaText &&
                    <Text as="p" variant="tagline-2" className="mt-8 text--normal"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaText)} /></Text>
                }
                {props.mediaTextSecond &&
                    <Text as="p" variant="body-1" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.mediaTextSecond)} /></Text>
                }
                {props.paraBlock &&
                    <Text as="p" variant="body-1" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.paraBlock)} /></Text>
                }
                {props.paraBlockSemiBold &&
                    <Text as="p" variant="body-1" className="mt-4 text--medium">{props.paraBlockSemiBold}</Text>
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
                        <Link href={changeUrl(router.query.lang,props.mediaButtonHref ? props.mediaButtonHref : "")}>
                            <Button kind={props.mediaButtonClass} dimension="big"  >{props.mediaButton}</Button>
                        </Link>
                    </Stack>
                }
            </Stack>
        </Stack>
    );
}