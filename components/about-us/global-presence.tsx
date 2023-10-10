import { CardSlider } from "../../components/image-card-slider/card-slider";
import { Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../../components/section-head/section-head";
import { useSelector } from "react-redux";

export const GlobalPresence = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about&&about?.office_sections&&<>
                <Container dimension="extra-large" className="mt-128 global--offices">
                    <Container dimension="full" padding={false}>
                        <Stack as="div" direction="row" columnGap={32} rowGap={32} vAlign="start" hPadding={24}>
                            <Stack as="div" className="slider--wrapper">
                                <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                    <SectionHead
                                        title={about?.office_sections?.main_title}
                                        headText={about?.office_sections?.main_sub_title}
                                    />
                                </Stack>
                                <Stack as="div" direction="row" wrap rowGap={32} columnGap={16} className="carosuel--wrapper tab--content--block">
                                    
                                    {about?.office_sections?.office_location?.length>0 &&about?.office_sections?.office_location?.map((item:any,index:number)=>{
                                        return(
                                            <CardSlider
                                            cardImage={item?.office_image?.url                                            }
                                            semiTitle={item?.city_name}
                                            paraBlock={item?.address}
                                        />
                                        )
                                    })}
                                </Stack>
                                <Stack as="div" className="mt-128">
                                    <img src={about?.office_sections?.map_image?.url} alt="Globe Image" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}