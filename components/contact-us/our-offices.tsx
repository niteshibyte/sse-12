import { Container, Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { CardSlider } from "../image-card-slider/card-slider";
export const OurOffices = () => {
    return(
        <>
            <Container dimension="extra-large" className="mt-128 contact-card-blocks">
                <Container dimension="full" padding={false}>
                    <Stack as="div" hPadding={24}>
                        <SectionHead 
                            title="Our Offices"
                        />

                        <Stack as="div" direction="row" wrap rowGap={32} columnGap={32} className="tab--content--block mt-16">
                            <CardSlider
                                cardImage="/france-office.png"
                                semiTitle="France"
                                paraBlock="40 Rue du Colisée, 75008 Paris"
                            />
                            <CardSlider
                                cardImage="/usa-office.png"
                                semiTitle="USA"
                                paraBlock="501 Congress Ave. Suite 150, Austin, TX 78701"
                            />
                            <CardSlider
                                cardImage="/italy-office.png"
                                semiTitle="Italy"
                                paraBlock="Corso Europa, 15 — 20122 Milan"
                            />
                            <CardSlider
                                cardImage="/netherlands-office.png"
                                semiTitle="Netherlands"
                                paraBlock="Nieuwezijds Voorburgwal 162 — 1012 SJ Amsterdam"
                            />
                            <CardSlider
                                cardImage="/uk-office.png"
                                semiTitle="UK"
                                paraBlock="Mappin House, 4 Winsley Street, London W1W 8HF"
                            />
                            <CardSlider
                                cardImage="/italy-office.png"
                                semiTitle="Italy"
                                paraBlock="Via Torre Verde, 2 — 38122 Trento TN"
                            />
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}