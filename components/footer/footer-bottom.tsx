import { List, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { SocialIcons } from "./soical-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { footerData } from "../../interface/footer";
type config = {
    hAlign: "center" | "space-between";
}
export const FooterBottom = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { hAlign: "center" },
        lg: { hAlign: "space-between" },
        xl: { hAlign: "space-between" },
        fallback: { hAlign: "center" },
    })

    const [footer, setFooter] = useState<footerData>()
    const data = useSelector((state: any) => state?.footer);

    const [showFooterAddMenu, setShowFooterAddMenu] = useState(true);
    const footerAddMenu = () => setShowFooterAddMenu(!showFooterAddMenu);

    useEffect(() => {
        setFooter(data)
    }, [data])
    return (
        <Stack className="footer--bottom--block" wrap direction="row" vAlign="center" hAlign={value.hAlign} vPadding={32} rowGap={16} columnGap={16}>
            <Stack className="copyright-content">
                <Text variant="subtitle-2">{footer?.copyright_text}</Text>
            </Stack>
            <Stack className="footer--utility-menu">
                <List className="desktop--utility--menu">
                    {footer?.after_copyright_menu?.link && footer?.after_copyright_menu?.link?.map((item: any, index: number) => {
                        return (
                            <List.Li key={index}>
                                <a href={item?.href}>{item?.title}</a>
                            </List.Li>
                        )
                    })}
                </List>
                <List className="mobile--utility--menu">
                    <List.Li className={!showFooterAddMenu ? "active--footer--menu" : ""}>
                        <Text as="span" variant="heading-5" onClick={footerAddMenu}>Other Materials</Text>
                        {!showFooterAddMenu &&
                            <List>
                                {footer?.after_copyright_menu?.link && footer?.after_copyright_menu?.link?.map((item: any, index: number) => {
                                    return (
                                        <List.Li key={index}>
                                            <a href={item?.href}>{item?.title}</a>
                                        </List.Li>
                                    )
                                })}
                            </List>
                        }
                    </List.Li>
                </List>
            </Stack>
            <SocialIcons social_share={footer?.social?.social_share} />

        </Stack>
    );
};