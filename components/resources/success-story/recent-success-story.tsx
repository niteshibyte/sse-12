import { Container, Stack } from "@wonderflow/react-components";
import { Carousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import StackWrapper from '../../../helper/api'
import Link from "next/link";
import { useRouter } from "next/router";
import { SectionHead } from "../../section-head/section-head";
import { CardSlider } from "../../image-card-slider/card-slider";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const RecentWhitePaper = () => {
    const [id, setId] = useState('')
    const [data, setData] = useState<any>()
    const [loader, setLoader] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setId(String(router.query.title))
    }, [router])


    useEffect(() => {

        setTimeout(() => {
            getAllWebinar(id)
        }, 500);
        setLoader(true)
    }, [id])

    const getAllWebinar = async (title: string) => {

        try {
            const data: any = await StackWrapper.getAllWhitePaper('whitepaper_entries', 10,`${router.query.lang}`)
            if (data?.length > 0 && title) {
                setData(data[0]?.filter((item: any) => item?.title != title))


            } else {
                setData(data[0]?.filter((item: any, index: number) => index != 0))

            }
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
                                {data && data?.map((item: any, index: number) => {
                                    return (
                                        <Link href={changeUrl(router.query.lang,`/resources/whitepaper/whitepaper-view?title=${item?.title}`)}>

                                            <CardSlider
                                                key={index}
                                                cardImage={item?.featured_image && item?.featured_image?.url}
                                                cardSmallTitle={item?.category
                                                    ?.length > 0 && item?.category
                                                    [0]?.title}
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