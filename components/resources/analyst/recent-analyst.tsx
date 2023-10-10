import { Container,  Stack } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import StackWrapper from '../../../helper/api'
import Link from "next/link";
import { useRouter } from "next/router";
import { SectionHead } from "../../section-head/section-head";
import { CardSlider } from "../../image-card-slider/card-slider";
import Loader from "../../loader/Loader";
export const RecentWebinar = () => {
    const [data, setData] = useState<any>()
    const [loader, setLoader] = useState(true)
    const router = useRouter()
    const lang='en-us'
    useEffect(() => {
        setLoader(true)
        if (router?.query.title) {
            getAllWebinar(String(router?.query.title))
        } else {
            router.push('/resources/webinar')
        }
    }, [router])




    const getAllWebinar = async (title: string) => {

        try {
            const data: any = await StackWrapper.getNotINWebinar('webinar_entry', title,lang)
            setData(data[0])


            setLoader(false)

        } catch (error) {
            setLoader(false)


        }
    }


    return (
        <>
            {!loader ? <Container dimension="extra-large" className="mt-128">
                <Container dimension="full">
                    <Stack as="div" className="mt-128 slider--wrapper">
                        <Stack direction="row" as="div" wrap vAlign="center" hAlign="center" className="slider--head center">
                            <SectionHead
                                title="Recent Webinars"
                            />
                        </Stack>
                        <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper tab--content--block">
                            <Carousel show={3} slide={1} transition={0.5} >
                                {data && data?.length > 0 && data?.map((item: any, index: number) => {
                                    return (
                                        <Link href={`/resources/webinar/webinar-view?title=${item?.title}`}>

                                            <CardSlider
                                                key={index}
                                                cardImage={item?.choose_categories?.length > 0 && item?.choose_categories[0]?.category_thumbnail?.url}
                                                cardSmallTitle={item?.choose_categories?.length > 0 && item?.choose_categories[0]?.title}
                                                semiTitle={item?.title}
                                                userLists={item?.speakers}
                                            />
                                        </Link>
                                    )
                                })}

                            </Carousel>
                        </Stack>
                    </Stack>
                </Container>
            </Container> : <Loader height='100vh' width='100vw' />}
        </>
    )
}