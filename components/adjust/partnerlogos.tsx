import { Carousel } from "@trendyol-js/react-carousel"
import { Container, Stack } from "@wonderflow/react-components"
import { useSelector } from "react-redux"

export const AdjustPartnersLogos = () => {
    const { partner_logo_s }: any = useSelector((state: any) => state?.marketing)

    return(
        <>
           {partner_logo_s?.length>0 && <Stack as="div" vPadding={48} className="">
                <Container dimension="large" className="partner--logos--list">
                    <Carousel autoSwipe={300} show={6} slide={1} transition={0.5}>
                        {partner_logo_s[0]?.file?.length>0 &&partner_logo_s[0]?.file?.map((item:any,index:number)=>{
                            return (
                                <Stack as="div">
                                    <img src={item.url} alt="Partner Logo" />
                                </Stack>
                            )
                        }) }
                       
                       
                    </Carousel>
                </Container>
            </Stack>}
        </>
    )
}