import { Avatar, Stack, Text } from "@wonderflow/react-components";

export const Profile = (props: any) => {
    return (
            <Stack as="div" className="profile--group" direction="row" vAlign="center" rowGap={4} columnGap={8}>
                <Stack as="div" className="profile--image" >
                    {props.clientProfile &&
                        <Avatar dimension="big" src={props.clientProfile} alt="Client Profile" />
                    }
                    {props.socialIcon &&
                        <Stack as="div" className="social--icon">
                            {<svg width="16" height="16" viewBox="0 0 24 24"><g clip-path="url(#a)"><path d="M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1ZM7.1 20.5H3.6V9h3.6v11.5h-.1ZM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1Zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>}
                        </Stack>
                    }
                </Stack>
                <Stack as="div" className="profile--detail">
                    {props.userName &&
                        <Text as="h4" variant="heading-5" className="">
                            {props.userName}
                        </Text>
                    }
                    {props.designation &&
                        <Text as="p" variant="body-1">{props.designation}</Text>
                    }
                </Stack>
            </Stack>
    )
}