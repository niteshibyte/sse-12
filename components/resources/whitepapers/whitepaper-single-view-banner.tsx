import { Button, Container, Stack, Grid, Text, List, Spinner } from "@wonderflow/react-components";
import { GridItem } from "@wonderflow/react-components/dist/components/grid/item/grid-item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StackWrapper from '../../../helper/api'
import { useRouter } from "next/router";
import { Profile } from "../../user-profile/profile";
import htmlToTextConvert from "../../../helper/htmlToTextConvert";
import Loader from "../../loader/Loader";

export const WebinarSingleViewBanner = (props: any) => {
const lang='en-us'
    const [id, setId] = useState('')
    const [data, setData] = useState<any>()
    const router = useRouter()
    const selectedData = useSelector((state: any) => state?.webinar?.webinar)

    useEffect(() => {
        setId(String(router.query.title))
    }, [router])

    useEffect(() => {
        setTimeout(() => {
            if (selectedData?.length > 0 && id) {
                setData(selectedData[0]?.filter((item: any) => item?.title == id)[0])

            } else if (id) {
                getSingleWebinar(id)
            } else {
                getAllWebinar()
            }
        }, 100);
    }, [selectedData, id])

    const getSingleWebinar = async (id: string) => {
        try {
            const data: any = await StackWrapper.getSingleWebinar('webinar_entry', id,lang)
            if (data?.length > 0) {
                setData(data[0][0])


            }


        } catch (error) {


        }
    }
    const getAllWebinar = async () => {
        try {
            const data: any = await StackWrapper.getAllWebinar('webinar_entry', 1)
            if (data?.length > 0) {
                setData(data[0][0])

            }


        } catch (error) {


        }
    }

    return (
        <>
            {data ? <>
                <Container dimension="extra-large" className="banner--content overflow-hidden">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                </Container>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}