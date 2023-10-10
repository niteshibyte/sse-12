
import { MediaSections } from "./industry-sections/sections-media";
import { SectionHead } from "../section-head/section-head";
import { Container, Stack } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const IndustryTeams = () => {
    const [unmatched_insights, setUnmatched_insights] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );
    useEffect(() => {
        if (industryPageData) {
            setUnmatched_insights(industryPageData?.unmatched_insights_for_your_teams)
        }
    }, [industryPageData])
    return(
        <>
            <Container dimension="extra-large">
                <Stack direction="column" rowGap={64} as="div" hPadding={24}>
                    <Stack as="div" className="industry--headings">
                        <SectionHead 
                            title={unmatched_insights?.section_heading}
                        />
                    </Stack>

                    <MediaSections 
                        mediaClass="media--item--right pl-16 mt-16"
                        mediaImage={unmatched_insights?.hero_image?.url}
                        mediaTitleSmall={unmatched_insights?.title}
                        mediaParaBlock={unmatched_insights?.description}
                        mediaButton={unmatched_insights?.button?.title}
                        mediaButtonHref={unmatched_insights?.button?.href}
                        mediaButtonClass='primary'

                    />
                </Stack>
            </Container>
        </>        
    );
}