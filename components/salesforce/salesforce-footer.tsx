import { Container, List, Select, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
import { useSelector } from "react-redux"
import { changeUrl } from "../../helper/ChangeLanguage"
import { useRouter } from "next/router"

export const SalesforceFooter = () => {
    const { footer }: any = useSelector((state: any) => state?.salesforce)
const router=useRouter()
    return (
        <>
            {footer && <Container dimension="full" className="salesforce--footer--bg">
                <Container dimension="large">
                    <Stack as="div" direction="row" columnGap={32} vPadding={24}>
                        {/* <Stack as="div" className="footer--lang">
                            <Select name="site--lang" dimension="big" title='Choose Language'>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </Select>
                        </Stack> */}
                        <Stack as="div" className="footer--terms">
                            <Text as="p" variant="body-3">{footer.footer_text}</Text>
                            <List hideMarker>
                                {footer?.name?.length > 0 && footer?.name?.map((item: any, index: number) => {
                                    return (
                                        <List.Li key={index}>
                                            <Link href={changeUrl(router.query.lang,item?.href)}>{item?.title}</Link>
                                        </List.Li>
                                    )
                                })}

                            </List>
                        </Stack>
                        
                    </Stack>
                </Container>
            </Container>}
        </>
    )
}