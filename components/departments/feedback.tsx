import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";

export const DepartmentFeedback = () => {
    const promotional_banner_success_stories = useSelector((state: any) => state.blogData?.departmentData?.promotional_banner_success_stories);
    return (
        <>
            <Container dimension="full" >
                <Stack as="div" hPadding={32}>
                    <Stack as="div" wrap direction="row">
                        {promotional_banner_success_stories?.stats?.length > 0 && <Stack as="div" wrap direction="row" className="">
                            {promotional_banner_success_stories?.stats?.map((data: any) => {
                                return (
                                    <Stack as="div" className="results--list" rowGap={16} key={data?._metadata?.uid}>
                                        <Text as="h5" variant="display-3" className="big--tagline">{data?.first_input}</Text>
                                        <Text variant="body-1">{data?.second_input}</Text>
                                    </Stack>
                                )
                            })}
                        </Stack>}
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}