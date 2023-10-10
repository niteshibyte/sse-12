'use client';
import { Container, Spinner, Stack, Card, Text } from "@wonderflow/react-components";
import { SectionHead } from '../../../components/section-head/section-head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StackWrapper from '../../../helper/api'
import Link from 'next/link';
import Loader from "../../loader/Loader";
import { changeUrl } from "../../../helper/ChangeLanguage";
export const RecentSuccessStory = ({recentStory}:{recentStory:any}) => {
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const [data,setData]=useState([])
    useEffect(() => {
       
        if (recentStory?.length > 0) {
            setLoader(true)
            setData( recentStory[0])
        }
        setLoader(false)


    }, [router,recentStory])
    
    return (
        <>
            {!loader ? <>
                <Container dimension="extra-large">
                    <Stack as='div' direction='column' rowGap={64}>
                        <Stack direction="row" hPadding={24} as="div" wrap vAlign="center" hAlign="center" className="slider--head center">
                            <SectionHead
                                title="Recent Success Stories"
                            />
                        </Stack>
                        <Stack hPadding={24} direction='row' wrap columnGap={32} rowGap={16} className='tab--content--block mt-16 image-card-partner'>

                            {data?.length > 0 && data?.map((item: any, index: number) => {
                                return (
                                    <>
                                    
                                    <Card padding={false} bordered highlightOnHover className="card--block">
                                        <Link href={changeUrl(router.query.lang,`/resources/success-story/${item?.url?.split('/')[1]}`)}>
                                            <a>
                                            <Stack as="div" className="card--image">
                                                <img src={item?.hero_image?.url} alt="Image1" />
                                            </Stack>
                                            <Stack as="div" className="card--content" rowGap={16} hPadding={24} vPadding={24}>
                                                <Text variant="subtitle-2">{item?.category?.length > 0 && item?.category?.map((data:any)=>data?.title)?.join(' , ')}</Text>
                                                <Text as="h5" variant="heading-5" className="mt-4">{item?.title}</Text>
                                            </Stack>
                                            </a>
                                        </Link>
                                    </Card>
                                    </>
                                )
                            })}


                        </Stack>
                    </Stack>
                </Container>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}