import {  Container,  Stack } from "@wonderflow/react-components";
import { SectionHead } from "../../../components/section-head/section-head";
import { CardSlider } from "../../../components/image-card-slider/card-slider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const RecentWhitePaper = ({recentData}:{recentData:any}) => {
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const [data,setData]=useState([])

    useEffect(() => {
       if(recentData.length>0){
        setLoader(true)
        setData(recentData[0])
        setLoader(false)
       }

    }, [router,recentData])




   


    return (
        <>
            {!loader ? <Container dimension="extra-large" className="mt-128">
                <Container dimension="full">
                    <Stack as="div" className="mt-128" rowGap={32}>
                        <Stack direction="row" as="div" wrap vAlign="center" hAlign="center" className="slider--head center">
                            <SectionHead
                                title="Recent WhitePapers"
                            />
                        </Stack>
                        <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="tab--content--block">
                                {data && data?.map((item: any, index: number) => {
                                    return (
                                        <Stack as="div" className="card--block">
                                        <Link href={changeUrl(router.query.lang,`/resources/whitepaper${item?.url}`)}>
                                            <a>
                                            <CardSlider
                                                key={index}
                                                cardImage={item?.featured_image && item?.featured_image?.url}
                                                cardSmallTitle={item?.category
                                                    ?.length > 0 && item?.category?.map((data:any)=>data?.title)?.join(' , ')}
                                                semiTitle={item?.title}
                                                userLists={item?.speakers}
                                            />
                                            </a>
                                        </Link>
                                        </Stack>
                                    )
                                })}

                        </Stack>
                    </Stack>
                </Container>
            </Container> : <Loader height='100vh' width='100vw' />}
        </>
    )
}