import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useEffect, useState } from "react";
import stackWrapper from '../../helper/api'
import Link from "next/link";
import { useRouter } from "next/router";
export const CommonBlogSection = (props: any) => {
    const router=useRouter()
    const [webinar, setWebinar] = useState<any>()
    const [successStory, setSuccessStory] = useState<any>()
    const [whitePaper, setWhitePaper] = useState<any>()
    useEffect(() => {
        getWebinar()
        getSuccessStory()
        getWhitePaper()
    }, [])
    const getSuccessStory = async () => {
        try {
            const data: any = await stackWrapper.getSuccessStoryAll('success_stories_entry', 1,`${router.query.lang}`)
            setSuccessStory(data[0][0])

        } catch (error) {
        }
    }
    const getWhitePaper = async () => {
        try {
            const data: any = await stackWrapper.getAllWhitePaper('whitepaper_entries', 1,`${router.query.lang}`)

            setWhitePaper(data[0][0])

        } catch (error) {
        }
    }
    const getWebinar = async () => {
        try {
            const data: any = await stackWrapper.getAllWebinar('webinar_entry', 1,`${router.query.lang}`)

            if (data?.length > 0) {
                setWebinar(data[0][0])
            }
        } catch (error) {
        }
    }

    return (
        <>
            <Container dimension="extra-large" className="home-blog">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <SectionHead
                        underneethSmallTitle={props?.underneethSmallTitle}
                        title={props?.title}
                        headText={props?.headText}
                    />


                    <Stack as="div" className="mt-16 tab--content--block animate__animated animate__fadeInUp" direction="row" wrap rowGap={32} columnGap={32} hAlign="center">
                        {whitePaper &&
                            <Card padding={false} bordered highlightOnHover className="card--block">
                                <Link href={`/resources/whitepaper${whitePaper?.url}`}>
                                    <a>
                                        {whitePaper?.featured_image &&
                                            <Stack as="div" className="card--image">
                                                <img src={whitePaper?.featured_image?.url} alt="Image" />
                                            </Stack>
                                        }
                                        <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                                            <Text variant="body-2">ARTICLE</Text>

                                            {whitePaper?.title &&
                                                <Text as="h5" variant="heading-5" className="mt-4 text--bold">{whitePaper?.title}</Text>
                                            }
                                        </Stack>
                                    </a>
                                </Link>
                            </Card>
                        }
                        {successStory &&
                            <Card padding={false} bordered highlightOnHover className="card--block">

                                <Link href={`/resources/success-story${successStory?.url}`}>
                                    <a>
                                        {successStory?.hero_image &&
                                            <Stack as="div" className="card--image">
                                                <img src={successStory?.hero_image?.url} alt="Image" />
                                            </Stack>
                                        }
                                        <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                                            <Text variant="body-2">SUCCESS STORIES</Text>

                                            {successStory?.title &&
                                                <Text as="h5" variant="heading-5" className="mt-4 text--bold">{successStory?.title}</Text>
                                            }
                                        </Stack>
                                    </a>
                                </Link>
                            </Card>
                        }
                        {webinar &&
                            <Card padding={false} bordered highlightOnHover className="card--block">
                                <Link href={`/resources/webinar${webinar?.url}`}>
                                    <a>
                                        {webinar?.choose_categories &&
                                            <Stack as="div" className="card--image">
                                                <img src={webinar?.choose_categories?.length > 0 && webinar?.choose_categories[0]?.category_thumbnail?.url} alt="Image" />
                                            </Stack>
                                        }
                                        <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                                            <Text variant="body-2">WEBINAR</Text>

                                            {webinar?.title &&
                                                <Text as="h5" variant="heading-5" className="mt-4 text--bold">{webinar?.title}</Text>
                                            }
                                        </Stack></a>
                                </Link>
                            </Card>
                        }
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};