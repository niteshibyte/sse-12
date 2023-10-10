import { Container, Stack } from "@wonderflow/react-components";
import { AboutMedia } from "./about-media/about-media-section";
import { useSelector } from "react-redux";

export const AboutMission = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && <Container dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        {about?.intro_section?.left_right_sections?.length > 0 && about?.intro_section?.left_right_sections?.map((item: any, index: number) => {
                            return (
                                <AboutMedia
                                    mediaClass={(index+1)%2==0?"media--item--left":"media--item--right"}
                                    mediaImage={item?.image?.url}
                                    mediaSmallTitle={item?.single_line}
                                    mediaTitle={item?.title}
                                    paraBlock={item?.description}
                                />
                            )
                        })}
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}