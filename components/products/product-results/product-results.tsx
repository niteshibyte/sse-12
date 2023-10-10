import { Container, Stack, Text, useBreakpointsConfig } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import NoDataFound from "../../no-data-found/no-data-found";
type config = {
    variant: "heading-1" | "heading-3" | "display-3";
}
export const ProductResults = () => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {variant: "heading-3"},
        lg: {variant: "heading-1"},
        xl: {variant: "display-3"},
        fallback: {variant: "heading-3"}
    })
    const { pageProductData } = useSelector((state: any) => state.blogData);
    return (
        <>
            <Container as="div" dimension="extra-large" className="mt-128">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        <Stack direction="row" wrap vAlign="center" hAlign="center" rowGap={32} columnGap={32}>
                            <Stack as="div" wrap direction="row" className="stack--block--content">
                                {pageProductData?.stats_section?.stats?.length > 0 ? pageProductData?.stats_section?.stats?.map((data:any) => {
                                    return (
                                        <Stack as="div" className="results--list" key={data?._metadata?.uid} rowGap={16}>
                                            <Text as="h5" variant={value.variant} className="big--tagline">{data?.title}</Text>
                                            <Text as="h6" variant="heading-6" className="text--medium">{data?.short_title}</Text>
                                            <Text variant="body-1" className="">{data?.description}</Text>
                                        </Stack>
                                    )
                                }) : <NoDataFound />}
                               
                            </Stack>
                            <Stack as="div" className="stack--block--image">
                                <Stack as="div" className="stack--image">
                                    <iframe width="700" height="480" src="https://www.youtube.com/embed/Mo8sV_hx8mg" title="Turn the Voice of the Customer into winning decisions with Wonderflow" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
};