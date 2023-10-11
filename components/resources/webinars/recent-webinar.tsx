import { Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../../../components/section-head/section-head";
import { CardSlider } from "../../../components/image-card-slider/card-slider";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const RecentWebinar = ({recentData}:{recentData:any}) => {
  const router=useRouter()
  const [data, setData] = useState<any>();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    if(recentData?.length){
      setData(recentData[0])
      setLoader(false)
    }
   
  }, [recentData]);


  return (
    <>
      {!loader ? (
        <Container dimension="extra-large" className="mt-128">
          <Container dimension="full">
            <Stack as="div" className="mt-128" rowGap={32}>
              <Stack
                direction="row"
                as="div"
                wrap
                vAlign="center"
                hAlign="center"
                className="slider--head center"
              >
                <SectionHead title="Recent Webinars" />
              </Stack>
              <Stack
                as="div"
                direction="row"
                wrap
                rowGap={32}
                columnGap={32}
                className="tab--content--block"
              >

                {data &&
                  data?.length > 0 &&
                  data?.map((item: any, index: number) => {
                    return (
                      <Stack as="div" className="card--block">
                        <Link
                          href={changeUrl(router.query.lang,`/resources/webinar${item?.url}`)}
                        >
                          <a>
                            <CardSlider
                              key={index}
                              cardImage={
                                item?.choose_categories?.length > 0 &&
                                item?.choose_categories[0]?.category_thumbnail
                                  ?.url
                              }
                              cardSmallTitle={
                                item?.choose_categories?.length > 0 &&
                                item?.choose_categories?.map((data: any) => data?.title)?.join(' , ')
                              }
                              semiTitle={item?.title}
                              userLists={item?.speakers}
                            />
                          </a>
                        </Link>
                      </Stack>
                    );
                  })}

              </Stack>
            </Stack>
          </Container>
        </Container>
      ) : <Loader height='100vh' width='100vw' />}
    </>
  );
};
