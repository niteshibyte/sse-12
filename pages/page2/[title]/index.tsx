

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack } from '@wonderflow/react-components';
import { SalesForceTopSection } from '../../../components/salesforce/top-baneer-section';
import { TrustIcon } from '../../../components/salesforce/trust-icon';
import stackWrapper from '../../../helper/api'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SETSALESFORCE } from '../../../reducer/salesforce';
import { SalesforceFooter } from '../../../components/salesforce/salesforce-footer';
import { useRouter } from 'next/router';
import Loader from '../../../components/loader/Loader';

export default function SalesForcePage({data}:{data:any}) {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (data[0]?.length > 0) {
            dispatch(SETSALESFORCE(data[0][0]))
            setLoader(false)
        } else {
            router.push('/404')

        }

    }, [data])
   

    return (
        <>
            {loader ? <Loader /> : <Stack as="div">
                <SalesForceTopSection />
                {/* <TrustIcon /> */}
                <SalesforceFooter />
            </Stack>}
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.salesForceData('banner_page', context.query.title, `${context.query.lang}`)
    return {
      props: {
        data,
      },
    };
  }