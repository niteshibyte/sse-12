import { Container, Stack, Card, Text, Button, List } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
import { changeUrl } from "../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const BirdEyeView = () => {
    const router=useRouter()
    const { sectionone } = useSelector((state: any) => state?.touchpoint)
    return (
        <>
            {sectionone && <>
                <Container dimension="extra-large" className="top--section mt-128 infographics--sec touchpoint--infographics">
                    <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                        <SectionHead
                            title={sectionone?.sectiontitle}
                        />
                        <Stack className="mt-16" direction="row" vAlign="start" wrap rowGap={32} columnGap={32} >
                            <Stack direction="row" fill wrap as="div" className="media__item">
                                <img src={sectionone?.section_image
                                    ?.url} alt="Media Image" />
                            </Stack>
                            <Stack as="div" className="media--body">
                                <Stack direction="row" rowGap={16} columnGap={16} wrap vPadding={16} className="tab--content--block desktop--view">


                                    {sectionone?.blocks?.standard_block
                                        && sectionone?.blocks?.standard_block?.map((data: any, index: number) => {
                                            return (
                                                <Card className="card--block flip-card" padding={false} bordered key={index} highlightOnHover>
                                                    <Stack as="div" className="flip-card-inner">
                                                        <Stack as="div" className="flip-card-front" hPadding={24} vPadding={32}>
                                                            <Stack as="div" direction="row" columnGap={8} vAlign="center">
                                                                <List>
                                                                    <List.Li vPadding="8" marker="circle-check" markerColor="var(--highlight-green-foreground)" variant="heading-5">{data?.title}</List.Li>
                                                                </List>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack as="div" className="flip-card-back" hPadding={24} vPadding={32}>
                                                            <Text as="p" className="fs-18">{data?.description}</Text>
                                                        </Stack>
                                                    </Stack>
                                                </Card>
                                            )
                                        })}

                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="column" hAlign="center" vAlign="center" className="mt-8">

                            <Link href={changeUrl(router.query.lang,sectionone?.get_started?.href)}>
                                <Button kind='primary' dimension="big"  >{sectionone?.get_started?.title}</Button>

                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    )
}