import { Card, Container, Stack, Text } from "@wonderflow/react-components"
import { useSelector } from "react-redux"

export const ChooseApps = () => {
    const { section_2 }: any = useSelector((state: any) => state?.marketing)

    return (
        <>
            {section_2 && <Container dimension="large" className="adjust--feeds--section">
                <Stack as="div" rowGap={40}>
                    <Stack as="div" className="adjust--heading--block" rowGap={16}>
                        <Text as="h3" variant="heading-3" textAlign="center">{section_2.section_title}</Text>
                        <Text as="p" variant="tagline-3" textAlign="center" color="dark">{section_2.section_sub_title}</Text>
                    </Stack>
                    <Stack as="div" className="adjust--feed--items" wrap direction="row" columnGap={32} rowGap={32}>
                        {section_2?.blocks?.length > 0 && section_2?.blocks?.map((item:any, index:number) => {
                            return (
                                <Card padding={false} className="adjust--card--item" key={index}>
                                    <Stack className="adjust--card--wrapper" rowGap={32}>
                                        <Stack as="div" className="adjust--card--image">
                                            <img src={item?.block_image?.url} alt="Card Image" />
                                        </Stack>
                                        <Stack as="div" rowGap={8} className="adjust--card--content">
                                            <Text as="h5" variant="heading-5">{item?.block_title}</Text>
                                            <Text as="p" variant="tagline-3">{item?.block_description}</Text>
                                        </Stack>
                                    </Stack>
                                </Card>
                            )
                        })}
                       
                    </Stack>
                </Stack>
            </Container>}
        </>
    )
}