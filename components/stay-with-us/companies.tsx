import {  Container, Stack,  } from "@wonderflow/react-components";
import { CompaniesData } from "../card--contents/companies-data";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import { useBreakpointsConfig } from "@wonderflow/react-components";
type config = {
    direction : "row" | "column";
    hPadding : "24";
    vPadding : "32" | "64" | "128";
    rowGap : "16" | "64"
}
export const StayWithUs = () => {
    const {matches, value} = useBreakpointsConfig<config>({
        md: {direction : "row", hPadding: "24", vPadding: "64", rowGap: "64"},
        lg: {direction : "row", hPadding: "24", vPadding: "128", rowGap: "64"},
        xl: {direction : "row", hPadding: "24", vPadding: "128", rowGap: "64"},
        fallback: {direction : "column", hPadding: "24", vPadding: "32", rowGap: "16"},
    });
    const { section_7}: any = useSelector((state: any) => state?.homeData)
    return(
        <>{
            section_7&&<>
            <Container dimension="extra-large" className="stayWithUs">
                <Stack as="div" direction="column" rowGap={value.rowGap} hPadding={value.hPadding}>
                    <SectionHead 
                        smallTitle=""
                        title={section_7?.section_title} 
                        headText=""
                    />
                    <CompaniesData />
                </Stack>
            </Container>
        </>
        }</>
    );
};