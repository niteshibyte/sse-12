
import { SectionHead } from "../section-head/section-head";
import { Container, Stack } from "@wonderflow/react-components";
import { DepartmentMediaSections } from "./department-sections/sections-media";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
const departmentClass = ["media--item--right pl-16 mt-16", "pr-16 mt-128", "media--item--right pl-16 mt-128", "pr-16 mt-128"];
export const DepartmentCustomerFocus = () => {
    const leftrightsections = useSelector((state: any) => state.blogData?.departmentData?.leftrightsections);
    return (
        <>
            <Container dimension="extra-large">
                {leftrightsections?.leftrightsections?.left_right_sections?.length > 0 ? <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                    <Stack as="div" className="full--headings">
                        <SectionHead
                            title={leftrightsections?.section_heading}
                        />
                    </Stack>
                    <Stack as="div" direction="column" rowGap={96}>
                        {leftrightsections?.leftrightsections?.left_right_sections?.map((data: any, i: number) => {
                            return (
                                <DepartmentMediaSections
                                    mediaClass={departmentClass[i]}
                                    mediaImage={data?.image?.url}
                                    mediaTitleSmall={data?.title}
                                    paraBlock={data?.description}
                                    mediaButton={data?.link?.title}
                                    mediaButtonClass='primary'
                                    mediaButtonHref={data?.link?.href}
                                    id={data?._metadata?.uid}
                                />
                            )
                        })}
                    </Stack>
                </Stack> :
                    <Loader height='100vh' width='100vw' />}
            </Container>
        </>

    );
}