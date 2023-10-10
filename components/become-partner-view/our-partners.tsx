import { Stack } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { useSelector } from "react-redux";
import Link from "next/link";

export const OurPartners = () => {
    const { becomeapartner }: any = useSelector((state) => state)
    return (
        <>
            {becomeapartner && becomeapartner?.partner_section && <>
                <Stack as="div" hPadding={24} className="section--with--circle width--60 bg--dark overflow-hidden mt-128 no--radius">
                    {/* Circle Images */}
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>

                    {/* Section Head */}
                    <SectionHead
                        title={becomeapartner?.partner_section?.section_title}
                        headText={becomeapartner?.partner_section?.section_sub_title}
                    />

                    {/* Partner Logo */}

                    <Stack as="div" direction="row" wrap vAlign="center" className="logo-container">
                        {becomeapartner?.partner_section?.partner_logos?.length > 0 && becomeapartner?.partner_section?.partner_logos?.map((item: any, index: number) => {
                            return (
                                <Stack as="div">
                                    <img src={item?.url} alt="Logo 1" />
                                </Stack>
                            )
                        })}

                    </Stack>

                    {/* Button */}
                    <Stack as="div" direction="column" hAlign="center" className="">
                        <Link href={becomeapartner?.partner_section?.button_name?.href}>
                            <a className="primaryBtn button">{becomeapartner?.partner_section?.button_name?.title}</a>
                        </Link>
                    </Stack>
                </Stack>
            </>}
        </>
    );
}