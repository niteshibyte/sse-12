import { List, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { footerMenu } from "../../interface/footer";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";

export const FooterMenu = () => {
    const router=useRouter()
    const [footer, setFooter] = useState<footerMenu>()
    const data = useSelector((state: any) => state?.footer);
    
    const [showFooterResMenu, setShowFooterResMenu] = useState(false);
    const footerResMenu = () => setShowFooterResMenu(!showFooterResMenu);
    
    const [showFooterCompMenu, setShowFooterCompMenu] = useState(false);
    const footerCompMenu = () => setShowFooterCompMenu(!showFooterCompMenu);
    
    const [showFooterMngtMenu, setShowFooterMngtMenu] = useState(false);
    const footerMngtMenu = () => setShowFooterMngtMenu(!showFooterMngtMenu);

    useEffect(() => {
        setFooter(data)
    }, [data])
    
    return (
        <Stack className="footer--menu">
            <List className="desktop--footer--menu">
                <List.Li>
                    <Text as="span" variant="heading-5">{footer?.resources_menu?.menu_title}</Text>
                    <List>
                        {footer?.resources_menu  && footer?.resources_menu?.link?.map((item, index: number) => {
                            return (
                                <List.Li key={index}>
                                    <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                </List.Li>)
                        })}
                    </List>
                </List.Li>
                <List.Li>
                    <Text as="span" variant="heading-5">{footer?.company_menu?.menu_title}</Text>
                    <List>
                        {footer?.company_menu && footer?.company_menu?.link?.map((item, index: number) => {
                            return (
                                <List.Li key={index}>
                                    <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                </List.Li>)
                        })}
                    </List>
                </List.Li>
                <List.Li>
                    <Text as="span" variant="heading-5">{footer?.support_menu?.menu_title}</Text>
                    <List>
                        {footer?.support_menu && footer?.support_menu?.link?.map((item, index) => {
                            return (
                                <List.Li key={index}>
                                    <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                </List.Li>)
                            })
                        }
                    </List>
                </List.Li>
            </List>

            <List className="mobile--footer--menu">
                <List.Li className={!showFooterResMenu ? "active--footer--menu" : ""}>
                    <Text as="span" variant="heading-5" onClick={footerResMenu}>{footer?.resources_menu?.menu_title}</Text>
                    {!showFooterResMenu &&
                        <List>
                            {footer?.resources_menu  && footer?.resources_menu?.link?.map((item, index: number) => {
                                return (
                                    <List.Li key={index}>
                                        <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                    </List.Li>)
                                })
                            }
                        </List>
                    }
                </List.Li>
                <List.Li className={showFooterCompMenu ? "active--footer--menu" : ""}>
                    <Text as="span" variant="heading-5" onClick={footerCompMenu}>{footer?.company_menu?.menu_title}</Text>
                    {showFooterCompMenu &&
                        <List>
                            {footer?.company_menu && footer?.company_menu?.link?.map((item, index: number) => {
                                return (
                                    <List.Li key={index}>
                                        <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                    </List.Li>)
                                })
                            }
                        </List>
                    }
                </List.Li>
                <List.Li className={showFooterMngtMenu ? "active--footer--menu" : ""}>
                    <Text as="span" variant="heading-5" onClick={footerMngtMenu}>{footer?.support_menu?.menu_title}</Text>
                    {showFooterMngtMenu &&
                        <List>
                            {footer?.support_menu && footer?.support_menu?.link?.map((item, index) => {
                                return (
                                    <List.Li key={index}>
                                        <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                    </List.Li>)
                                })
                            }
                        </List>
                    }
                </List.Li>
            </List>
        </Stack>
    );
};