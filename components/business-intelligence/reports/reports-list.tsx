import { Card, Pagination, Stack, Text } from "@wonderflow/react-components";
import stackWrapper from '../../../helper/api'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import NoDataFound from "../../no-data-found/no-data-found";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const ReportLists = () => {
    const [product, setProduct] = useState<any>()
    const [report, setReport] = useState<any>()
    const [result, setResult] = useState<any>()
    const [allData, setAllData] = useState<any>()
    const { selectedData } = useSelector((state: any) => state)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const router = useRouter()

    useEffect(() => {
        getProduct(selectedData)
        getReport(selectedData)
    }, [selectedData])

    const getProduct = async (option: any) => {
        try {
            const data: any = await stackWrapper.getProductComperisions("product_comparison_entries", option,`${router.query.lang}`)
            setProduct(data[0])
        } catch (error) {

        }

    }
    const getReport = async (option: any) => {
        try {
            const data: any = await stackWrapper.getReport("voc_report_entries", option,`${router.query.lang}`)

            setReport(data[0])
        } catch (error) {

        }

    }
    useEffect(() => {
        if (product?.length && report?.length) {
            setAllData([...product, ...report]?.sort((a, b) => {
                if (a?.updated_at > b?.updated_at) {
                    return -1;
                }
                if (a?.updated_at < b?.updated_at) {
                    return 1;
                }
                return 0;
            }))
        } else if (product?.length) {
            setAllData([...product]?.sort((a, b) => {
                if (a?.updated_at > b?.updated_at) {
                    return -1;
                }
                if (a?.updated_at < b?.updated_at) {
                    return 1;
                }
                return 0;
            }))
        } else if (report?.length) {
            setAllData([...report]?.sort((a, b) => {
                if (a?.updated_at > b?.updated_at) {
                    return -1;
                }
                if (a?.updated_at < b?.updated_at) {
                    return 1;
                }
                return 0;
            }))
        } else {
            setAllData([])
        }


    }, [product, report])
    useEffect(() => {
        if (allData?.length > 0) {
            setTotalPage(allData?.length / 10)
            setResult(allData.slice(0, 10))
        }
    }, [allData])
    const handlePage = ({ selected }: any) => {
        setCurrentPage(Number(selected) + 1);
        setResult(allData.slice((selected) * 10, (selected + 1) * 10))
        router.push('#report')
    };

    return (
        <>
            {result != 0 ?
                <Stack as="div" direction="column" rowGap={40}>
                    <Stack as="div" direction="row" wrap columnGap={32} rowGap={32} className="tab--content--block left--content--block">
                        {result?.map((data: any, index: number) => {
                            return (
                                <Stack className="card--block">
                                    <Link href={changeUrl(router.query.lang,`${data?.type == "vocreport" ? `/business-intelligence/voc-reports${data?.url}` : `/business-intelligence/product-comparison${data?.url}`}`)}>

                                        <a>

                                            <Card key={index} radius={16} bordered highlightOnHover padding={false} style={{ overflow: "hidden" }}>
                                                {data?.banner_section?.banner_image &&
                                                    <Stack as="div" className="card--image">
                                                        <img src={data?.type == "vocreport" ? data?.thumnail
                                                            ?.url : data?.thumbnail
                                                            ?.url} alt="Image" />
                                                    </Stack>
                                                }
                                                <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                                    {data?.types?.length &&
                                                        <Text variant="subtitle-2">{data?.types[0]?.title}</Text>
                                                    }
                                                    {data?.title
                                                        &&
                                                        <Text as="h5" variant="heading-5" className="mt-4">{data?.title
                                                        }</Text>
                                                    }
                                                </Stack>
                                            </Card>
                                        </a>
                                    </Link>
                                </Stack>
                            );
                        })}
                    </Stack>
                    <Stack as="div" direction="column" hAlign="center">
                        {allData?.length > 1 && <Pagination onPageChange={handlePage}
                            itemsCount={allData?.length}
                            forcePage={currentPage - 1} />}
                    </Stack>
                </Stack>
                :
                <NoDataFound />
            }
        </>
    );
}