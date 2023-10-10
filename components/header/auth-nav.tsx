import { Button, Stack, Text, Popover, Menu, } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authNav } from "../../interface/header";
import Link from "next/link";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
export const AuthMenu = () => {
    const [data, setData] = useState<authNav>()
    const header = useSelector((state: any) => state?.header);
    useEffect(() => {
        setData(header)
    }, [header])
    return (
        <Stack direction="row" vAlign="center" hAlign="center" fill={false} columnGap={8} className="site--auth-menu desktop--btn">
            <Link href={data?.login?.href || "/"}>
                <Button dimension="big" kind="flat" className="auth-menu-flat">{data?.login?.title}</Button>

            </Link>

            <Popover trigger={<Button dimension="big" kind="secondary">{data?.call_us}</Button>} className="custom_dropdown">
                <Menu className="dropdown_content">
                    {data?.call_us_group && data?.call_us_group?.length > 0 && data?.call_us_group?.map((item: any, i: number) => {
                        return (< >

                            <Stack as="div" className="country__list" direction="row" vAlign="center" columnGap={16}>
                                <Stack as="div" vAlign="center" className="flagImage">
                                    <div dangerouslySetInnerHTML={htmlToTextConvert(item.svg_flag_icons)} />
                                </Stack>
                                <Stack as="a" href={`tel:${item?.country_code} ${item?.country_number}`} className="country__name">

                                    <Text as="span"><Text as="span" className="body-2 text-normal">{item?.country_code}</Text> {item?.country_name}</Text>
                                    <Text as="span" className="fs-18 text--bold">{item?.country_number}</Text>

                                </Stack>
                            </Stack>

                        </>);
                    })}
                </Menu>
            </Popover>
            <Link href={data?.demo_request?.href || "/demo"} as={data?.demo_request?.href || "/demo"}>
                <Button kind="primary" dimension="big"  >{data?.demo_request?.title}</Button>
            </Link>
        </Stack>
    );
};