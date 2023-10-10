import { Button, Container, List, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { MegaMenuFooter } from "./mega-menu-footer";
import { useRouter } from "next/router";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const CompanyMenu = (props: any) => {
    const router=useRouter()
    const { item } = props;
    return (
        <>
            <Container dimension="full" padding={false} className="mega--menu--list company-menu">
                <Stack as="div" direction="column" rowGap={64}>
                    <Container dimension="extra-large">
                        <Stack as="div" direction="row" wrap vAlign="center" columnGap={24} rowGap={24} hPadding={24}>
                            {item?.sub_menu?.length > 0 && <Stack as="div" direction="row" vAlign="start" columnGap={24} rowGap={24} className="resources-menu-block">
                                <Stack as="div" direction="column" rowGap={24} hPadding={24} vPadding={24} className="comp--menu--block">
                                    <List className="sub-mega-menu--list">
                                        <List.Li>

                                            <img src={item?.sub_menu[0]?.menu_icon
                                                ?.url} alt="Icon" />
                                            {item?.sub_menu[0]?.title}

                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">{item?.sub_menu[0]?.description}</Text>
                                    {item?.sub_menu[0]?.sub_menu?.length > 0 && item?.sub_menu[0]?.sub_menu?.map((data: any, index: number) => {
                                        return (
                                            <Stack key={index} as="div" hAlign="start">
                                                <Link href={changeUrl(router.query.lang,data?.url?.href) }>
                                                    <Button kind="primary" dimension="big"  >{data?.url?.title}</Button>

                                                </Link>
                                            </Stack>
                                        )
                                    })}
                                    <img src={item?.sub_menu[0]?.image?.url} alt="Company Menu Image" className="comp-img" />
                                </Stack>

                                <Stack as="div" direction="column" rowGap={24} hPadding={24} vPadding={24} className="comp--menu--block">
                                    <List className="sub-mega-menu--list">
                                        <List.Li>

                                            <img src={item?.sub_menu[1]?.menu_icon?.url} alt="Icon" />
                                            {item?.sub_menu[1]?.title}

                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">{item?.sub_menu[1]?.description}</Text>
                                    <Stack as="div" maxWidth="fit-content" direction="row" columnGap={16}>
                                        {item?.sub_menu[1]?.sub_menu?.length > 0 && item?.sub_menu[1]?.sub_menu?.map((data: any, index: number) => {
                                            return (
                                                <Link key={index} href={changeUrl(router.query.lang,data?.url?.href) }>
                                                    <Button kind="secondary" dimension="big"  >{data?.url?.title}</Button>

                                                </Link>

                                            )
                                        })}

                                    </Stack>
                                    <img src={item?.sub_menu[1]?.image?.url} alt="Company Menu Image" />
                                </Stack>
                            </Stack>}

                            <Stack as="div" className="resources-menu-block-image">
                                <Stack as="a" className="resources-menu-block-image-link" href="#">
                                    <Stack as="div" className="stack--image">
                                        <img src="/m-comp-3.png" alt="Block Image" />
                                    </Stack>
                                    <Stack direction="column" rowGap={40} as="div" hPadding={24} vPadding={16}>
                                        <Text as="p" variant="body-1" className="m-comp-image">Browse our job openings and see how you can help us transform customer feedback into growth.</Text>
                                        <Stack as="div" hAlign="start" className="comp--btn--mb">
                                            <Link href={changeUrl(router.query.lang,"/careers")}  >
                                                <Button kind="secondary" dimension="big"  >Explore Careers</Button>
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>

                    <MegaMenuFooter />
                </Stack>
            </Container>
        </>
    );
}