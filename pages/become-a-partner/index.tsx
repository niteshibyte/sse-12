'use client';

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Container } from '@wonderflow/react-components';
import { BecomePartnerTopSection } from '../../components/become-partner-view/become-partner-top-section';
import { PartnerLogo } from '../../components/become-partner-view/partner-logo';
import { PartnerShipView } from '../../components/become-partner-view/partnership-view';
import { GetStartedView } from '../../components/become-partner-view/get-started-view';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'
import { SETBECOMEAPARTNER } from '../../reducer/becomeAPartner';
import { CommonBlogSection } from '../../components/common-blog-section/common-blog-section';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
export default function BecomePartner() {
    const [loader, setLoader] = useState(true)
    const { becomeapartner }: any = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        if (Object.keys(becomeapartner).length == 0) {
            getBecomePartner()

        } else {
            setLoader(false)
        }

    }, [becomeapartner])
    const getBecomePartner = async () => {
        try {
            const data = await stackWrapper.getBecomeAPartner('become_a_partner_page', 'bltbfbf0704cbd72b2a')

            dispatch(SETBECOMEAPARTNER(data))
            setLoader(false)

        } catch (error) {
            setLoader(false)

        }

    }
    return (
        <>
            {!loader ? <>
                <Head>

                    <title>{becomeapartner?.seo_tags?.meta_title}</title>
                    <meta name="description" content={becomeapartner?.seo_tags?.meta_description} />
                    <meta name="keywords" content={becomeapartner?.seo_tags?.keywords} />
                    <meta property="og:title" content={becomeapartner?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={becomeapartner?.seo_tags?.meta_description} />
                    <meta property="og:image" content={becomeapartner?.seo_tags?.image_link?.href} />
                </Head>
                <Container dimension='full' padding={false} className='white--theme bg--grey become-partner-page'>
                    <Header />
                    <BecomePartnerTopSection />
                    <PartnerLogo />
                    
                    <PartnerShipView />
                    
                    <CommonBlogSection
                        smallTitle="RESOURCES"
                        title="More from our partner network"
                    />
                    <GetStartedView />
                    <Footer />
                </Container>
            </> : <Loader height='100vh' width='100vw' />}
        </>
    )
}