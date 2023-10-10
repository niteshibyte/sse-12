import { Carousel } from "@trendyol-js/react-carousel"
import { Container,  Separator, Stack, Text } from "@wonderflow/react-components"
import { useSelector } from "react-redux"

export const AdjustMedia = () => {
    const { testimonials }: any = useSelector((state: any) => state?.marketing)

    return(
        <>
           {testimonials?.length>0 && <Stack as="div" className="adjust--media--section">
                <Container dimension="large">
                    <Carousel transition={0.5} show={1} slide={1}>
                    {testimonials?.map((item:any,index:number)=>{
                        return(
                            <Stack key={index} as="div" direction="row" wrap vAlign="center" rowGap={48} hPadding={2} columnGap={72} className="adjust--media--block">
                                <Stack as="div" rowGap={32} className="adjust--media--left">
                                    <Stack as="div" className="adjust--media--title">
                                        <Text as="h3" variant="heading-3">{item?.title}</Text>
                                    </Stack>
                                    <Stack as="div" className="adjust--media--text">
                                        <Text as="p" variant="tagline-3">{item?.description}</Text>
                                    </Stack>
                                    <Stack as="div" wrap direction="row" vAlign="center" rowGap={24} columnGap={48} hAlign="space-between" className="adjust--media--footer">
                                        <Stack as="div">
                                            <Text as="h6" variant="heading-6">{item?.person_name}</Text>
                                            <Text as="p" variant="body-2">{item?.person_designation}</Text>
                                        </Stack>
                                        <Stack as="div" className="adjust-media-logo">
                                            {item?.company_logo?.url &&<img src={item?.company_logo?.url} alt="media logo" />}
                                        </Stack>
                                    </Stack>

                                    {/* <Separator /> */}

                                </Stack>
                                {item?.brand_image?.url &&<Stack as="div" className="adjust--media--right">
                                    <img src={item?.brand_image?.url} alt="Media image" />
                                </Stack>}
                            </Stack>
                        )
                    })}
                    </Carousel>
                </Container>
            </Stack>}
        </>
    )
}