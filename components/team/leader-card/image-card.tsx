import {  Stack, Text } from "@wonderflow/react-components";
import TeamViewModal from "../team-view-modal";
export const ImageCard = (props:any) => {
    return(
        <Stack className="card--container" rowGap={8} columnGap={32}>
            {props.cardImage &&
                <Stack direction="row" fill wrap as="div" className="media__item">
                    <img src={props.cardImage} alt="Card Image" />
                </Stack>
            }
            <Stack as="div" vAlign="center" direction="row" className="card--body" vPadding={16} hPadding={16}>
                <Stack as="div" className="left--content" rowGap={4}>
                    {props.cardTitle &&
                        <Text as="h4" variant="heading-4" >{props.cardTitle}</Text>
                    }
                    {props.designation &&
                        <Text as="p" variant="body-1" className="">{props.designation}</Text>
                    }
                </Stack>
                {props.socialLink &&
                    <Stack as="div" className="right--content">
                        <Text as="a" className="social--link" href={props?.linkedin_url?.href}>
                            {props.socialLink}
                        </Text>
                    </Stack>
                }
            </Stack>
            {props.cardButton &&
                <Stack direction="column" hAlign="start" vAlign="center" hPadding={16}>
                    <TeamViewModal item={props?.item} />
                </Stack>
            }
        </Stack>
    );
}