import { Button, Card, Container, Stack, Text } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import Link from "next/link";
import NoDataFound from "../no-data-found/no-data-found";
import { useRouter } from "next/router";
import { changeUrl } from "../../helper/ChangeLanguage";
export const ProductBenefits = () => {
    const { pageProductData } = useSelector((state: any) => state.blogData);
    const listLength = pageProductData?.benefits?.blocks?.standard_block?.length;
    const router=useRouter()
    return (
        <>
            <Container dimension="extra-large" className="mt-128">
                <Stack as="div" hPadding={24} direction="column" rowGap={32}>
                    <Stack direction="column" rowGap={64} as="div">
                        <SectionHead
                            title={pageProductData?.benefits?.title}
                        />

                        {listLength != 0 ?
                            <Stack direction="row" rowGap={32} columnGap={32} wrap vPadding={16} className="tab--content--block desktop--view mt-10">
                                {pageProductData?.benefits?.blocks?.standard_block?.map((data: any, index: number) => {
                                    return (
                                        <Card key={index} bordered className="card--block" highlightOnHover>
                                            <Stack as="div" direction="column" rowGap={24}>
                                                {data?.input_svg_icon_code_if_required_ ? <Stack as="div" className="card--icon" dangerouslySetInnerHTML={htmlToTextConvert(data?.input_svg_icon_code_if_required_)} /> :
                                                    <Stack as="div" className="card--icon">
                                                        <img src={data?.image?.url} alt="Card Icon" />
                                                    </Stack>
                                                }
                                                {data.title &&
                                                    <Text as="h3" variant="heading-3" className="card--title">{data.title}</Text>
                                                }
                                                {data.description &&
                                                    <Text as="p" variant="body-1">{data.description
                                                    }</Text>
                                                }
                                            </Stack>
                                        </Card>
                                    );
                                })}
                            </Stack>
                            :
                            <NoDataFound />
                        }
                    </Stack>
                    <Stack direction="column" wrap hAlign="center">
                        <Link href={changeUrl(router.query.lang,pageProductData?.benefits?.button?.href) }>
                            <Button kind='primary' dimension="big"  >{pageProductData?.benefits?.button?.title}</Button>

                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};