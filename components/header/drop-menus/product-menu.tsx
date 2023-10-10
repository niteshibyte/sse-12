import { Button, Container, List, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import Link from "next/link";
import { MegaMenuFooter } from "./mega-menu-footer";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
type config = {
    vAlign: "start" | "center";
    columnGap: "48" | "24";
}
export const ProductMenu = (props: any) => {
    const router=useRouter()
    const { item }: any = props
    const { matches, value } = useBreakpointsConfig<config>({
        lg: { vAlign: "start", columnGap: "24" },
        xl: { vAlign: "start", columnGap: "48" },
        fallback: { vAlign: "start", columnGap: "24" }
    });

    return (
        <>
            {item && <Container dimension="full" padding={false} className="mega--menu--list">
                <Stack as="div" direction="column" rowGap={64}>
                    <Container dimension="extra-large" className="mobile-menu-container">
                        <Stack as="div" direction="row" wrap vAlign={value.vAlign} columnGap={value.columnGap} rowGap={48} hPadding={24} className="mobile--menu--mega-list">
                            <Stack as="div" className="product--video--block">
                                <Stack as="div" className="product--video">

                                    <iframe width="320" height="480" src="https://www.youtube.com/embed/Mo8sV_hx8mg" title="Turn the Voice of the Customer into winning decisions with Wonderflow" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                </Stack>
                                <Stack as="div" vPadding={16} hPadding={24} className="video--content">
                                    <Text as="h5" variant="heading-5" className="text--bold">{item?.video_title}</Text>
                                    <Text as="p" variant="body-1" className="mt-4">{item?.description}</Text>
                                </Stack>
                            </Stack>

                            <Stack as="div" direction="row" wrap vAlign="start" rowGap={16} columnGap={value.columnGap} className="product--menu--list">
                                {item?.sub_menu?.length > 0 && <Stack as="div" direction="column" rowGap={24} className="mega--menu--block">
                                    <Stack as="div" className="menu--image">
                                        <img src="/product-menu-image.png" alt="Menu Icon" />
                                    </Stack>

                                    <Text as="p" variant="body-1">{item?.sub_menu[0]?.description}</Text>
                                    <Stack as="div" direction="column" hAlign="start">
                                        {item?.sub_menu?.length > 0 && <Link href={changeUrl(router.query.lang,item?.sub_menu[0]?.url?.href)  }>
                                            <Button kind="secondary" dimension="big"  >{item?.sub_menu[0]?.url?.title}</Button>

                                        </Link>}

                                    </Stack>
                                    <List className="sub-mega-menu--list">
                                        {item?.sub_menu[0]?.sub_menu?.length > 0 && item?.sub_menu[0]?.sub_menu?.map((data: any, index: number) => {

                                            return (
                                                <List.Li >
                                                    <Link key={data.url?.href}  href={changeUrl(router.query.lang,data?.url?.href) }>
                                                        <a>
                                                            <img src={data?.menu_icon?.url} alt="Icon" />
                                                            {data?.url?.title}
                                                        </a>
                                                    </Link>
                                                </List.Li>
                                            )
                                        })}


                                    </List>
                                </Stack>}

                                {item?.sub_menu?.length > 0 && <Stack as="div" className="mega--menu--block">
                                    <List className="sub-mega-menu--list">
                                        <List.Li>

                                            <img src={item?.sub_menu[1]?.menu_icon?.url} alt="Icon" />
                                            {item?.sub_menu[1]?.title}

                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">{item?.sub_menu[1]?.description}</Text>
                                    <List className="sub-menu-has-drop-menu">
                                        {item?.sub_menu[1]?.sub_menu?.length > 0 && item?.sub_menu[1]?.sub_menu?.map((data: any, index: number) => {
                                            return (
                                                <List.Li>
                                                    <Link href={changeUrl(router.query.lang,`/industries/${data?.url?.href?.split('/')[2]}`) }>
                                                        {data?.url?.title}
                                                    </Link>
                                                </List.Li>
                                            )
                                        })}

                                    </List>
                                </Stack>}

                                {item?.sub_menu?.length > 0 && <Stack as="div" className="mega--menu--block">
                                    <List>
                                        <List.Li>
                                            <Link href={changeUrl(router.query.lang,item?.sub_menu[2]?.url?.href)  }>
                                                <a> <img src={item?.sub_menu[2]?.menu_icon?.url} alt="Icon" />
                                                    {item?.sub_menu[2]?.title}</a>
                                            </Link>
                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1"> {item?.sub_menu[2]?.description}</Text>
                                    <Stack as="div" direction="row" wrap columnGap={16} rowGap={16} className="mega-menu--logos">

                                        {item?.sub_menu[2]?.sub_menu?.length > 0 && item?.sub_menu[2]?.sub_menu?.map((data: any, index: number) => {

                                            return (
                                                <Link href={changeUrl(router.query.lang,data?.url?.href)  }>
                                                    <a>
                                                        <img src={data?.menu_icon?.url} alt="Logo" />
                                                    </a>
                                                </Link>
                                            )
                                        })}


                                    </Stack>
                                </Stack>}
                            </Stack>
                        </Stack>
                    </Container>

                    <MegaMenuFooter />
                </Stack>
            </Container>}
        </>
    );
}