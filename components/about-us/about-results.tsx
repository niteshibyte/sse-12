import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
export const AboutReults = () => {
    const { about }: any = useSelector((state) => state)
    return (
        <>
            {about && about?.stats_section?.length > 0 && <>
                <Container dimension="full" className="mt-128">
                        <Stack as="div" hPadding={24}>
                            <Stack as="div" wrap direction="row" className="stack--block--content">
                                {about?.stats_section?.map((item: any, index: number) => {
                                    return (
                                        <Stack key={index} as="div" className="results--list" rowGap={16}>
                                            <Text as="h5" variant="display-3" className="big--tagline">{item?.input_1}</Text>
                                            <Text as="p" variant="body-1" className="text--normal">{item?.input_2}</Text>
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>
                </Container>
            </>}
        </>
    );
}