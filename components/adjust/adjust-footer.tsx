import { Button, Container, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
import { useSelector } from "react-redux"

export const AdjustFooter = () => {
    const { section_5_lead_generation_,footer }: any = useSelector((state: any) => state?.marketing)

    return(
        <>
            <Stack as="div" className="adjust--footer adjust--bg--dark--blue">
                {section_5_lead_generation_&&<Stack as="div" className="adjust--footer--demo--section">
                    <Container dimension="large">
                        <Stack as="div" className="adjust--demo" vPadding={96} rowGap={24} hAlign="center">
                            <Stack as="div" className="adjust--footer--icon">
                                
                            </Stack>
                            <Stack as="div" className="adjust--footer--demo--text" rowGap={16}>
                                <Text as="h3" variant="heading-3" textAlign="center">{section_5_lead_generation_?.title}</Text>
                                <Text as="p" variant="body-1" textAlign="center">{section_5_lead_generation_?.description}</Text>
                            </Stack>
                            <Stack as="div" className="adjust--footer--demo--button">
                                <Button as="a" href={section_5_lead_generation_?.button?.href} dimension="big">{section_5_lead_generation_?.button?.title}</Button>
                            </Stack>
                        </Stack>
                    </Container>
                </Stack>}
                {footer&&<Stack as="div" className="adjust--footer--bottom">
                    <Container dimension="large">
                        <Stack as="div" hAlign="center" vPadding={48} rowGap={32}>
                            <Stack className="adjust--logo" as="div" hAlign="center">
                                <Link href='/'>
                                    <img src={footer?.logo?.url} />
                                </Link>
                            </Stack>
                            <Text as="p" variant="body-2" textAlign="center">{footer?.copyright_info}</Text>
                        </Stack>
                    </Container>
                </Stack>}
            </Stack>
        </>
    )
}