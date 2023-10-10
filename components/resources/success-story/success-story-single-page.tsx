import {Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { SuccessStoryContent } from "./success-story-content";
type config = {
    vPadding: "64" | "128",
}
export const SuccessStorySinglePage = () => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {vPadding: "128"},
        lg: {vPadding: "128"},
        xl: {vPadding: "128"},
        fallback: {vPadding: "64"},
    });
    return (
        <>
            <Stack id='success' as="div" vPadding={value.vPadding}>
                <SuccessStoryContent />
            </Stack>
        </>
    )
}