
import { Container, Stack, Text } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
export const ClientMessage = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.ceo_message && <>
                <Container dimension="extra-large" className="mb-128">
                    <Container dimension="full" padding={false}>
                        <Stack as="div" hPadding={24}>
                            <Stack as="div" wrap direction='row' rowGap={16} columnGap={2} className="mt-16 quotation-style-1 rounded-12 feedback--block">
                                <Stack as="div" direction="row" wrap rowGap={16} columnGap={2} vAlign="start" className="rounded-12 quote--width">
                                    <Stack as="div" className="quote--mark">
                                        <img src="/quotation--mark.png" alt="Quotation Mark" />
                                    </Stack>
                                    <Stack as="div" className="quote--content">
                                        <Text as="blockquote" variant="tagline-1" className="intro--text">{becomeapartner?.ceo_message?.message}</Text>
                                        <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-6">
                                            <Stack as="div" className="blog--author--details">
                                                <Text as="p" className="text--bold">{becomeapartner?.ceo_message?.name}
                                                    <Text as="span"> {becomeapartner?.ceo_message?.designation}</Text></Text>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack as="div" className='image--width'>
                                    <img src={becomeapartner?.ceo_message?.image?.url} alt="image 1" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    );
}