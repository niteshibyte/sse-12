import { Container, Stack, Text } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { useSelector } from "react-redux";

export const PartnerLogo = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.partners?.length > 0 && <>
                <Container dimension="extra-large" className="">
                    <Container dimension="full">
                        <Stack as="div" hPadding={64} rowGap={16}>
                            <Stack direction="column" hAlign="center" as="div">
                                <Text as="p" variant="heading-6" className="">{becomeapartner?.partners[0]?.heading}</Text>
                            </Stack>
                            <Stack as="div" className="partner--logos--list mt-8">
                                {becomeapartner?.partners[0]?.file?.length > 0 ?
                                    <Carousel autoSwipe={1500} show={7.5} slide={1} transition={0.5}>
                                        {becomeapartner?.partners[0]?.file?.map((data: any, index: number) => {
                                            return (
                                                <Stack key={index} as="div">
                                                    <Text as="a" href="#">
                                                        <img src={data?.url} alt="Partner Logo" />
                                                    </Text>
                                                </Stack>
                                            );
                                        })}
                                    </Carousel>
                                    :
                                    <Text as="p" color="danger" textAlign="center">No Data Found</Text>
                                }
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}