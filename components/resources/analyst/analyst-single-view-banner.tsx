import { Button, Container, Stack, Grid, Text, List, Spinner } from "@wonderflow/react-components";
import { GridItem } from "@wonderflow/react-components/dist/components/grid/item/grid-item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StackWrapper from '../../../helper/api'
import { useRouter } from "next/router";
import { Profile } from "../../user-profile/profile";
import Loader from "../../loader/Loader";
export const AnalystSingleViewBanner = (props: any) => {
    const [id, setId] = useState('')
    const [data, setData] = useState<any>()
    const [loader,setLoader]=useState(true)
    const router=useRouter()
    const selectedData = useSelector((state: any) => state?.webinar?.webinar)
   const  lang='en-us'
    useEffect(() => {
        setLoader(true)
        if(router.query.title){
            getSingleWebinar(String(router.query.title))
        }else{
router.push('/resources/whitepaper')
        }
    }, [router])

    

    const getSingleWebinar = async (id: string) => {
        try {
            const data: any = await StackWrapper.getSingleWebinar('webinar_entry', id,lang)

            if (data?.length > 0) {
                setData(data[0][0])
                setLoader(false)

            }


        } catch (error) {

            setLoader(false)
        }
    }
    
   
    return (
        <>
            {!loader ? <>
                <Container dimension="extra-large" className="banner--content overflow-hidden">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/red-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack direction="column" rowGap={24}>
                       
                    </Stack>
                </Container>
            </> :
            <Loader height= '100vh' width='100vw' />
            }
        </>
    )
}