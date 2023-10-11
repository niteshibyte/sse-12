import { Card, Pagination, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import stackWrapper from '../../../helper/api'
import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import Link from "next/link";
import { useRouter } from "next/router";
import NoDataFound from '../../no-data-found/no-data-found'
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";

export const ArticlesLists = (props: any) => {
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [blog, setBlog] = useState<any>()
    const [loader, setLoader] = useState(true)
    const router = useRouter()
    const selectedData = useSelector((state: any) => state?.selectedData)
    useEffect(() => {
        setLoader(true)
        getAllBlog(1, 10, selectedData)
        setCurrentPage(1)

    }, [selectedData])


    const handlePage = (selected: any) => {
        router.push('#blog')
        setCurrentPage(selected?.selected + 1)
        setLoader(true)
        getAllBlog(selected?.selected + 1, 10, selectedData)
    }
    const getAllBlog = async (page: number, limit: number, option: any) => {
        try {
            const data: any = await stackWrapper.getAllBlog('blog_entries', page, limit, option)
            setBlog(data[0])
            setTotalPage(data[1])
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }
    }


    return (
        <>
            {!loader ? blog?.length > 0 ?
                <Stack as="div" direction="column" rowGap={64} className="articles--block">
                    {blog.map((data: any, index: number) => {
                        return (
                            <Card key={index} className="card--block" bordered padding={false} highlightOnHover>
                                <Link href={changeUrl(router.query.lang,`/blog${data?.url}`) }>
                                    <a>

                                        <Stack direction="row" wrap as="div" vAlign="center">
                                            {data?.blog_image &&
                                                <Stack as="div" className="card--image">
                                                    <img src={data?.blog_image?.url} alt="Article Image" />
                                                </Stack>
                                            }
                                            <Stack as="div" className="card--body" vPadding={24} hPadding={32} rowGap={16}>
                                                {data?.select_category &&
                                                    <Text as="p" variant="subtitle-2" className="uppercase">{data.select_category?.length > 0 && data.select_category?.map((item: any) => item?.title)?.join(' , ')}</Text>
                                                }
                                                {data?.title &&
                                                    <Text as="h5" variant="heading-5" className="mt-4">{data.title}</Text>
                                                }
                                                {data?.blog_content &&
                                                    <Text as="p" variant="body-1"><div dangerouslySetInnerHTML={{ __html: data?.blog_content }} /></Text>
                                                }
                                                {(data?.publish_date || data?.reading_time) &&
                                                    <Stack as="div" className="card--meta">
                                                        {data?.publish_date &&
                                                            <Text as="p" variant="body-1">{dateFormat(data?.publish_date, " mmmm dd, yyyy")}</Text>
                                                        }
                                                        {data.reading_time &&
                                                            <>
                                                                <Text as="span" className="sap-dot"></Text>
                                                                <Text as="p" variant="body-2">{data.reading_time} read</Text>
                                                            </>
                                                        }
                                                    </Stack>
                                                }
                                            </Stack>
                                        </Stack>
                                    </a>
                                </Link>
                            </Card>
                        );
                    })}
                    <Stack as="div" direction="column" hAlign="center">
                        {totalPage > 10 && <Pagination onPageChange={handlePage} itemsCount={totalPage} forcePage={currentPage - 1} />}
                    </Stack>
                </Stack>
                :

                <NoDataFound />
                : <Loader height='50vh' width='60vw' />}
        </>
    );
}
