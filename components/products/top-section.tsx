import { Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";

type config = {
    variant: "display-4" | "display-2";
    variant2: "tagline-3" | "tagline-1";
    vPadding: "64" | "128";
}

export const ProductTopSection = () => {
    const { pageProductData } = useSelector((state: any) => state?.blogData);

    const {matches, value} = useBreakpointsConfig<config>({
        md: {variant: "display-2", variant2: "tagline-1", vPadding: "128"},
        lg: {variant: "display-2", variant2: "tagline-1", vPadding: "128"},
        xl: {variant: "display-2", variant2: "tagline-1", vPadding: "128"},
        fallback: {variant: "display-4", variant2: "tagline-3", vPadding: "64"},
    });

    return (
        <>
            <Container dimension="full" padding={false} className="section--with--circle product-top-section overflow-hidden no-radius">
                {/* Circle Images */}
                <Stack className="circle--highlight circle-left-top">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>
                <Stack className="circle--highlight circle-right-bottom">
                    <img src="/red-circle.png" alt="Red Circle" />
                </Stack>

                <Container dimension="extra-large" className="product--top--banner">
                    <Stack as="div" direction="column" rowGap={32} hPadding={24} vPadding={value.vPadding}>
                        <Text as="h2" variant={value.variant} textAlign="center">{pageProductData?.banner?.banner_title}</Text>
                        <Text as="p" variant={value.variant2} className="mt-8 text--normal" textAlign="center"><div dangerouslySetInnerHTML={htmlToTextConvert(pageProductData?.banner?.banner_description
                        )}/></Text>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}