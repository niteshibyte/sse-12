import { Container, Stack } from "@wonderflow/react-components";
import { AboutMedia } from "./about-media/about-media-section";
import { useSelector } from "react-redux";
export const AboutFoundation = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && about?.info_section_2 && about?.info_section_2?.left_right_sections?.length > 0 && <Container dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        {about?.info_section_2?.left_right_sections?.map((item: any, index: number) => {
                            return (
                                <AboutMedia
                                    mediaClass={(index+1)%2==0?"media--item--left":"media--item--right"}  
                                    mediaImage={item?.image?.url}
                                    mediaSmallTitle={item?.single_line}
                                    mediaTitle={item?.title}
                                    paraBlock={item?.description}
                                    mediaButton={item?.link?.title}
                                    mediaButtonHref={item?.link?.href}
                                    mediaButtonClass="secondary"
                                />
                            )
                        })}
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}