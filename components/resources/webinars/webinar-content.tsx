import { Container,  Stack,  Card, Pagination } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { WebinarCardContent } from "./webinar-card-content";
import { SectionHead } from "../../../components/section-head/section-head";
import StackWrapper from '../../../helper/api'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { SETWEBINARAPIDATA } from "../../../reducer/webinarapiData";
import RightSidebarMobileMenu from "./right-sidebar/right-sidebar-mobile-menu";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import NoDataFound from "../../no-data-found/no-data-found";
import { useRouter } from "next/router";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const WebinarContent = () => {
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [selectedItem, setSelectedItem] = useState<Object>({})
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true)
    const router=useRouter()
    const selectedData = useSelector((state: any) => state?.selectedData)
    useEffect(() => {
        getWebData(1, 10, selectedItem)
        setCurrentPage(1)
        setLoader(true)
    }, [selectedItem])
    useEffect(() => {
        setSelectedItem(selectedData)
        setLoader(true)
        

    }, [selectedData])


    const getWebData = async (page: number, limit: number, selected: Object) => {
        try {
            const data: any = await StackWrapper.getWebinar('webinar_entry', "blt9334a60c040a264d", page, limit, selected,`${router.query.lang}`)
            setData(data?.length > 0 ? data[0] : [])
            setTotalPage(data[1])
            dispatch(SETWEBINARAPIDATA(data))
            setLoader(false)

        } catch (error) {
            setLoader(false)

        }
    }


    const handlePage = ({ selected }: any) => {
        setLoader(true)
        setCurrentPage(selected + 1)
        getWebData(selected + 1, 10, selectedItem)
        router.push('#webinar')
    
    }
    return (
        < >
            <Container  dimension="extra-large">
                <Stack  as="div" hPadding={24} rowGap={64}>
                    <Stack as="div" className="filterHeader">
                        <SectionHead title={"All webinars"} />
                        <RightSidebarMobileMenu />
                    </Stack>
                    <Stack as="div" direction="row" wrap rowGap={32} columnGap={64} vAlign="start">
                        {loader ? <Loader height='50vh' width='60vw' /> : data?.length > 0 ? <Stack as="div" direction="row" columnGap={32} rowGap={32} wrap className="tab--content--block left--content--block">
                            <>

                                {data.map((item: any, index: number) => {
                                    return (
                                        <Card key={index} padding={false} bordered highlightOnHover className="card--block">
                                            <Link href={changeUrl(router.query.lang,`/resources/webinar${item?.url}`)}>
                                                <a>

                                                    <WebinarCardContent
                                                        cardImage={item?.choose_categories?.length > 0 && item?.choose_categories[0]?.category_thumbnail?.url}
                                                        cardSmallTitle={item?.choose_categories?.length > 0 && item?.choose_categories?.map((data: any) => data?.title)?.join(' , ')}
                                                        semiTitle={item?.title}
                                                        para={item?.description}
                                                        userLists={item?.speakers?.speaker}
                                                    />
                                                </a>

                                            </Link>
                                        </Card>
                                    )
                                })}



                                <Stack as="div" direction="column" hAlign="center">
                                    {totalPage > 10 && <Pagination onPageChange={handlePage} itemsCount={totalPage} forcePage={currentPage - 1} />}
                                </Stack>
                            </>
                        </Stack> : <NoDataFound />}
                        <RightSidebar />
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
