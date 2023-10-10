import { Avatar, Card, List, Stack, Text } from "@wonderflow/react-components";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";

export const AnalystCardContent = (props: any) => {
    return (
        <>
            
            <Stack as="div" direction="column" rowGap={64} className="articles--block">
                <Card className="card--block" bordered padding={false} highlightOnHover>
                    <Stack direction="row" wrap as="div" vAlign="center">
                        {props.cardImage &&
                            <Stack as="div" className="card--image">
                                <img src={props.cardImage} alt="Card Image" />
                            </Stack>
                        }
                        <Stack as="div" direction="column" rowGap={16} className="card--body" vPadding={24} hPadding={32}>
                            {props.cardSmallTitle &&
                                <Text as="p" variant="subtitle-2" className="uppercase">{props.cardSmallTitle}</Text>
                            }
                            {props.semiTitle &&
                                <Text as="h5" variant="heading-5" textAlign="start">
                                    {props.semiTitle}
                                </Text>
                            }
                            {props.para &&
                                <Text as="p" variant="body-1"><div dangerouslySetInnerHTML={props?.para?.length>200? htmlToTextConvert(props.para.substr(0, 200) + '...'):htmlToTextConvert(props.para)} /></Text>
                            }
                            {props.userLists &&
                                <List className="user--lists">
                                   {props?.userLists?.map((item:any)=>{
                                    return(
                                        <List.Li>
                                        <Text as="a" href="#">
                                        <Avatar dimension="big" src={item?.profile_avatar?.url} alt="user image" />
                                        </Text>
                                    </List.Li>
                                    )
                                   })}
                                   
                                    
                                </List>
                            }
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        </>
    )
}