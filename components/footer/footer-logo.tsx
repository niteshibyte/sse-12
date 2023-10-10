import { Stack, Text } from "@wonderflow/react-components";
import { NewsLetter } from "./newsletter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../helper/htmlToTextConvert";
import { footerLogo } from "../../interface/footer";
import Link from "next/link";

export const FooterLogo = () => {
    const [data, setData] = useState<footerLogo>()
    const footer = useSelector((state: any) => state?.footer);

    useEffect(() => {
        setData(footer)
    }, [footer])
    return (
        <Stack className="footer--small--print" rowGap={16}>
            <Stack className="footer--logo">
                <Link href='/'><img src={data?.logo?.url} alt={data?.logo?.title} /></Link>
            </Stack>
            <Text as="h3" variant="heading-3"><div dangerouslySetInnerHTML={htmlToTextConvert(data?.newsletter_form_text)} className="fs-32" /></Text>
            <NewsLetter></NewsLetter>
        </Stack>
    );
};