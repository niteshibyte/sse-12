import { List, Stack, Button, Drawer, OverlayContainer, useOverlayContext, Text, useSSR, Popover, Menu, IconButton, Select } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProductMenu } from "./drop-menus/product-menu";
import Link from "next/link";
import { mainNav } from "../../interface/header";
import { SolutionMenu } from "./drop-menus/solution-menu";
import { ResourceMenu } from "./drop-menus/resources-menu";
import { CompanyMenu } from "./drop-menus/company-menu";
import { BecomeOurPartner } from "./drop-menus/become-our-partner";
export const MobileMenu = () => {
    const language = [{
        lang: 'en-us',
        title: 'English'
    }, {
        lang: 'fr',
        title: 'French'
    },
    {
        lang: 'es',
        title: 'Spanish'
    }
    ];
    const [visible, setVisible] = useState<boolean>(false);

    const { isBrowser } = useSSR()
    const [data, setData] = useState<any>()
    const header: any = useSelector((state: any) => state?.header);
    const flag = ["/uk-flag.png", "/netherlands.png", "/us.png", "/italy.png", "/us.png"]
    const [showMegaMenu, setShowMegaMenu] = useState('');
    useEffect(() => {
        setData(header)
    }, [header])
    const onClick = (e: string) => {
        if (e == showMegaMenu) {
            setShowMegaMenu('')
            document.body.classList.remove("mega--menu--open");
        } else {
            setShowMegaMenu(e)
            document.body.classList.add("mega--menu--open");
        }
    };
    const getComponent = (data: string, item: any) => {
        switch (data) {
            case '/product':

                return <ProductMenu setShowMegaMenu={setShowMegaMenu} item={item} />
            case "/solutions":
                return <SolutionMenu setShowMegaMenu={setShowMegaMenu} item={item} />

            case '/resources':
                return <ResourceMenu setShowMegaMenu={setShowMegaMenu} item={item} />

            case '/company':
                return <CompanyMenu setShowMegaMenu={setShowMegaMenu} item={item} />


            default:
                return null
        }
    }

    useEffect(() => {
        setData(header)
    }, [header])
    const handleClick = (e: any) => {

        localStorage.setItem('lang', e.target.value)
        location.reload();
    }
    return (
        <>
            {isBrowser && <>
                <Stack as="div" direction="row" vAlign="center" columnGap={8} className="mobile--menu--options">

                    <Popover trigger={

                        <IconButton>
                            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.308 14.188 13.167 16.3a17.38 17.38 0 0 1-3.092-2.375A17.61 17.61 0 0 1 7.7 10.832l2.11-2.141A.918.918 0 0 0 10 7.686L7.8 2.558a.918.918 0 0 0-1.078-.525L2.688 3.1A.919.919 0 0 0 2 4.016a19.4 19.4 0 0 0 5.49 12.493A19.4 19.4 0 0 0 19.986 22a.915.915 0 0 0 .917-.687l1.066-4.036a.917.917 0 0 0-.524-1.078L16.315 14a.916.916 0 0 0-1.007.188Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent" /></svg>
                        </IconButton>
                    } className="custom_dropdown">
                        <Menu className="dropdown_content">
                            {header?.call_us_group && header?.call_us_group?.length > 0 && header?.call_us_group?.map((item: any, i: number) => {
                                return (< >
                                    <Stack key={i} as="div" className="country__list" direction="row" vAlign="center" columnGap={16}>
                                        <Stack as="div" className="flagImage">
                                            <img src={flag[i]} />
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
                    <IconButton kind="secondary" icon={"bars"} className="menu--btn toggle--btn" onClick={() => setVisible(!visible)}>
                    </IconButton>
                </Stack>
                <OverlayContainer obfuscate={false} onClose={() => setVisible(false)}>
                    {visible &&
                        <Drawer className="drawer--mobile" maxWidth={false}>
                            <Stack as="div" direction="row" columnGap={16} vAlign="center" hAlign="space-between" className="top--drawer--mobile">
                                <Stack className='site--logo'>
                                    <img alt="site--logo" src="/logo-dark.png" />
                                </Stack>
                                <Stack as="div" direction="row" columnGap={8} vAlign="center" hAlign="end" className="drop--menu--auth--icons">
                                    <Popover trigger={

                                        <IconButton>
                                            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.308 14.188 13.167 16.3a17.38 17.38 0 0 1-3.092-2.375A17.61 17.61 0 0 1 7.7 10.832l2.11-2.141A.918.918 0 0 0 10 7.686L7.8 2.558a.918.918 0 0 0-1.078-.525L2.688 3.1A.919.919 0 0 0 2 4.016a19.4 19.4 0 0 0 5.49 12.493A19.4 19.4 0 0 0 19.986 22a.915.915 0 0 0 .917-.687l1.066-4.036a.917.917 0 0 0-.524-1.078L16.315 14a.916.916 0 0 0-1.007.188Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent" /></svg>
                                        </IconButton>
                                    } className="custom_dropdown">
                                        <Menu className="dropdown_content">
                                            {header?.call_us_group && header?.call_us_group?.length > 0 && header?.call_us_group?.map((item: any, i: number) => {
                                                return (
                                                    <Stack key={i} as="div" className="country__list" direction="row" vAlign="center" columnGap={16}>
                                                        <Stack as="div" className="flagImage">
                                                            <img src={flag[i]} />
                                                        </Stack>
                                                        <Stack as="a" href={`tel:${item?.country_code} ${item?.country_number}`} className="country__name">

                                                            <Text as="span"><Text as="span" className="body-2 text-normal">{item?.country_code}</Text> {item?.country_name}</Text>
                                                            <Text as="span" className="fs-18 text--bold">{item?.country_number}</Text>

                                                        </Stack>
                                                    </Stack>
                                                );
                                            })}


                                        </Menu>
                                    </Popover>

                                    <IconButton kind="secondary" icon={"xmark"} className="menu--btn toggle--btn cross" onClick={() => setVisible(false)}></IconButton>
                                </Stack>
                            </Stack>
                            <List className="site--menu mobile--menu">
                                <Stack className='Language'>
                                    <Select defaultValue={`${localStorage.getItem('lang')}`} onChange={(e) => handleClick(e)}>

                                        {language?.map((item: any,index:number) => {

                                            return (
                                                <option key={index} value={item.lang}>
                                                    {item.title}
                                                </option>
                                            )
                                        })}


                                    </Select>
                                </Stack>
                                {data?.main_menu && data?.main_menu?.length > 0 && data?.main_menu?.map((item: any,i:number) => {
                                    return (
                                        <List.Li key={i} className={showMegaMenu == item?.title ? "has--drop--menu active--mega--menu" : "has--drop--menu"}>

                                            {item?.sub_menu?.length > 0 ? <Text variant="body-1" as="a" href="#" onClick={(e) => onClick(item?.title)}>
                                                {item?.title}
                                            </Text> : <Link href={`${item?.url}`}>
                                                {item?.title}
                                            </Link>}
                                            {getComponent(item?.url, item)}

                                        </List.Li>
                                    );
                                })}
                            </List>

                            <Stack as="div" className="mobile--menu--bottom--button">
                                <Link href="#">Request a demo</Link>
                            </Stack>
                        </Drawer>
                    }
                </OverlayContainer>
            </>}
        </>
    );
}