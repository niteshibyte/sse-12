import Link from "next/link";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import { Button, Stack, Text } from "@wonderflow/react-components";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";

export const AboutMedia = (props:any) => {
    const router=useRouter()
    return(
        <Stack className={props.mediaClass} direction="row" vAlign="center" wrap rowGap={32} columnGap={96} key={props?.id}>
            {props.mediaImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.mediaImage} alt="Media Image" />
                </Stack>
            }

            <Stack as="div" rowGap={24} className="media--body">
                <Stack as="div" rowGap={8}>
                    {props.mediaSmallTitle &&
                        <Text as="p" variant="subtitle-2" className="uppercase">{props.mediaSmallTitle}</Text>
                    }
                    {props.mediaTitle &&
                        <Text as="h3" variant="heading-1">{props.mediaTitle}</Text>
                    }
                    {props.mediaText &&
                        <Text as="p" variant="body-1" className="mt-8 text--normal">{props.mediaText}</Text>
                    }
                    {props.paraBlock &&
                        <Text as="p" variant="body-1" className="mt-8"><div dangerouslySetInnerHTML={htmlToTextConvert(props.paraBlock)} /></Text>
                    }
                    {props.paraBlockSemiBold &&
                        <Text as="p" variant="body-1" className="mt-4 text--medium">{props.paraBlockSemiBold}</Text>
                    }
                </Stack>
                {props.mediaButton &&
                    <Stack direction="column" hAlign="start" vAlign="center" className="mt-8">
                         <Link href={changeUrl(router.query.lang,`${props?.mediaButtonHref??"#"}`)}>
                                <Button kind={props?.mediaButtonClass} dimension="big"  >{props.mediaButton}</Button>
                            </Link>
                    </Stack>
                }
            </Stack>
        </Stack>
    );
}