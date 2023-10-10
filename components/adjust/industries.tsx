import { Container, Stack, StarMeter, Text } from "@wonderflow/react-components"
import { useSelector } from "react-redux"

export const LatestIndustries = () => {
    const { section_3 }: any = useSelector((state: any) => state?.marketing)

    return(
        <>
           {section_3&&section_3.ratings.input_one.split('/')[0] && <Stack as="div" className="adjust--bg--light--grey" vPadding={96}>
                <Container dimension="large">
                    <Stack as="div" rowGap={40}>
                        <Stack as="div" className="adjust--heading--block" rowGap={16}>
                            <Text as="h3" variant="heading-3" textAlign="center">{section_3?.section_title}</Text>
                        </Stack>
                        <Stack direction="row" wrap rowGap={40} columnGap={48} hAlign="center" vAlign="start" as="div" className="adjust--reviews--block">
                            <Stack as="div" hPadding={40} hAlign="center" className="adjust--rating--block" rowGap={8}>
                                <Text as="h1" variant="heading-1">{section_3.ratings.input_one}</Text>
                                <StarMeter hideLabel dimension="big" value={Number(section_3.ratings.input_one.split('/')[0])} />
                                <Text as="p" variant="tagline-3">{section_3.ratings.input_2}</Text>
                            </Stack>
                            <Stack as="div" wrap vAlign="center" hAlign="center" rowGap={24} direction="row" columnGap={48} className="adjust--review--lists">
                                {section_3.badge_images?.length>0 &&section_3.badge_images?.map((item:any,index:number)=>{
                                    return (
                                        <Stack as="div" className="adjust--review--list--item">
                                        <img src={item.url} alt="Industry Image" />
                                    </Stack>  
                                    )
                                })}
                                
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>}
        </>
    )
}