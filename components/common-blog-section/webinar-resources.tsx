import { Card, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
export const WebinarResource = (props: any) => {
    return (
        <Card padding={false} bordered highlightOnHover className="card--block">

            <Link href={`/resources/webinar${props?.item?.url}`}>
                <a>

                    {props?.item?.choose_categories?.length > 0 &&
                        <Stack as="div" className="card--image">
                            <img src={props?.item?.choose_categories[0]?.category_thumbnail?.url} alt="Image" />
                        </Stack>
                    }
                    <Stack as="div" className="card--content" hPadding={24} vPadding={24}>

                        <Text variant="body-2">WEBINAR</Text>

                        {props?.item?.title &&
                            <Text as="h5" variant="heading-5" className="mt-4 text--bold">{props?.item?.title}</Text>
                        }
                    </Stack>
                </a>
            </Link>

        </Card>
    )
}