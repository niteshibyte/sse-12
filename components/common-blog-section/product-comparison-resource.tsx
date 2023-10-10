import { Card, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
export const ProductComparisonResource = (props: any) => {
    return (
        <Card padding={false} bordered highlightOnHover className="card--block">
            <Link href={`/business-intelligence/product-comparison${props?.item?.url}`}>
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