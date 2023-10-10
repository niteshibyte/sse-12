import { Container, Stack } from "@wonderflow/react-components";
import { ArticlesLists } from "./articles-lists";
import { useSelector } from "react-redux";
import { SectionHead } from "../../section-head/section-head";
import { RightSidebar } from "../right-sidebar/right-sidebar";
import RightSidebarMobileMenu from "../right-sidebar/right-sidebar-mobile-menu";
export const BlogContent = () => {
    const selectedData = useSelector((state: any) => state?.selectedData)
    return(
        <>
            {selectedData &&<Container id='blog' dimension="extra-large" className="mt-128">
                <Stack as="div" rowGap={64} vPadding={24} hPadding={24}>
                    <Stack as="div" rowGap={64} className="filterHeader">
                        <SectionHead category={selectedData?.blogCategory!='All' ?selectedData?.blogCategory:""} author={selectedData?.blogCategory=='All' &&selectedData?.blogAuthor}  title={"Articles"} />
                        <RightSidebarMobileMenu />
                    </Stack>
                    {/* Article Lists */}

                    <SectionHead category={selectedData?.blogCategory!='All' ?selectedData?.blogCategory:""} author={selectedData?.blogCategory=='All' &&selectedData?.blogAuthor} title={"Articles"} />
                    <Stack as="div" direction="row" wrap rowGap={32} columnGap={64} vAlign="start" hAlign="space-between">
                        {/* Left Content lists */}
                        
                        <Stack as="div" className="tab--content--block left--content--block">
                            <ArticlesLists  />
                        </Stack>

                        {/* Right Sidebar */}
                        <RightSidebar />
                    </Stack>
                </Stack>
            </Container>}
        </>
    );
}