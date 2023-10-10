import { Container,  Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";

type config = {
    show: 8 | 5 | 3 | 1
}
export const PartnerLogos = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        xs: { show: 1 },
        sm: { show: 1 },
        md: { show: 5 },
        lg: { show: 8 },
        xl: { show: 8 },
        fallback: { show: 8 }
    })
    const { partners}: any = useSelector((state: any) => state?.homeData)
    return(
        <>
        {partners &&partners?.length>0 &&<>
            <Container dimension="extra-large" data-aos="fade-up" data-aos-duration="500">
                <Stack as="div" rowGap={64} hPadding={24}>
                    <Stack direction="column" hAlign="center" as="div">
                        <Text as="h6" variant="heading-6" textAlign="center">{partners[0]?.heading}</Text>
                    </Stack>
                    <Stack as="div" className="partner--logos--list mt-8 desktop--logos--list">
                        {partners[0]?.file?.length > 0 ? 
                          
                                <Carousel autoSwipe={1500} show={value.show} slide={1} transition={0.5}>
                                    {partners[0]?.file?.map((data:any, index:number) => {
                                    
                                        
                                        return(
                                         
                                            <div key={index}>
                                                {data.url &&
                                                    <Stack as="a" href="javascript:void(0)">
                                                        <img src={data?.url} alt={data?.title} />
                                                    </Stack>
                                                }
                                            </div>
                                            
                                        );
                                    })}
                                </Carousel>
                            
                        :
                            <NoDataFound />
                        }                    
                    </Stack>

                    <Stack as="div" className="partner--logos--list mt-8 mobile--logos--list">
                        {partners[0]?.file?.length > 0 ? 
                           
                                <Carousel  autoSwipe={500} show={2.5} slide={1} transition={0.5}>
                                    {partners[0]?.file?.map((data:any, index:number) => {
                                    
                                        
                                        return(
                                            
                                            <div key={index}>
                                                {data.url &&
                                                    <Stack as="a" href="javascript:void(0)">
                                                        <img src={data?.url} alt={data?.title} />
                                                    </Stack>
                                                }
                                            </div>
                                            
                                        );
                                    })}
                                </Carousel>
                            
                        :
                            <NoDataFound />
                        }                    
                    </Stack>
                </Stack>
            </Container>
        </>}
        </>
    );
};