import { Button, Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
export const GetStartedView = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            <Container dimension="extra-large">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24} vPadding={128}>
                        <Stack as="div" hPadding={24} vPadding={128} rowGap={32} className="section--with--circle width--60 bg--dark overflow-hidden get-started-block mb--0">
                            {/* Circle Images */}
                            <Stack className="circle--highlight circle-left-top">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>
                            <Stack className="circle--highlight circle-right-bottom">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>

                            {/* Section Head */}
                            <SectionHead
                                title="Get Started Today"
                                headText="Become a Wonderflow Partner to increase your earnings, enhance your skills, and expand your network."
                            />

                            {/* Button */}
                            <Stack as="div" direction="column" hAlign="center">
                                <Link href="/become-a-partner">
                                    <Button kind="primary" dimension="big"  >Become a partner</Button>

                                </Link>

                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}