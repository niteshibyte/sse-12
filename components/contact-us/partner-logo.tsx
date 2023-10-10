import { Container, Stack, Text } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { useSelector } from "react-redux";
export const PartnerLogo = () => {
    const { contact }: any = useSelector((state) => state)
    return (
        <>
            {contact && contact?.partners_contactus?.length > 0 && <>
                <Container dimension="extra-large" className="mt-128 product-page-partner-logos">
                    <Container dimension="full">
                        <Stack as="div" hPadding={64}>
                            <Stack as="div" className="partner--logos--list">
                                <Carousel autoSwipe={1500} show={7} slide={1} transition={0.5}>
                                    {contact?.partners_contactus[0]?.file?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div">
                                                <Text as="a" href="#">
                                                    <img src={item?.url} alt="Partner Logo" />
                                                </Text>
                                            </Stack>
                                        )
                                    })}
                                </Carousel>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}