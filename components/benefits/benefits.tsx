import { Button, Container, Stack } from "@wonderflow/react-components";
import { ProductTabs } from "../card--contents/product-tabs";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";
export const Benefits = () => {
    const { section_three }: any = useSelector((state: any) => state?.homeData)
    return (
        <>
            {section_three
                && <>
                    <Container dimension="extra-large" className="benefitSec">
                        <Stack as="div" direction="column" rowGap={64} hPadding={24}>
                            <SectionHead
                                smallTitle=""
                                title={section_three?.title}
                                headText={section_three?.sub_title}
                            />
                            <Stack as="div" direction="column" rowGap={24}>
                                <ProductTabs ></ProductTabs>
                                <Stack direction="column" wrap hAlign="center" className="mt-8">
                                    <Link href={section_three?.button_name?.href}>
                                        <Button kind="primary" dimension="big"  >{section_three?.button_name?.title}</Button>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </>}
        </>
    );
};