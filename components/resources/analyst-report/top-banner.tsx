
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import DownloadForm from "../../book-demo/download-form";
export const TopBanner = () => {
    const analystsingle = useSelector((state: any) => state?.analystsingle)
    return (
        <>
            {analystsingle && <Container dimension="full" padding={false} className="bg--dark webform-section overflow-hidden">
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Container dimension="extra-large">
                    <Stack direction="row" vPadding={128} hPadding={24} wrap vAlign="center" hAlign="space-between" rowGap={48} columnGap={48} className="animate__animated animate__fadeInUp">
                        <Stack as="div" direction="column" rowGap={32} className="webform--content">
                            <Text as="h1" variant="display-4">{analystsingle?.banner_main_title}</Text>
                            <Text as="p" variant="tagline-2">{analystsingle?.banner_sub_title}</Text>
                        </Stack>

                        <Stack as="div" hPadding={48} vPadding={48} className="webform--form--block form">
                            <DownloadForm utm={analystsingle?.utm} />

                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>

    )
}