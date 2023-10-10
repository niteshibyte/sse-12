
import { MediaSections } from "./industry-sections/sections-media";
import { Container, Stack } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const TopSection = () => {
    const [hero_banner, setHero_banner] = useState<any>({})
    const industryPageData = useSelector((state: any) => state?.industry?.industry_page_Data
    );

    useEffect(() => {
        if(industryPageData){
            setHero_banner(industryPageData?.hero_banner)
        }
    
    }, [industryPageData])

    return(
        <>
            <Container dimension="full" padding={false} className="bg__light top--section">
                <Container dimension="extra-large">
                    <Stack vPadding={128} as="div" hPadding={24}>
                        <MediaSections 
                            mediaClass="media--item--right"
                            mediaImage={hero_banner?.banner_image?.url}
                            mediaTitle={hero_banner?.banner_title}
                            mediaSubTitle={hero_banner?.banner_sub_titel}
                            mediaText={hero_banner?.banner_description}
                            mediaButton={hero_banner?.banner_cta?.title}
                            mediaButtonHref={hero_banner?.banner_cta?.href}
                            mediaButtonClass='primary'
                        />
                    </Stack>
                </Container>
            </Container>
        </>
    );
}