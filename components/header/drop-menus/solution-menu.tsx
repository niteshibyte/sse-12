import { Button, Container, List, Stack, Text } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import Link from "next/link";
import { MegaMenuFooter } from "./mega-menu-footer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { changeUrl } from "../../../helper/ChangeLanguage";

export const SolutionMenu = (props: any) => {
    const { header } = useSelector((state: any) => state)
    const router=useRouter()
    const { item } = props;
    return (
        <>
            <Container dimension="full" padding={false} className="mega--menu--list">
                <Stack as="div" direction="column" rowGap={64}>
                    <Container dimension="extra-large">
                        <Stack as="div" direction="row" wrap vAlign="start" columnGap={48} rowGap={48} hPadding={24}>
                            <Stack as="div" direction="row" wrap vAlign="start" rowGap={48} columnGap={48} className="product--menu--list">
                                {item?.sub_menu?.length > 0 && <Stack as="div" direction="column" rowGap={24} className="mega--menu--block">
                                    <List className="sub-mega-menu--list">
                                        <List.Li>
                                            <img src={item?.sub_menu[0]?.menu_icon?.url} alt="Icon" />
                                            {item?.sub_menu[0]?.title}

                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">{item?.sub_menu[0]?.description}</Text>
                                    <List className="sub-menu-has-drop-menu">
                                        {item?.sub_menu[0]?.sub_menu?.length > 0 && item?.sub_menu[0]?.sub_menu?.map((data: any, index: number) => {
                                            return (
                                                <List.Li>
                                                    <Link href={changeUrl(router.query.lang,`/departments/${data?.url?.href?.split('/')[2]}`) }>
                                                        {data?.url?.title}
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
                                        {
                                            item?.sub_menu[1]?.sub_menu?.length > 0 && item?.sub_menu[1]?.sub_menu?.map((data: any, index: number) => {
                                                return (
                                                    <List.Li>
                                                        <Link href={changeUrl(router.query.lang,`/industries/${data?.url?.href?.split('/')[2]}`) }>
                                                            {data?.url?.title}
                                                        </Link>
                                                    </List.Li>
                                                )
                                            })
                                        }


                                    </List>
                                </Stack>}

                                {item?.sub_menu?.length > 0 && <Stack as="div" className="mega--menu--block">
                                    <List>
                                        <List.Li>

                                            <img src={item?.sub_menu[2]?.menu_icon
                                                ?.url} alt="Icon" />
                                            {item?.sub_menu[2]?.title}

                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">{item?.sub_menu[2]?.description}</Text>
                                    <Stack as="div" hAlign="start">
                                        <Link href={changeUrl(router.query.lang,item?.sub_menu[2]?.url?.href) }>
                                            <Button kind='secondary' dimension="big"  >{item?.sub_menu[2]?.url?.title}</Button>

                                        </Link>

                                    </Stack>
                                </Stack>}
                            </Stack>

                            <Stack as="div" className="product--video--block full--carousel--slider">
                                <Carousel useArrowKeys={false} autoSwipe={1000} show={1} slide={1} transition={2}>
                                    {header?.solution_side_ss?.reference?.length > 0 && header?.solution_side_ss?.reference?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div" className="mb-carosuel--item">
                                                <Link href={changeUrl(router.query.lang,`/resources/success-story${item?.url}`) }>
                                                    <a>
                                                        <Stack as="div" className="stack--image">
                                                            <img src={item?.hero_image?.url} alt="Slider Image" />
                                                        </Stack>

                                                        <Stack as="div" hPadding={16} vPadding={16}>
                                                            <Text as="h5" variant="heading-5" className="text--bold">{item?.title}</Text>
                                                        </Stack>
                                                    </a>
                                                </Link>
                                            </Stack>
                                        )
                                    })}

                                </Carousel>
                            </Stack>
                        </Stack>
                    </Container>

                    <MegaMenuFooter />
                </Stack>
            </Container>
        </>
    );
}