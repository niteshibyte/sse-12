import { Button, Container, Spinner, Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../../../components/section-head/section-head";
import { BlogResources } from "../blog-resources";
import { CardSlider } from "../../../components/image-card-slider/card-slider";
import { Carousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import stackWrapper from '../../../helper/api'
import Link from "next/link";
import Loader from "../../loader/Loader";
import { useRouter } from "next/router";
import { changeUrl } from "../../../helper/ChangeLanguage";

type config = {
    show: 1.25 | 2.25 | 3;
}
export const ResourcesPageContent = () => {
const router=useRouter()
    const {value} = useBreakpointsConfig<config>({
        md: { show: 2.25 },
        lg: { show: 3 },
        xl: { show: 3 },
        fallback: { show: 1.25 },
    });

    const [webinarLoader, setWebinarLoader] = useState(true)
    const [whitePaperLoader, setWhitePaperLoader] = useState(true)
    const [analysisLoader, setAnalysisLoader] = useState(true)
    const [successLoader, setSuccessLoader] = useState(true)
    const [webinar, setWebinar] = useState<any>()
    const [whitepaper, setWhitepaper] = useState<any>()
    const [analysis, setAnalysis] = useState<any>()
    const [success, setSuccess] = useState<any>()
    useEffect(() => {
        getWebinar()
        getWhitePaper()
        getSuccessStory()
        getAnlysis()
    }, [])
    const getWebinar = async () => {
        try {
            const data: any = await stackWrapper.getAllWebinar('webinar_entry', 10,`${router.query.lang}`)
            setWebinar(data[0])

            setWebinarLoader(false)

        } catch (error) {
            setWebinarLoader(false)
        }

    }
    const getWhitePaper = async () => {
        try {
            const data: any = await stackWrapper.getAllWhitePaper('whitepaper_entries', 10,`${router.query.lang}`)
            setWhitepaper(data[0])

            setWhitePaperLoader(false)
        } catch (error) {
            setWhitePaperLoader(false)

        }

    }
    const getSuccessStory = async () => {
        try {
            const data: any = await stackWrapper.getSuccessStoryAll('success_stories_entry', 10,`${router.query.lang}`)
            setSuccess(data[0])
            setSuccessLoader(false)
        } catch (error) {
            setSuccessLoader(false)

        }

    }

    const getAnlysis = async () => {
        try {
            const data: any = await stackWrapper.getAllAnalysis('analyst_report_entries', 10,`${router.query.lang}`)
            setAnalysis(data[0])
            setAnalysisLoader(false)
        } catch (error) {
            setAnalysisLoader(false)

        }

    }
    return (
        <>
            <Stack as="div" direction="column" vPadding={128} rowGap={128}>
                <Container dimension="extra-large" className="mt-128 resource-page-content">
                    <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                        {/* page Heading */}
                        <SectionHead
                            largeTitleForm="Resources"
                            subTitleForm="Find the relevant materials you need, all right here! By downloading and accessing our free insights below, you can get a better behind-the-scenes look at our technology, including how our solution has enabled various global firms to succeed, why experts recommend our AI, what specific industry challenges can be resolved, and much more."
                        />
                        {/* Resources Data */}
                        <BlogResources
                            show={5} classCss={''} section={false}
                        />
                    </Stack>
                </Container>
                <Container dimension="extra-large">
                    <Stack as="div" direction="column" rowGap={96} hPadding={24}>
                        {/* Webinar Slider */}
                        {!webinarLoader ? <Stack as="div" className="slider--wrapper">
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title="Webinars"
                                />
                                <Stack as="div" className="buttonWidth">
                                    <Link href={changeUrl(router.query.lang,"/resources/webinar")}>
                                        <Button kind="secondary" dimension="big"  >View All</Button>
                                    </Link>
                                </Stack>
                               
                            </Stack>
                           
                            {!webinarLoader ? <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper tab--content--block">
                                <Carousel show={value.show} slide={1} transition={0.5} >

                                    {webinar?.map((item: any) => {
                                        return (
                                            <Link href={changeUrl(router.query.lang,`/resources/webinar/${item?.url}`)}>
                                                <a>

                                                    <CardSlider
                                                        cardImage={item?.choose_categories?.length > 0 && item?.choose_categories[0].category_thumbnail?.url}
                                                        cardSmallTitle={item?.choose_categories?.length > 0 && item?.choose_categories?.map((item: any) => item.title)?.join(' , ')}
                                                        semiTitle={item?.title}
                                                        userLists={true}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </Carousel>
                            </Stack> : 
                            <Loader height='100vh' width= '100vw' />
                          }

                            

                        </Stack> : <Loader height='100vh' width= '100vw' />}

                        {/* Analyst Report Slider */}
                        {!analysisLoader ? <Stack as="div" className="slider--wrapper">
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title="Analyst Reports"
                                />
                                <Stack as="div" className="buttonWidth">
                                    <Link href={changeUrl(router.query.lang,"/resources/analyst-report")}>
                                        <Button kind="secondary" dimension="big">View All</Button>
                                    </Link>
                                </Stack>
                               
                            </Stack>

                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper tab--content--block">
                                <Carousel show={value.show} slide={1} transition={0.5} >
                                    {analysis?.map((item: any) => {
                                        return (

                                            <Link href={changeUrl(router.query.lang,`/resources/analyst-report${item?.url}`)}>

                                                <a>
                                                    <CardSlider
                                                        cardImage={item?.main_section?.report_image?.url}
                                                        cardSmallTitle={item?.select_categories?.length > 0 && item?.select_categories[0]?.tags?.map((data: any) => data)?.join(' , ')}
                                                        semiTitle={item?.banner_main_title}
                                                    />

                                                </a>
                                            </Link>

                                        )
                                    })}
                                </Carousel>
                            </Stack>
                        </Stack> : <Loader height='100vh' width= '100vw' />}

                        {/* Whitepapers Slider */}
                        {!whitePaperLoader ? <Stack as="div" className="slider--wrapper">
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title="Whitepapers"
                                />
                                <Stack as="div" className="buttonWidth">
                                    <Link href={changeUrl(router.query.lang,"/resources/whitepaper")}>
                                        <Button kind="secondary" dimension="big"  >View All</Button>

                                    </Link>
                                </Stack>
                            </Stack>
                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper tab--content--block">
                                <Carousel show={value.show} slide={1} transition={0.5} >
                                    {whitepaper?.map((item: any) => {
                                        return (
                                            <Link href={changeUrl(router.query.lang,`/resources/whitepaper/${item?.url}`)}>
                                                <a>
                                                    <CardSlider
                                                        cardImage={item?.featured_image?.url}
                                                        semiTitle={item?.title}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })}

                                </Carousel>
                            </Stack>

                        </Stack> : <Loader height='100vh' width='100vw' />}

                        {/* Success Stories Slider */}
                        {!successLoader ? <Stack as="div" className="slider--wrapper">
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title="Success Stories"
                                />
                                <Stack as="div" className="buttonWidth">
                                    <Link href={changeUrl(router.query.lang,"/resources/success-story")}>
                                        <Button kind="secondary" dimension="big"  >View All</Button>

                                    </Link>
                                </Stack>
                                

                            </Stack>
                            
                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="carosuel--wrapper tab--content--block">
                                <Carousel show={value.show} slide={1} transition={0.5} >
                                    {success?.map((item: any) => {
                                        return (
                                            <Link
                                                href={changeUrl(router.query.lang,`/resources/success-story/${item?.url?.split("/")[1]}`)}
                                            >
                                                <a>
                                                    <CardSlider
                                                        cardImage={item?.hero_image?.url}
                                                        cardSmallTitle={item?.category?.length > 0 && item?.category?.map((item: any) => item.title).join(' , ')}
                                                        semiTitle={item?.title}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </Carousel>
                            </Stack>

                        </Stack> : <Loader height='100vh' width='100vw' />}
                    </Stack>
                </Container>
            </Stack>
        </>
    );
}