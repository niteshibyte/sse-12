import { List, Separator, Stack, Text } from "@wonderflow/react-components";
import { SubscribeForm } from "../subscribe-form/subscribe-form";
import { SocialSharing } from "../social--sharing/social-sharing";
export const LeftSidebar = (props:any) => {
    return(
        <Stack as="div" className="left--sidebar">
            <Stack as="div" className="content--listing--block">
                <Stack as="div" className="right--seprator">
                    <Separator />
                </Stack>
                {props?.data?.length>0 && props?.data?.map((item:any,index:number)=>{
                    return(
                        <Text as="p" className="mt-5 color--dark">{item?.title}</Text>
                    )
                })}
            </Stack>

            <Stack as="div" className="mt-10 sidebar--subscribe--form form--section bg__light">
                <SubscribeForm />
            </Stack>

            <Stack as="div" className="mt-10 social--post title-with-seprator">
                <SocialSharing />
                <Stack as="div" className="middle--seprator">
                    <Separator />
                </Stack>
            </Stack>
        </Stack>
    );
}