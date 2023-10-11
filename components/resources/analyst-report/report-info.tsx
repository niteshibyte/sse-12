
import { Container, Stack,  Text, Button } from "@wonderflow/react-components";
import { useSelector } from "react-redux";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import Link from "next/link";
import { changeUrl } from "../../../helper/ChangeLanguage";
import { useRouter } from "next/router";
export const ReportInfo = () => {
    const router=useRouter()
    const { main_section } = useSelector((state: any) => state?.analystsingle)
    return (
        <>
            {main_section && <Container dimension="extra-large">
                <Stack as="div" direction='column' rowGap={32}>
                    <Stack as="div" direction="row" wrap columnGap={64} rowGap={32} vAlign="start" hPadding={24}>
                        <Stack direction="row" fill wrap as="div" className="media__item">
                            <img src={main_section?.report_image?.url} alt="Media Image" />
                        </Stack>
                        <Stack as="div" rowGap={32} className="media--body">
                            <Stack as="div" direction="row" vAlign="start" rowGap={16} columnGap={24} className="bg__light quotation-style-1 rounded-12">
                                <Stack as="div" className="quote--mark">
                                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.26718 17.5997C0.93385 16.1331 0.133849 14.5331 0.133849 11.8664C0.133849 7.19974 3.46718 3.0664 8.13385 0.93307L9.33385 2.6664C4.93385 5.0664 4.00052 8.13307 3.73385 10.1331C4.40052 9.73307 5.33385 9.59974 6.26718 9.73307C8.66719 9.99974 10.5339 11.8664 10.5339 14.3997C10.5339 15.5997 10.0005 16.7997 9.20052 17.7331C8.26718 18.6664 7.20052 19.0664 5.86718 19.0664C4.40051 19.0664 3.06718 18.3997 2.26718 17.5997ZM15.6005 17.5997C14.2672 16.1331 13.4672 14.5331 13.4672 11.8664C13.4672 7.19974 16.8005 3.0664 21.4672 0.933071L22.6672 2.6664C18.2672 5.0664 17.3339 8.13307 17.0672 10.1331C17.7339 9.73307 18.6672 9.59974 19.6005 9.73307C22.0005 9.99974 23.8672 11.9997 23.8672 14.3997C23.8672 15.5997 23.3339 16.7997 22.5339 17.7331C21.6005 18.6664 20.5339 19.0664 19.2005 19.0664C17.7339 19.0664 16.4005 18.3997 15.6005 17.5997Z" fill="#E00000" />
                                    </svg>
                                </Stack>
                                <Stack as="div">
                                    <Stack as="div" className="quote--content">
                                        <Text as="blockquote" variant="tagline-1" className="intro--text"><div dangerouslySetInnerHTML={htmlToTextConvert(main_section?.blockquote_section)} /></Text>
                                        <Stack as="div" direction="row" vAlign="center" columnGap={16} className="blog--author mt-6">
                                            <Stack as="div" className="quote--icon">
                                                <img src={main_section?.report_image?.url} alt="Image logo" />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack as="div" className="quote--single--page--content">
                                <Text as="p"><div dangerouslySetInnerHTML={htmlToTextConvert(main_section?.rich_text_editor)} /></Text>
                            </Stack>



                        </Stack>
                    </Stack>
                    <Stack direction="column" hAlign="center" vAlign="center">
                        <Link href={changeUrl(router.query.lang,main_section?.report_link?.href)}>
                            <Button kind="primary" dimension="big"  >{main_section?.report_link?.title}</Button>

                        </Link>
                    </Stack>
                </Stack>
            </Container>}
        </>

    )
}