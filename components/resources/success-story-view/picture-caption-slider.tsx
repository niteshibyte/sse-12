'use client';
import { Stack } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import { CardSlider } from "../../image-card-slider/card-slider";
export const PictureCaptionSlider = (props: any) => {
    return (

        <>
            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper success-slider">
                <Carousel show={1} slide={1} transition={0.5} >
                    <CardSlider
                        cardImage="/webinar-img1.png"
                        cardSmallTitle="Insurance"
                    />
                    <CardSlider
                        cardImage="/webinar-img1.png"
                        cardSmallTitle="Insurance"
                    />
                    <CardSlider
                        cardImage="/webinar-img1.png"
                        cardSmallTitle="Insurance"
                    />
                    <CardSlider
                        cardImage="/webinar-img1.png"
                        cardSmallTitle="Insurance"
                    />
                </Carousel>
            </Stack>
        </>

    )
}