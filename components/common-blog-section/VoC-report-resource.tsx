import { Card, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
import { changeUrl } from "../../helper/ChangeLanguage"
import { useRouter } from "next/router"
export const VoCReportResource = (props: any) => {
    const router=useRouter()
    return (
        <Card padding={false} bordered highlightOnHover className="card--block">
            <Link href={changeUrl(router.query.lang,`/business-intelligence/voc-reports${props?.item?.url}`)}>
                <a>
                    {props?.item?.thumnail &&
                        <Stack as="div" className="card--image">
                            <img src={props?.item?.thumnail?.url} alt="Image" />
                        </Stack>
                    }
                    <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                        <Text variant="body-2">VOC REPORT</Text>

                        {props?.item?.title &&
                            <Text as="h5" variant="heading-5" className="mt-4 text--bold">{props?.item?.title}</Text>
                        }
                    </Stack>
                </a>
            </Link>

        </Card>
    )
}