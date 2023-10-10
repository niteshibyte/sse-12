import { Card,  Stack, Text } from "@wonderflow/react-components";
export const CardBlock = (props: any) => {
    return (
        <>
            <Card className="card--block" bordered highlightOnHover padding={false}>
                <Stack as="div" className="card--wrapper">
                    <Stack as="div" rowGap={16} className="card--body" vPadding={24} hPadding={24}>
                        {props.cardImage &&
                            <Stack as="div" className="card--image">
                                <img src={props.cardImage} alt="Card Image" />
                            </Stack>
                        }
                        {props.semiTitle &&
                            <Text as="h5" variant="heading-3" textAlign="start">
                                {props.semiTitle}
                            </Text>
                        }
                        {props.semiTitleRed &&
                            <Text as="h5" variant="heading-3" textAlign="start" className="text--red">
                                {props.semiTitleRed}
                            </Text>
                        }

                        {props.paraBlock &&
                            <Text as="p" variant="body-1" textAlign="start" className="mt-4">
                                {props.paraBlock}
                            </Text>
                        }
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}
