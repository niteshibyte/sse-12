import { Container, Stack } from "@wonderflow/react-components";
import { ImageCard } from "./leader-card/image-card";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
export const OurLeadership = () => {
    const { our_leaders }: any = useSelector((state: any) => state?.team)
    return (
        <>
            {our_leaders && <Container dimension="extra-large">
                    <Stack as="div" hPadding={24} rowGap={64}>
                        <SectionHead
                            title={our_leaders?.title}
                            headText={our_leaders?.sub_title}
                        />
                        {our_leaders?.team_member?.length > 0 && <Stack className="mt-16 card--sec" direction="row" wrap columnGap={32} rowGap={32}>


                            {our_leaders?.team_member?.map((item: any) => {
                                return (
                                    <ImageCard
                                        cardImage={item?.image?.url}
                                        cardTitle={item?.name}
                                        designation={item?.designation}
                                        socialLink={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1ZM7.1 20.5H3.6V9h3.6v11.5h-.1ZM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1Zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>}
                                        cardButton={item?.button
                                            ?.title}
                                        linkedin_url={item?.linkedin_url}
                                        item={item}
                                    />
                                )
                            })}
                            
                        </Stack>}
                    </Stack>
            </Container>}
        </>
    );
}