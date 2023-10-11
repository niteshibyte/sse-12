import { Carousel } from "@trendyol-js/react-carousel";
import { Container, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const MegaMenuFooter = () => {
    const router=useRouter()
    const { header } = useSelector((state: any) => state)
    return (
        <Container dimension="full" padding={false} className="mega--menu--footer mt-10">
            {/* Circle Images */}
            <Stack className="circle--highlight circle-left-top">
                <img src="/red-circle.png" alt="Red Circle" />
            </Stack>
            <Stack className="circle--highlight circle-right-bottom">
                <img src="/red-circle.png" alt="Red Circle" />
            </Stack>

            {header?.bottom_bar_menu && <Container dimension="extra-large">
                <Container dimension="full" padding={false}>
                    <Stack direction="row" wrap hPadding={24} hAlign="space-between" vAlign="center" columnGap={32} rowGap={32}>
                        <Stack as="div" className="mega-footer-icon">
                            <Carousel useArrowKeys={false} autoSwipe={1000} show={1} slide={1} transition={2}>

                                {header?.bottom_bar_menu?.partner_images_for_vslider?.length > 0 && header?.bottom_bar_menu?.partner_images_for_vslider?.map((item: any,index:number) => {
                                    return (
                                        <img key={index} src={item?.url} alt="Footer Image" />
                                    )
                                })}
                            </Carousel>


                        </Stack>
                        <Text as="h3" variant="heading-3">{header?.bottom_bar_menu?.plain_title_text} <Text as="span" variant="heading-3">{header?.bottom_bar_menu?.highlighted_text}</Text></Text>
                        <Stack maxWidth="fit-content" as="div" hAlign="end">
                            <Link href={changeUrl(router.query.lang,header?.bottom_bar_menu?.button_url?.href)}><a className="primaryBtn button">{header?.bottom_bar_menu?.button_url?.title}</a></Link>
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </Container>
    );
}