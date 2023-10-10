import { useSelector } from "react-redux";
import { BetterTogether } from "./better-together";
import { ClientWins } from "./client-wins";
import { Container, Stack, Card, Text, Button, Textfield, Toggle } from "@wonderflow/react-components";
import BookDemoForm from "../book-demo/book-demo-form";

export const MainBanner = () => {
    const { request }: any = useSelector((state) => state)
    return (
        <>
            {request && <>
                <Container dimension="full" padding={false} className="bg--dark webform-section overflow-hidden">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Container dimension="extra-large">
                        <Stack hPadding={24} direction="column" wrap vPadding={128} vAlign="center" hAlign="space-between" rowGap={96} columnGap={64} className="animate__animated animate__fadeInUp">
                            <Stack direction="row" hPadding={24} wrap vAlign="center" hAlign="space-between" rowGap={48} columnGap={128} className="animate__animated animate__fadeInUp">
                                <Stack as="div" direction="column" rowGap={32} className="webform--content">
                                    <Text as="h1" variant="display-3">{request?.banner_title}</Text>
                                    <Text as="h4" variant="tagline-2" className="text--normal">{request?.short_title}</Text>

                                    {request?.key_points?.length > 0 && request?.key_points?.map((item: any, index: number) => {
                                        return (
                                            <Stack as="div" direction="row" columnGap={24} rowGap={24} className="info-icon-block mt-8">
                                                <Stack as="div" className="icon">
                                                    <img src={item?.icon_image?.url} alt="Icon" />
                                                </Stack>
                                                <Text as="p" variant="body-1" className="">{item?.key_point}</Text>
                                            </Stack>
                                        )
                                    })}


                                </Stack>
                                <Stack as="div" className="webform--form--block form">
                                   
                                <BookDemoForm />
                                   
                                </Stack>
                            </Stack>
                            <ClientWins />
                            <BetterTogether />
                        </Stack>
                    </Container>
                </Container>
            </>}
        </>
    )
}