import { Button, Container, Stack } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import { SectionHead } from "../section-head/section-head";
import { ImageSlider } from "./image-slider";
import { useSelector } from "react-redux";
export const TeamSlider = () => {
    const { career }: any = useSelector((state) => state)
    return (
        <>
            {career && career?.team_slider_images
                && <>


                    {/* Team Slider */}
                    <Stack as="div" className="slider--wrapper">

                        <Stack as="div" direction="row" wrap rowGap={32} columnGap={16} className="carosuel--wrapper tab--content--block">
                            <Stack as='div' vPadding={64} hPadding={64}>
                                <SectionHead
                                    title={career?.team_slider_images?.section_title}
                                    secondHeadText={career?.team_slider_images?.section_sub_title}
                                />
                            </Stack>
                            {career?.team_slider_images?.carousel_images?.length > 0 && <Carousel show={2.5} slide={1} transition={0.5} >

                                {career?.team_slider_images?.carousel_images?.map((item: any, index: number) => {
                                    return (

                                        <ImageSlider
                                            cardImage={item?.black_white_image?.url}
                                            cardImag1={item?.coloured_image?.url}

                                        />


                                    )
                                })}

                            </Carousel>}
                        </Stack>
                    </Stack>

                </>}
        </>
    );
}