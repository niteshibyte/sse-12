import { Container, Stack } from "@wonderflow/react-components";
import { FooterLogo } from "./footer-logo";
import { useEffect, } from "react";
import { SETFOOTERDATA } from "../../reducer/footer";
import { useDispatch } from "react-redux";
import { FooterMenu } from "./footer-menu";
import { FooterBottom } from "./footer-bottom";
import stackWrapper from '../../helper/api';
import { useSelector } from "react-redux";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
export const Footer = () => {
    const dispatch = useDispatch();
    const footerData = useSelector((state: any) => state?.footer)
    const router=useRouter()

    useEffect(() => {
       
            getFooter()

       
    }, [router])

    const getFooter = async () => {
        try {
            const data = await stackWrapper.getFooter('footer', 'bltac4c4c45ee451d4e',`${router.query.lang}`)
            dispatch(SETFOOTERDATA(data))
        } catch (error) {
        }
    }
    return (
        <>
            <Head>

                <Script type="text/javascript">
                    {`
                    function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document)
                        `}

                </Script>

            </Head>
            <Container padding={false} className="site--footer">
                <Container dimension="extra-large">
                    <Stack as="div">
                        <Stack className="footer--section" wrap direction="row" hPadding={24} vPadding={80} vAlign="start" columnGap={80} rowGap={32}>
                            <FooterLogo />
                            <FooterMenu />
                        </Stack>
                        <FooterBottom />
                    </Stack>
                </Container>
            </Container>
        </>
    );
};