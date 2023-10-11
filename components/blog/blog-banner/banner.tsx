import { Container, Text, Stack } from "@wonderflow/react-components";
import React from 'react'
import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import Link from "next/link";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export default function Blogbanner() {
    const router=useRouter()
    const { blog_Data } = useSelector((state: any) => state?.blogData);
    return (
        <>
            {blog_Data && <Container dimension="full" className="site--banner blog--banner">
                <Container dimension="extra-large">
                    <Stack as="div" rowGap={64} vPadding={128}>
                        <Stack className="short--width" rowGap={16} hPadding={24}>
                            <Text as="h2" variant="display-2" textAlign="center" className="text--white banner-title animate__animated animate__fadeInUp">{blog_Data?.title}</Text>
                        </Stack>
                        {/* Banner Blogs Data */}
                        <Stack className="blog--grid" rowGap={32} columnGap={32} vAlign="center">
                            {blog_Data?.featured_posts?.length > 0 && blog_Data?.featured_posts?.map((item: any, index: number) => {
                                if ((index + 4) % 4 == 0) {
                                    return (
                                        <Stack className="grid--item">
                                            <Link href={changeUrl(router.query.lang,`/blog${item?.url}`)}>
                                                <a>

                                                    <Stack direction="row" wrap as="div" vAlign="center" rowGap={16} columnGap={16}>
                                                        <Stack as="div" className="card--image">
                                                            <img src={item?.blog_image?.url} alt="Article Image" />
                                                        </Stack>
                                                        <Stack as="div" className="card--body" vPadding={24} hPadding={32}>
                                                            <Text as="p" variant="subtitle-2" className="uppercase">{item?.select_category?.length > 0 && item?.select_category?.map((data: any) => data?.title)?.join(' , ')}</Text>
                                                            <Text as="h5" variant="heading-3" className="mt-4">{item?.title}</Text>
                                                            <Text as="p" variant="body-1" className="blog--text mt-4"><div dangerouslySetInnerHTML={htmlToTextConvert(item?.blog_description?.slice(0, 300)?.slice(0, 250) + '...')} /></Text>
                                                            <Stack as="div" className="card--meta">
                                                                <Text as="p" variant="body-2">{dateFormat(item?.publish_date, " mmmm dd, yyyy")}</Text>                                                             <Text as="span" className="sap-dot"></Text>
                                                                {item?.reading_time && <Text as="p" variant="body-2">{item?.reading_time} read</Text>}
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>
                                                </a>
                                            </Link>
                                        </Stack>
                                    )
                                } else {
                                    return (
                                        <Stack className="grid--item">
                                            <Link href={changeUrl(router.query.lang,`/blog${item?.url}`)}>
                                                <a>
                                                    <Stack direction="row" wrap as="div" vAlign="center" rowGap={16} columnGap={16}>
                                                        <Stack as="div" className="card--image">
                                                            <img src={item?.blog_image?.url} alt="Article Image" />
                                                        </Stack>
                                                        <Stack as="div" className="card--body" vPadding={24} hPadding={24}>
                                                            <Text as="p" variant="subtitle-2" className="uppercase">{item?.select_category?.length > 0 && item?.select_category?.map((data: any) => data?.title)?.join(' , ')}</Text>
                                                            <Text as="h5" variant="heading-5" className="mt-4">{item?.title}</Text>
                                                        </Stack>
                                                    </Stack>
                                                </a>
                                            </Link>
                                        </Stack>

                                    )
                                }
                            })}
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}
