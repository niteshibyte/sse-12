import { Container, List, Stack, Text, Card, Pagination, Spinner } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { AnalystCardContent } from "./analyst-card-content";
import StackWrapper from '../../../helper/api'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import RightSidebarMobileMenu from "./right-sidebar/right-sidebar-mobile-menu";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import { SectionHead } from "../../section-head/section-head";
import { SETWEBINARAPIDATA } from "../../../reducer/webinarapiData";
import { SETANALYSTDATA } from "../../../reducer/analystData";
import { useRouter } from "next/router";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const AnalystContent = () => {
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [selectedItem, setSelectedItem] = useState<Object>({})
    const dispatch = useDispatch()
    const selectedData = useSelector((state: any) => state?.selectedData)
    const [loader, setLoader] = useState(true)
    const router=useRouter()
    useEffect(() => {
        setLoader(true)
        getWebData(1, 10, selectedItem)
        setCurrentPage(1)
    }, [selectedItem])
    useEffect(() => {
        setLoader(true)

        setSelectedItem(selectedData)
    }, [selectedData])


    const getWebData = async (page: number, limit: number, selected: Object) => {
        try {
            const data: any = await StackWrapper.getAnalyst('analyst_report_entries', "blt019f354bd8fbdf7d", page, limit, selected,`${router.query.lang}`)
            setData(data?.length > 0 ? data[0] : [])
            setTotalPage(data[1])
            dispatch(SETANALYSTDATA(data))
            setLoader(false)
        } catch (error) {
            setLoader(false)

        }
    }


    const handlePage = ({ selected }: any) => {
        setLoader(true)
        setCurrentPage(selected + 1)
        getWebData(selected + 1, 1, selectedItem)
        router.push('#analyst')
    }


    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Container dimension="full">
                    <Stack as="div" direction="row" wrap rowGap={32} columnGap={64} vAlign="start">
                        <Stack as="div" className="filterHeader">
                            <SectionHead title={"All webinars"} />
                            <RightSidebarMobileMenu />
                        </Stack>
                        {loader ?<Loader height='50vh' width='60vw' />  : data?.length > 0 ? <Stack as="div" rowGap={64} className="tab--content--block left--content--block">
                            <>

                                {data.map((item: any, index: number) => {
                                    return (
                                        <Link href={changeUrl(router.query.lang,`/resources/analyst-report${item?.url}`)}>

                                            <a>
                                                <AnalystCardContent
                                                    cardImage={item?.main_section?.report_image?.url}
                                                    cardSmallTitle={item?.select_categories?.length > 0 && item?.select_categories?.map((item: any) => item?.title)?.join(' , ')}
                                                    semiTitle={item?.banner_main_title}
                                                    para={item?.description}
                                                    userLists={item?.speakers?.speaker}
                                                />
                                            </a>

                                        </Link>
                                    )
                                })}



                                <Stack as="div" direction="column" hAlign="center">
                                    {totalPage > 10 && <Pagination onPageChange={handlePage} itemsCount={totalPage} forcePage={currentPage - 1} />}
                                </Stack>
                            </>
                        </Stack> : <Text as="p" color="danger" textAlign="center" className="mt-10">No Data Found</Text>}
                        <RightSidebar />
                    </Stack>
                </Container>
            </Container>
        </>
    )
}
