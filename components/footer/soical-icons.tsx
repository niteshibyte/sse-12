import { List, Stack,  Tooltip } from "@wonderflow/react-components";

export const SocialIcons = (props: any) => {
    return (
        <Stack className="social--icons">
            <List>
                {props?.social_share?.length > 0 && props?.social_share?.map((item: any, index: number) => {
                    return (
                        <>
                             <List.Li key={index}>
                             <a href={item?.link?.href}>
                                 <Tooltip trigger={<img src={item?.icon?.url} alt={item?.title} />}>
                                     {item?.link?.title}
                                 </Tooltip>
                             </a>
                         </List.Li>
                        </>
                    )
                })} 

            </List>
        </Stack>
    );
};