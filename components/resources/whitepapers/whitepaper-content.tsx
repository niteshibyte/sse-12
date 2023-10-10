import {
  Container,
  List,
  Stack,
  Text,
  Card,
  Pagination,
  Spinner,
} from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { SectionHead } from "../../../components/section-head/section-head";
import StackWrapper from "../../../helper/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import RightSidebarMobileMenu from "./right-sidebar/right-sidebar-mobile-menu";

import { WhitePaperCardContent } from "./whitepaper-card-content";
import { SETWHITEPAPERAPIDATA } from "../../../reducer/whitepaperapiData";
import NoDataFound from "../../no-data-found/no-data-found";
import { useRouter } from "next/router";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const WhitePaperContent = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState<any>();
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();
  const selectedData = useSelector((state: any) => state?.selectedData);
  const router=useRouter()
  useEffect(() => {
    setLoader(true)
    getWebData(1, 10, selectedItem);
    setCurrentPage(1);

  }, [selectedItem]);
  useEffect(() => {
    setLoader(true)

    setSelectedItem(selectedData);
  }, [selectedData]);

  const getWebData = async (page: number, limit: number, selected: Object) => {
    try {
      const data: any = await StackWrapper.getWhitePaperAPI(
        "whitepaper_entries",
        "blt6f4c61851c90a696",
        page,
        limit,
        selected
      );
      setData(data?.length > 0 ? data[0] : []);
      setTotalPage(data[1]);
      dispatch(SETWHITEPAPERAPIDATA(data));
      setLoader(false)
    } catch (error) {
      setLoader(false)

    }
  };

  const handlePage = ({ selected }: any) => {
    setLoader(true)
    setCurrentPage(selected + 1);
    getWebData(selected + 1, 1, selectedItem);
    router.push('#whitepaper')
  };
  return (
    <>
      <Container dimension="extra-large" className="mt-128 white-paper-page">
        <Container dimension="full" padding={false}>
          <Stack as="div" hPadding={24} rowGap={32}>
            <Stack as="div" className="filterHeader">
              <SectionHead title={"All whitepapers"} />
              <RightSidebarMobileMenu />
            </Stack>
            <Stack
              as="div"
              direction="row"
              wrap
              rowGap={32}
              columnGap={64}
              vAlign="start"
            >
              {loader ? <Loader height='100vh' width='100vw' />: data?.length > 0 ? (
                <Stack
                  as="div"
                  direction="row"
                  columnGap={32} rowGap={32} wrap
                  className="tab--content--block left--content--block"
                >
                  <>
                    { 
                      data.map((item: any, index: number) => {
                        return (
                          <Card padding={false} bordered highlightOnHover className="card--block">
                            <Link
                              href={changeUrl(router.query.lang,`/resources/whitepaper${item?.url}`)}
                            >
                              <a>
                                <WhitePaperCardContent
                                  cardImage={
                                    item?.featured_image &&
                                    item?.featured_image?.url
                                  }
                                  cardSmallTitle={
                                    item?.category?.length > 0 &&

                                    item?.category?.map((data: any) => data?.title)?.join(' , ')
                                  }
                                  semiTitle={item?.title}
                                  para={item?.description}
                                  userLists={item?.speakers?.speaker}
                                />
                              </a>
                            </Link>
                          </Card>
                        );
                      })}

                    <Stack as="div" direction="column" hAlign="center">
                      {totalPage > 10 && (
                        <Pagination
                          onPageChange={handlePage}
                          itemsCount={totalPage}
                          forcePage={currentPage - 1}
                        />
                      )}
                    </Stack>
                  </>
                </Stack>
              ) : (
                <NoDataFound />
              )}

              <RightSidebar />
            </Stack>
          </Stack>
        </Container>
      </Container>
    </>
  );
};
