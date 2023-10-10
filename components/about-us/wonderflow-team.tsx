import { Container, Stack } from "@wonderflow/react-components";
import { AboutMedia } from "./about-media/about-media-section";
import { useSelector } from "react-redux";

export const WonderflowTeam = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && about?.info_section
                && <Container dimension="extra-large" className="mt-128">
                    <Stack as="div" hPadding={24}>
                        {about?.info_section?.left_right_sections?.length > 0 && about?.info_section?.left_right_sections?.map((item: any, index: number) => {
                            return (
                                <AboutMedia
                                    key={index}
                                    mediaClass={(index + 1) % 2 == 0 ? "media--item--right" : "media--item--left"}
                                    mediaImage={item?.image?.url}
                                    mediaSmallTitle={item?.single_line}
                                    mediaTitle={item?.title}
                                    paraBlock={item?.description}
                                    mediaButton={item?.link?.title}
                                    mediaButtonHref={item?.link?.href}
                                    mediaButtonClass='primary'

                                />
                            )
                        })}
                    </Stack>
                </Container>}
        </>
    );
}