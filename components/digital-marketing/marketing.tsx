import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoDataFound from "../no-data-found/no-data-found";

export const DigitalMarketing = () => {
    const [resource, setResource] = useState<any>({})
    const homeData = useSelector((state: any) => state?.homeData);

    useEffect(() => {
        setResource(homeData?.companies_blocks?.find((item: any) => Object.keys(item).includes('resource'))?.resource)
    }, [homeData])

    return (
        <>
            <Container dimension="large">
                <SectionHead
                    smallTitle='Home Page'
                    title='Learn more about Wonderflow at work.'
                    headText=""
                />

                {resource?.resource_group?.length != 0 ?
                    <Stack as="div" className="mt-6 tab--content--block animate__animated animate__fadeInUp" direction="row" wrap rowGap={32} columnGap={32} hAlign="center">
                        {resource?.resource_group?.map((data: any, index: number) => {
                            return (
                                <Card key={index} padding={false} className="card--block">
                                    {data?.image &&
                                        <Stack as="div" className="card--image">
                                            <img src={data?.image?.url} alt={data?.image?.title} />
                                        </Stack>
                                    }
                                    <Stack as="div" className="card--content" hPadding={24} vPadding={24}>
                                        {data.category &&
                                            <Text variant="body-2">{data.category}</Text>
                                        }
                                        {data.title &&
                                            <Text className="highlight--text mt-4">{data.title}</Text>
                                        }
                                    </Stack>
                                </Card>
                            );
                        })}
                    </Stack>
                    :
                    <NoDataFound />
                }
            </Container>
        </>
    );
};