import { Card, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
import { useRouter } from "next/router"
import { changeUrl } from "../../helper/ChangeLanguage"
export const ProductComparisonResource = (props: any) => {
    const router=useRouter()
    return (
        <Card padding={false} bordered highlightOnHover className="card--block">
            <Link href={changeUrl(router.query.lang,`/business-intelligence/product-comparison${props?.item?.url}`)}>
                <a>
                    {props?.item?.banner_section?.banner_image&&
                        <Stack as="div" className="card--image">
                            <img src={props?.item?.banner_section?.banner_image?.url} alt="Image" />
                        </Stack>
                    }
                    <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                        <Text variant="body-2">VoC Report</Text>

                        {props?.item?.title &&
                            <Text as="h5" variant="heading-5" className="mt-4 text--bold">{props?.item?.title}</Text>
                        }
                    </Stack>
                </a>
            </Link>

        </Card>
    )
}