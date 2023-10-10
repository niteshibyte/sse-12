'use client';

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { TopBannerSection } from '../../../components/adjust/top-baneer-section';
import { ChooseApps } from '../../../components/adjust/choose-apps';
import { Stack } from '@wonderflow/react-components';
import { AdjustFooter } from '../../../components/adjust/adjust-footer';
import { LatestIndustries } from '../../../components/adjust/industries';
import { AdjustPartnersLogos } from '../../../components/adjust/partnerlogos';
import { AdjustMedia } from '../../../components/adjust/adjust-media-slider';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SETMARKETING } from '../../../reducer/marketing';
import Loader from '../../../components/loader/Loader';
import { useRouter } from 'next/router';

export default function AdjustPage() {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        if (router?.query?.title) {
            getMarketingPage1(`${router?.query?.title}`)
        }



    }, [router?.query?.title])
    const getMarketingPage1 = async (title: string) => {
        try {
            const data: any = await stackWrapper.adjustData('marketing_single_page', `/${title}`)
            if (data[0].length > 0) {
                dispatch(SETMARKETING(data[0][0]))
                setLoader(false)
            } else {
                router.push('/404')
            }


        } catch (error) {
            setLoader(false)

        }

    }

    return (
        <>
            {!loader ? <Stack as="div" rowGap={96}>
                <TopBannerSection />
                <ChooseApps />
                <Stack as="div">
                    <LatestIndustries />
                    <AdjustPartnersLogos />
                </Stack>
                <AdjustMedia />

                <AdjustFooter />
            </Stack> : <Loader height='100vh' width='100vw' />}
        </>
    )
}