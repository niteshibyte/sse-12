import { Card, Stack, Text } from "@wonderflow/react-components"
import Link from "next/link"
import { changeUrl } from "../../../helper/ChangeLanguage"
import { useRouter } from "next/router"
export const OtherAnalystCard = (props: any) => {
    const router=useRouter()
    return (
        <>
        <Card padding={false} className="card--block analyst--other--block" bordered highlightOnHover>
            <Link href={changeUrl(router.query.lang,`/resources/analyst-report/${props?.blog_link}`)}>
                <a>

                    {props?.blog_image &&
                        <Stack as="div" className="card--image">
                            <img src={props?.blog_image} alt="Image" />
                        </Stack>
                    }
                    <Stack as="div" className="card--content" rowGap={16} hPadding={24} vPadding={24}>

                        {props?.blog_smallTitle &&
                            <Text variant="subtitle-2">{props?.blog_smallTitle}</Text>
                        }

                        {props?.blog_title &&
                            <Text as="h5" variant="heading-5" className="mt-4 text--bold">{props?.blog_title}</Text>
                        }
                    </Stack>
                </a>
            </Link>

        </Card>
        </>
    )
}