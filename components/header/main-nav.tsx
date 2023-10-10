import { List, Stack, Text } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductMenu } from "./drop-menus/product-menu";
import { SolutionMenu } from "./drop-menus/solution-menu";
import { ResourceMenu } from "./drop-menus/resources-menu";
import { CompanyMenu } from "./drop-menus/company-menu";
import { BecomeOurPartner } from "./drop-menus/become-our-partner";
import Link from "next/link";
import { mainNav } from "../../interface/header";
import { useRouter } from "next/router";
import { ChangeLanguage, changeUrl } from "../../helper/ChangeLanguage";
export const MainNav = () => {
    const [showMegaMenu, setShowMegaMenu] = useState('');
    const [data, setData] = useState<mainNav[]>()
    const router=useRouter()
    const header = useSelector((state: any) => state?.header?.main_menu);
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
            return <ResourceMenu setShowMegaMenu={setShowMegaMenu} item={item}/>

            case '/company':
            return <CompanyMenu setShowMegaMenu={setShowMegaMenu} item={item}/>

            
            default:
                return null
        }
    }
    return (
        <Stack fill={false} columnGap={32} className="site--main--menu">
            <List className="site--menu desktop--menu">
                {data && data?.length > 0 && data?.map((item: any) => {
                    return (
                        <List.Li className={item?.sub_menu?.length == 0 ? "" :
                            showMegaMenu == item?.title ? "has--drop--menu active--mega--menu" : "has--drop--menu"}>
                            {item?.sub_menu?.length > 0 ? <Text variant="body-1" as="a" href="javascript:void(0)" onClick={(e) => onClick(item?.title)}>
                                {item?.title}
                               
                            </Text> : <Link href={changeUrl(router.query.lang,item.url)}>
                                {item?.title}
                            </Link>}
                            {getComponent(item?.url, item)}
                        </List.Li>
                    )
                })}
            </List>
        </Stack>
    );
};