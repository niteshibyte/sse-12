import { Button, Container, Stack, Text } from "@wonderflow/react-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { changeUrl } from "../../helper/ChangeLanguage";
export const BusinessInsights = () => {
    const router=useRouter()
    const insights_for_business_excellence = useSelector((state: any) => state.blogData?.departmentData?.insights_for_business_excellence);
    return (
        <>
            <Container padding={false} dimension="full" className="bg__light mt-0 mb-128">
                <Container dimension="large">
                    <Stack as="div" direction="column" rowGap={64} vPadding={128} className="info--content">
                        <Stack as="div" direction="column" rowGap={24}>
                            <Text variant="heading-2" textAlign="center">{insights_for_business_excellence?.main_title}</Text>
                            <Text variant="body-1" textAlign="center">{insights_for_business_excellence?.short_title}</Text>
                            <Stack direction="column" hAlign="center">
                                <Link href={changeUrl(router.query.lang,insights_for_business_excellence?.request_a_demo_bt?.href)}>
                                    <Button kind='primary' dimension="big"  >{insights_for_business_excellence?.request_a_demo_bt?.title}</Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className="info--image mt-4">
                        <img src={insights_for_business_excellence?.section_hero_image?.url} alt="Insight image" />
                    </Stack>
                </Container>
            </Container>
        </>
    );
};