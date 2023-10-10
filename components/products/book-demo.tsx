import { Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import BookDemoForm from "../book-demo/book-demo-form";
type config = {
    rowGap: "48" | "128",
    vPadding: "64" | "128",
}
export const ProductBookDemo = () => {
    const { matches, value } = useBreakpointsConfig<config>({
        md: { rowGap: "128", vPadding: "128" },
        lg: { rowGap: "128", vPadding: "128" },
        xl: { rowGap: "128", vPadding: "128" },
        fallback: { rowGap: "48", vPadding: "64" },
    });

    const { pageProductData } = useSelector((state: any) => state?.blogData);

    return(
        <>
            {pageProductData &&<Container dimension="full" padding={false} className="bg--dark webform-section overflow-hidden">
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Stack className="circle--highlight circle-right-bottom">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>

                <Container dimension="large" padding={false}>
                    <Stack direction="row" vPadding={value.vPadding} hPadding={24} wrap vAlign="center" hAlign="space-between" rowGap={value.rowGap} columnGap={128} className="animate__animated animate__fadeInUp">
                        <Stack as="div" direction="column" rowGap={32} className="webform--content">
                            <Stack as="div" className="webform--image">
                                <img src={pageProductData?.promotional_lead_banner_product_page?.image?.url} alt="Webform Image" />
                            </Stack>
                            <Stack as="div" direction="column" rowGap={32} className="webform--content--data">
                                <Text as="h1" variant="display-4">{pageProductData?.promotional_lead_banner_product_page?.title_of_section}</Text>
                                <Text as="p" variant="tagline-2">{pageProductData?.promotional_lead_banner_product_page?.description}</Text>
                            </Stack>
                        </Stack>
                        <Stack as="div" className="webform--form--block form">
                            
                            <BookDemoForm />
                        </Stack>
                    </Stack>
                </Container>
            </Container>}
        </>
    );
};