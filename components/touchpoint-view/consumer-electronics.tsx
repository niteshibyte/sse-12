import { Button, Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import { DepartmentMediaSections } from "../departments/department-sections/sections-media";
import Link from "next/link";

type config = {
    vPadding: "64" | "128",
}

export const CustomerElectronics = () => {

    const { matches, value } = useBreakpointsConfig<config>({
        md: { vPadding: "128" },
        lg: { vPadding: "128" },
        xl: { vPadding: "128" },
        fallback: { vPadding: "64" },
    });
    
    const { promotional_banner_touchpoint } = useSelector((state: any) => state?.touchpoint)
    return (
        <>
            {promotional_banner_touchpoint &&<Container dimension="full" padding={false} className="bg--dark section--with--circle feedback--section overflow-hidden no-radius">
                <Container dimension="extra-large">
                    {/* Circle Images */}
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>

                    {/* Media Section */}
                    <Stack as="div" direction="column" rowGap={64} vPadding={value.vPadding} hPadding={24}>
                        <DepartmentMediaSections
                            mediaClass="media--item--right"
                            mediaImage={promotional_banner_touchpoint?.hero_image?.url}
                            mediaSmallTitle={promotional_banner_touchpoint?.short_heading}
                            mediaTitleSecond={promotional_banner_touchpoint?.title}
                            mediaTextSecond={promotional_banner_touchpoint?.description} 
                            mediaButtonClass='primary' />

                        {/* Counter Section */}
                        <Stack as="div" wrap direction="row" hAlign="center" className="stack--block--content mt-16">
                            {promotional_banner_touchpoint?.stats?.length > 0 && promotional_banner_touchpoint?.stats?.map((item: any, index: number) => {
                                return (
                                    <Stack as="div" className="results--list" rowGap={16} key={index}>
                                        <Text as="h5" variant="display-3" className="big--tagline">{item?.first_input}</Text>
                                        <Text variant="body-1">{item?.second_input}</Text>
                                    </Stack>
                                )
                            })}

                        </Stack>

                        {/* Button */}
                        <Stack as="div" direction="column" hAlign="center" className="mt-16 feedback--button">
                        <Link href={promotional_banner_touchpoint?.buttonsuccess?.href}>
                            <Button kind='primary' dimension="big"  >{promotional_banner_touchpoint?.buttonsuccess?.title}</Button>

                        </Link>
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>
    );
}