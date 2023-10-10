import { Button, Container, Stack, Text, List } from "@wonderflow/react-components";
import Link from "next/link";
import { MegaMenuFooter } from "./mega-menu-footer";
import { useDispatch } from "react-redux";
import { SETSELECTEDDATA } from "../../../reducer/selectedData";
import { useSelector } from "react-redux";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";

export const ResourceMenu = (props: any) => {
    const dispatch = useDispatch()
    const router=useRouter()
    const selectedData: any = useSelector((state: any) => state?.selectedData)
    const { header } = useSelector((state: any) => state)
    const { item } = props;
    return (
        <>
            <Container dimension="full" padding={false} className="mega--menu--list">
                <Stack as="div" direction="column" rowGap={64}>
                    <Container dimension="extra-large">
                        <Stack as="div" direction="row" wrap vAlign="start" columnGap={24} rowGap={24} hPadding={24} className="mobile-resources-menu-block">
                            <Stack as="div" className="resources-menu-block-image">
                                {header?.resources_side_section && <Stack as="div" className="resources-menu-block-image-link">
                                    <Stack as="div" hPadding={24} vPadding={24} rowGap={24}>
                                        <List className="sub-mega-menu--list">
                                            <List.Li>
                                                <Stack as="div" direction="row" className="icon__logo">
                                                    <img src={header?.resources_side_section?.icon?.url} alt="Icon" />
                                                    {header?.resources_side_section?.title}
                                                </Stack>

                                            </List.Li>
                                        </List>
                                        <Text as="p" variant="body-1">{header?.resources_side_section?.description}</Text>
                                        <Stack as="div" hAlign="start">
                                            <Link href={changeUrl(router.query.lang,header?.resources_side_section?.buttons?.href)   }>
                                                <Button kind='secondary' dimension="big"  >{header?.resources_side_section?.buttons?.title}</Button>

                                            </Link>

                                        </Stack>
                                    </Stack>
                                    <Stack as="div" className="stack--image">
                                        <img src={header?.resources_side_section?.image?.url} alt="Block Image" />
                                    </Stack>
                                </Stack>}
                            </Stack>
                            <Stack as="div" direction="row" wrap vAlign="start" columnGap={24} rowGap={24} className="resources-menu-block">
                                {item?.sub_menu?.length > 0 && item?.sub_menu?.map((data: any, index: number) => {
                                    return (
                                        <Stack onClick={() => {

                                            if (data?.url?.href == '/blog') {
                                                dispatch(SETSELECTEDDATA({ ...selectedData, 'blogTag': 'Customer interviews' }))
                                            }
                                            props.setShowMegaMenu('')
                                        }} as="div" className="resorces-menu-list">
                                            <Link href={changeUrl(router.query.lang,data?.url?.href) }>
                                                <a>
                                                    <Stack as="div" direction="column" vPadding={24} hPadding={24}>
                                                        <Text as="p" className="fs-18 text--bold">{data?.title}</Text>
                                                        <img src={data?.menu_icon?.url} alt="m-res image" />
                                                    </Stack>
                                                </a>
                                            </Link>
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>
                    </Container>
                    <MegaMenuFooter />
                </Stack>
            </Container>
        </>
    );
}