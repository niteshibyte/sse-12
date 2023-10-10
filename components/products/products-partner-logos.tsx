import { Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";
type config = {
    show: 8 | 5 | 3 | 2;
}
export const ProductsPartnerLogo = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        xs: { show: 2 },
        sm: { show: 3 },
        md: { show: 5 },
        lg: { show: 8 },
        xl: { show: 8 },
        fallback: { show: 8 }
    })

    const { pageProductData } = useSelector((state: any) => state.blogData);
    return (
        <>
            <Container dimension="extra-large" className="mt-128 product-page-partner-logos">
                <Container dimension="full">
                    <Stack as="div" hPadding={64}>
                        <Stack direction="column" hAlign="center" as="div">
                            <Text as="p" className="fs-18">{pageProductData?.partner_logos?.length != 0 && pageProductData?.partner_logos[0]?.heading}</Text>
                        </Stack>
                        <Stack as="div" className="partner--logos--list mt-4">
                            {pageProductData?.partner_logos?.length != 0 ?
                                <Carousel autoSwipe={1500} show={value.show} slide={1} transition={0.5}>
                                    {pageProductData?.partner_logos[0]?.file?.length > 0 && pageProductData?.partner_logos[0]?.file?.map((data: any, index: number) => {
                                        return (
                                            <Stack key={index} as="div">
                                                <Text as="a" href="#">
                                                    <img src={data.url} alt="Partner Logo" />
                                                </Text>
                                            </Stack>
                                        );
                                    })}
                                </Carousel>
                                :
                                <NoDataFound />
                            }
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}