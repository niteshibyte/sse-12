import { Container, Stack, Text } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { useSelector } from "react-redux";
export const PartnerLogo = () => {
    const { partners } = useSelector((state: any) => state?.touchpoint)
    return (
        <>{partners && <>
            <Container dimension="extra-large" className="mt-128 product-page-partner-logos">
                <Container dimension="full">
                    <Stack as="div" hPadding={64}>
                        <Stack direction="column" hAlign="center" as="div">
                            <Text as="p" className="fs-18">{partners?.length > 0 && partners[0]?.heading}</Text>
                        </Stack>

                        <Stack as="div" className="partner--logos--list mt-8">
                            <Carousel autoSwipe={1500} show={7.5} slide={1} transition={0.5}>
                                {

                                    partners?.length > 0 && partners[0]?.file?.length > 0 && partners[0]?.file?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div">
                                                <Text as="a" href="#">
                                                    <img src={item?.url} alt="Partner Logo" />
                                                </Text>
                                            </Stack>
                                        )
                                    })
                                }
                            </Carousel>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>}</>
    );
}