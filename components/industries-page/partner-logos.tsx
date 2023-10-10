
import { Container, Stack, Text } from "@wonderflow/react-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";
export const IndustryPartnerLogo = () => {
    const [partner_logo, setPartner_logo] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );
    useEffect(() => {
        
        if (industryPageData) {
            setPartner_logo(industryPageData?.partner_logo)
        }
    }, [industryPageData])
    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Stack as="div" direction="column" rowGap={64} hPadding={64}>
                    <Stack direction="column" hAlign="center" as="div">
                        <Text as="p" variant="heading-6" className="">{partner_logo?.length > 0 && partner_logo[0]?.heading}</Text>
                    </Stack>
                    <Stack as="div" className="partner--logos--list mt-8">
                        {(partner_logo?.length > 0 && partner_logo[0]?.file?.length > 0) ?
                            <Carousel autoSwipe={1500} show={7.5} slide={1} transition={0.5}>

                                {partner_logo[0]?.file?.map((data: any, index: number) => {
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
                            <NoDataFound />
                        }
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}