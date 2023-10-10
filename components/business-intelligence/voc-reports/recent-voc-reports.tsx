import { Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
import NoDataFound from "../../no-data-found/no-data-found";

export const BiRecentVocReports = () => {
    const { other_voc_reports } = useSelector((state: any) => state?.singlereport)

    return (
        <>
            <Container dimension="extra-large" className="bi--page--prod--comp--list mt-128">
                <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <SectionHead
                        title="Recent VoC reports"
                    />
                    {other_voc_reports?.length > 0 ?
                        <Stack as="div" className="mt-16">
                            <Stack as="div" direction="row" wrap columnGap={32} rowGap={32} className="tab--content--block">
                                {other_voc_reports.map((data: any, index: number) => {
                                    if(index<3){
                                    return (
                                        <Stack as="div" className="card--block">
                                            <Link href={`/business-intelligence/voc-reports${data?.url}`}>
                                                <a>
                                                    <Card radius={16} bordered highlightOnHover key={index} padding={false} className="overflow-hidden">
                                                        {(data?.download_report_section?.background_image||data?.thumnail?.url) &&
                                                            <Stack as="div" className="card--image">
                                                                <img src={ data?.thumnail?.url||data?.download_report_section?.background_image?.url} alt="Image" />
                                                            </Stack>
                                                        }
                                                        <Stack as="div" className="card--content" rowGap={16} hPadding={24} vPadding={24}>

                                                            <Text variant="subtitle-2">VoC report</Text>

                                                            {data?.title &&
                                                                <Text as="h5" variant="heading-5" >{data?.title}</Text>
                                                            }
                                                        </Stack>
                                                    </Card>
                                                </a>
                                            </Link>
                                        </Stack>
                                    );  
                                    }
                                })}
                            </Stack>
                        </Stack>
                        :
                        <NoDataFound />
                    }
                </Stack>
            </Container>
        </>
    );
}