import { Avatar, Card, List, Stack, Text } from "@wonderflow/react-components";
export const CardSlider = (props: any) => {
    return (
        <>
            <Card className="" padding={false}>
                <Stack as="div" className="card--wrapper">
                    {props.cardImage &&
                        <Stack as="div" className="card--image">
                            <img src={props.cardImage} alt="Card Image" />
                        </Stack>
                    }
                    <Stack as="div" className="card--body" vPadding={24} hPadding={32}>
                        {props.cardSmallTitle &&
                            <Text variant="body-2" textAlign="start" className="uppercase">
                                {props.cardSmallTitle}
                            </Text>
                        }
                        {props.semiTitle &&
                            <Text as="h5" variant="heading-5" textAlign="start">
                                {props.semiTitle?.length > 30 ? props?.semiTitle?.substr(0, 25) + '...' : props?.semiTitle}
                            </Text>
                        }

                        {props.paraBlock &&
                            <Text as="p" variant="body-1" textAlign="start">
                                {props?.paraBlock}
                            </Text>
                        }

                        {props.userLists &&
                            <List className="user--lists">
                                {props?.userLists?.speaker?.length > 0 && props?.userLists?.speaker?.map((item: any) => {
                                    return (
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <Avatar dimension="big" src={item?.profile_avatar
                                                    ?.url} alt="user image" />
                                            </Text>
                                        </List.Li>
                                    )
                                })}

                            </List>
                        }
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}
