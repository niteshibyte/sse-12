import {Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { WebinarContent } from "./webinar-content";
type config = {
    vPadding: "64" | "128",
}
export const WebinarSinglePage = () => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {vPadding: "128"},
        lg: {vPadding: "128"},
        xl: {vPadding: "128"},
        fallback: {vPadding: "64"},
    });
    return (
        <>
            <Stack as="div" vPadding={value.vPadding} id='webinar'>
                <WebinarContent />
            </Stack>
        </>
    )
}