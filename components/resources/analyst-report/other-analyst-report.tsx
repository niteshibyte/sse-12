import { Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../../../components/section-head/section-head";
import { useSelector } from "react-redux";
import { OtherAnalystCard } from "./other-analust-card";
export const OtherAnalystReport = () => {
    const { other_analyst_reports } = useSelector((state: any) => state?.analystsingle)
    return (
        <>
            {other_analyst_reports?.length > 0 && <Container dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" direction="row" columnGap={32} rowGap={32} vAlign="start" hPadding={24}>
                        <Stack as="div" direction="column" rowGap={64}>
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head">
                                <SectionHead
                                    title="Other Analyst reports"
                                />
                            </Stack>
                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="tab--content--block mt-16">

                                {other_analyst_reports?.map((item: any, index: number) => {

                                    return (

                                        <OtherAnalystCard
                                            blog_link={item?.url}
                                            blog_image={item?.main_section?.report_image?.url}
                                            blog_smallTitle={item?.select_categories?.length > 0 && item?.select_categories?.map((data: any) => data.title).join(' , ')}
                                            blog_title={item?.banner_main_title}
                                        />
                                    )
                                })}


                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>

    )
}