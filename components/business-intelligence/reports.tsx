import { Container, Stack, useBreakpointsConfig } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { ReportLists } from "./reports/reports-list";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import RightSidebarMobileMenu from "./right-sidebar/right-sidebar-mobile-menu";
type config = {
    rowGap: "64" | "32";
}
export const Reports = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {rowGap: "64"},
        lg: {rowGap: "64"},
        xl: {rowGap: "64"},
        fallback: {rowGap: "32"}
    });

    return(
        <>
            <Container dimension="extra-large" className="mt-128" id='report'>
                <Stack direction="column" rowGap={value.rowGap}>
                    {/* Section Head */}
                    <Stack as="div" className="filterHeader" hPadding={32}>
                        <SectionHead  title="Reports" />
                        <RightSidebarMobileMenu />
                    </Stack>
                    <Stack as="div" direction="row" wrap hAlign="space-between" vAlign="start" rowGap={32} columnGap={32} hPadding={24} className="mt-10">
                        {/* Left Content Section */}
                        <ReportLists />
                        {/* Right Sidebar */}
                        <RightSidebar />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}