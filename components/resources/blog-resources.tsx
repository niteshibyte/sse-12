
import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NoDataFound from "../no-data-found/no-data-found";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const BlogResources = (props: any) => {
    const [data, setData] = useState<any>()
    const router=useRouter()
    const headerData = useSelector((state: any) => state?.header)
    useEffect(() => {
        if (headerData) {
            setData(headerData?.main_menu?.filter((item: any) => item?.url == '/resources')[0]?.sub_menu)
        }
    }, [headerData])

    return (
        <>
            {data?.length > 0 && <Container dimension="extra-large" className={props.classCss}>
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    {props?.section&& <SectionHead
                        smallTitle="RESOURCES"
                        title="More from Wonderflow"
                    />}
                    {data?.length > 0 ?
                        <Stack direction="row" columnGap={32} rowGap={32} wrap className="resources--listing">
                            {data?.map((data: any, index: number) => {
                                if(Number(props?.show)>index){
                                    return (
                                        <Card key={index} className="card--block" padding={false} highlightOnHover>
                                            <Link href={changeUrl(router.query.lang,data?.url?.href)}>
                                                <a>
                                                    <Stack direction="row" vAlign="center" columnGap={16} rowGap={16} className="card--data--mblock">
                                                        {data.title &&
                                                            <Stack as="div" className="res--card--content">
                                                                <Text as="h3" variant="heading-5" className="text--bold">{data.title}</Text>
                                                            </Stack>
                                                        }
                                                        {data.menu_icon &&
                                                            <Stack as="div" className="res--card--img">
                                                                <img src={data.menu_icon?.url} alt="Resources Image" />
                                                            </Stack>
                                                        }
                                                    </Stack>
                                                </a>
                                            </Link>
                                        </Card>
                                    );
                                }
                            })}
                        </Stack>
                        :
                        <NoDataFound />
                    }
                </Stack>
            </Container>}
        </>
    );
}