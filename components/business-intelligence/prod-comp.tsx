import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import Link from "next/link";
import NoDataFound from "../no-data-found/no-data-found";

export const BiProductComparisonList = () => {
    const { more_comparisons,types }: any = useSelector((state: any) => state?.singleproduct)
    return(
        <>
            {more_comparisons&&<Container dimension="extra-large" className="bi--page--prod--comp--list">
                <Stack as="div" hPadding={24}>
                    {more_comparisons?.length > 0 ?
                        <Stack as="div"> 
                            <Stack as="div" direction="row" wrap columnGap={32} rowGap={32} className="tab--content--block">
                                {more_comparisons?.map((data:any, index:number) => {
                                    return(
                                        <Stack className="card--block">
                                        <Link href={`/business-intelligence/product-comparison${data?.url}`}>
                                        <a>

                                        <Card key={index} bordered highlightOnHover radius={16} padding={false} className="overflow-hidden">
                                            {data?.thumbnail &&
                                                <Stack as="div" className="card--image">
                                                    <img src={data?.thumbnail?.url} alt="Image"/>
                                                </Stack>
                                            }
                                            <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                                {types?.length>0 &&
                                                    <Text variant="subtitle-2">{types[0]?.title}</Text>
                                                }
                                                {data?.title &&
                                                    <Text as="h5" variant="heading-5" className="mt-4 text--bold">{data?.title}</Text>
                                                }
                                            </Stack>
                                        </Card>
                                        </a>
                                        </Link>
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    : 
                        <NoDataFound />
                    }                        
                </Stack>
            </Container>}
        </>
    );
}