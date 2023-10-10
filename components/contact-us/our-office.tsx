import { CardSlider } from "../../components/image-card-slider/card-slider";
import { Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
export const OurOffice = () => {
    const { contact }: any = useSelector((state) => state)
    return (
        <>
            {contact && contact?.office_locations && <>
                <Container dimension="extra-large" className="mt-128">
                    <Stack as="div" direction="row" columnGap={32} rowGap={32} vAlign="start" hPadding={24}>
                        <Stack as="div" className="slider--wrapper" rowGap={64}>
                            <Stack direction="row" as="div" wrap vAlign="center" hAlign="space-between" className="slider--head center">
                                <SectionHead
                                    title={contact?.office_locations?.section_title}
                                />
                            </Stack>
                            <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="tab--content--block">

                                {contact?.office_locations?.office?.length > 0 && contact?.office_locations?.office?.map((item: any, index: number) => {
                                    return (
                                        <CardSlider
                                            key={index}
                                            cardImage={item?.office_image?.url}
                                            semiTitle={item?.city_name}
                                            paraBlock={item?.office_address}
                                        />
                                    )
                                })}
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </>}
        </>
    )
}