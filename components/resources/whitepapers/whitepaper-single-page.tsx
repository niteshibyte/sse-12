import {Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { WhitePaperContent } from "./whitepaper-content";
type config = {
    vPadding: "64" | "128",
}
export const WhitePaperSinglePage = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {vPadding: "128"},
        lg: {vPadding: "128"},
        xl: {vPadding: "128"},
        fallback: {vPadding: "64"},
    });
    return (
        <>
            <Stack id='whitepaper' as="div" vPadding={value.vPadding}>
                <WhitePaperContent />
            </Stack>
        </>
    )
}