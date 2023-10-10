import {
  Container,
  Stack,
  Pagination,
 
} from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { SectionHead } from "../../../components/section-head/section-head";
import StackWrapper from "../../../helper/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import RightSidebarMobileMenu from "./right-sidebar/right-sidebar-mobile-menu";
import { SuccessStoryCardContent } from "./success-story-card-content";
import { SETSUCCESSSTORYAPIDATA } from "../../../reducer/successStoryApiData";
import NoDataFound from "../../no-data-found/no-data-found";
import { useRouter } from "next/router";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const SuccessStoryContent = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState<Object>({});
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true)
  const router = useRouter()
  const selectedData = useSelector((state: any) => state?.selectedData);
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
      const data: any = await StackWrapper.getSuccessStoryAPI(
        "success_stories_entry",
        page,
        limit,
        selected
      );
      setData(data?.length > 0 ? data[0] : []);
      setTotalPage(data[1]);
      dispatch(SETSUCCESSSTORYAPIDATA(data[0]));
      setLoader(false)
    } catch (error) {
      setLoader(false)
    }
  };

  const handlePage = ({ selected }: any) => {
    setLoader(true)
    setCurrentPage(selected + 1);
    getWebData(selected + 1, 1, selectedItem);
    router.push('#success')
  };
  return (
    <Stack as="div" id='div'>
      <Container dimension="extra-large" className="success-single-page-stories">
        <Container dimension="full">
          <Stack
            as="div"
            direction="row"
            wrap
            rowGap={32}
            columnGap={64}
            vAlign="start"
          >
            <Stack as="div" className="filterHeader">
              <SectionHead title={"All success stories"} />
              <RightSidebarMobileMenu />
            </Stack>
            {loader ? <Loader height='100vh' width='100vw' /> : data?.length > 0 ? (
              <Stack
                as="div"
                rowGap={64}
                className="tab--content--block left--content--block"
              >
                <>
                  {
                    data.map((item: any, index: number) => {
                      return (
                        <Link
                          href={changeUrl(router.query.lang,`/resources/success-story/${item?.url?.split("/")[1]}`)}
                        >
                          <a>
                            <SuccessStoryCardContent
                              cardImage={
                                item?.hero_image && item?.hero_image?.url
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
        </Container>
      </Container>
    </Stack>
  );
};
