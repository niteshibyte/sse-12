'use client';
import { Container, Stack, Text, List, Tooltip } from "@wonderflow/react-components";

export const BreadCrumb = (props: any) => {
    return (
        <Container dimension="extra-large" className="mt-10 pt--60">
            <Container dimension="full" padding={false}>
                <Stack hPadding={24} direction='row' wrap columnGap={64} rowGap={32}>
                    <Stack as="div" wrap className="site--breadcrumbs">
                        <List>
                            <List.Li>
                                <Text as="a" href="/">
                                    <Tooltip trigger={<img src="/home.svg" alt="home icon" />}>Home</Tooltip>
                                </Text>
                            </List.Li>
                            <List.Li>
                                {props.folderName &&
                                    <Text as="a" variant="body-2" href="#">{props.folderName}</Text>
                                }
                            </List.Li>
                            <List.Li>
                                {props.fileText &&
                                    <Text as="span">{props.fileText}</Text>
                                }
                            </List.Li>
                        </List>
                    </Stack>
                </Stack>
            </Container>
        </Container>
    )
}