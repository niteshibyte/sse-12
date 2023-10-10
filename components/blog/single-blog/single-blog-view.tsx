
import { Avatar, Button, Card, Container, List, Separator, Stack, Text, Tooltip } from "@wonderflow/react-components";
import { LeftSidebar } from "../../left-sidebar/left-sidebar";
import { SectionHead } from "../../section-head/section-head";
import { SubscribeForm } from "../../subscribe-form/subscribe-form";
import { BlogResources } from "../../resources/blog-resources";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import { useEffect, useState } from "react";
import Link from "next/link";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const SingleBlogView = ({data}:{data:any}) => {
    const { singleblog } = useSelector((state: any) => state)
    const [recent, setRecent] = useState<any>()
    const router=useRouter()
    useEffect(() => {
        if(data.length>0){
            setRecent(data[0])
        }
    }, [data,router])

   
    return (
        <>
            {Object.keys(singleblog).length>0 && <Container dimension="extra-large" className="mt-10 pt--60">
                <Stack as="div" vPadding={128} hPadding={24}>

                    {/* Blog View */}
                    <Stack as="div" rowGap={64} className="mt-20">
                        <Stack className="animate__animated animate__fadeInUp">
                            <Text variant="subtitle-1" textAlign="center">{singleblog?.select_category?.length > 0 && singleblog?.select_category?.map((item: any, index: number) => item?.title)?.join(' , ')}</Text>
                            <Text as="h3" variant="display-3" textAlign="center">{singleblog?.title}</Text>
                        </Stack>

                        {/* Published details */}
                        <Stack as="div">
                            <Stack as="div" direction="row" vPadding={32} vAlign="center" hAlign="space-between" className="blog--header--meta">
                                <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author">

                                    {singleblog?.select_author?.length > 0 && singleblog?.select_author?.map((item: any, index: number) => {
                                        return (
                                            <>
                                                <Avatar dimension="big" src={item?.author_avatar?.url} alt="Author Name" />
                                                <Stack as="div" className="blog--author--details">
                                                    <Text as="p" className="text--bold ">{item?.title}</Text>
                                                    <Text as="p" className="">{item?.designation}</Text>
                                                </Stack>
                                            </>
                                        )
                                    })}


                                </Stack>
                                <Stack as="div" className="log--author--time">
                                    <Text as="p" textAlign="end" className="text--bold ">{dateFormat(singleblog?.publish_date, " mmmm dd, yyyy")}</Text>
                                    {singleblog?.reading_time && <Text as="p" textAlign="end" className="">{singleblog?.reading_time} read</Text>}
                                </Stack>
                            </Stack>

                            {/* Blog Banner Image */}
                            <Stack as="div" className="blog--view--banner mt-10">
                                <img src={singleblog?.blog_image?.url} alt="Banner Image" />
                            </Stack>
                        </Stack>

                        {/* Blog Content */}
                        <Stack as="div" direction="row" wrap hAlign="space-between" vAlign="start" rowGap={32} columnGap={32} className="view--page--content mt-10">
                            {/* Page Right Content */}
                            <Stack as="div" className="right--content">
                                <Text as="p" className="mt-8 "><div dangerouslySetInnerHTML={htmlToTextConvert(singleblog?.blog_description)} /></Text>
                            </Stack>
                        </Stack>

                        {/* Blog tags */}
                        <Container dimension="large">
                            <Stack as="div" rowGap={32} className="mt-16 blog--tags" hPadding={96}>
                                <Separator />
                                <Text variant="heading-3" className="mt-16">Tags</Text>
                                <List className="tag--list mt-8">

                                    {singleblog?.select_tags?.map((item: any, index: number) => {
                                        return (
                                            <List.Li>
                                                <Text as="a" >{item?.title}</Text>
                                            </List.Li>
                                        )
                                    })}

                                </List>
                                <Separator className="mt-16" />
                            </Stack>
                        </Container>

                        {/* Other Articles */}
                        <Stack as="div" rowGap={64} className="mt-16 rounded-12">
                            <SectionHead title="Other articles you might like" />

                            <Stack direction="row" wrap rowGap={32} columnGap={32} className="view-page--articles tab--content--block mt-16 mt-128">

                                {recent?.length > 0 && recent?.map((item: any, index: number) => {
                                    return (
                                        <Stack className="card--block">
                                            <Link href={changeUrl(router.query.lang,`/blog${item.url}`)}>
                                                <a>

                                                    <Card className="" bordered padding={false} highlightOnHover>
                                                        <Stack direction="row" wrap as="div" vAlign="center">
                                                            <Stack as="div" className="card--image">
                                                                <img src={item?.blog_image?.url} alt="Article Image" />
                                                            </Stack>
                                                            <Stack as="div" className="card--body" vPadding={24} hPadding={32}>
                                                                <Text as="p" variant="body-2" className="uppercase">{item?.select_category?.length > 0 && item?.select_category?.map((data: any) => data.title)?.join(' , ')}</Text>
                                                                <Text as="h5" variant="heading-5">{item?.title}</Text>
                                                                <Stack as="div" className="card--meta">
                                                                    <Text as="p" variant="body-2">{item?.publish_date && dateFormat(item?.publish_date, " mmmm dd, yyyy")}</Text>
                                                                    <Text as="span" className="sap-dot"></Text>
                                                                    <Text as="p" variant="body-2">{item.reading_time && `${item.reading_time} read`}</Text>
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                    </Card>
                                                </a>
                                            </Link>
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>
                        {/* Bottom Bloks */}
                        <Stack as="div" rowGap={128} className="mt-16 form--section">
                            {/* Subscribe Form */}
                            <SubscribeForm />
                            {/* Resources */}
                            <BlogResources show={4} section={true} classCss={"mt-128"} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
}