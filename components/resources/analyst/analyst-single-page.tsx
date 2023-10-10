import {Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { AnalystContent } from "./analyst-content";

type config = {
    vPadding: "64" | "128",
}

export const AnalystSinglePage = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {vPadding: "128"},
        lg: {vPadding: "128"},
        xl: {vPadding: "128"},
        fallback: {vPadding: "64"},
    });
    return (
        <>
            <Stack id='analyst' as="div" vPadding={value.vPadding}>
                <AnalystContent />
            </Stack>
        </>
    )
}