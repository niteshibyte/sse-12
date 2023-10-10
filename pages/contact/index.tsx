'use client';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Container, Spinner, Stack } from '@wonderflow/react-components';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ContactTopBanner } from '../../components/contact-us/contact-top-banner';
import { PartnerLogo } from '../../components/contact-us/partner-logo';
import { OurOffice } from '../../components/contact-us/our-office';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'
import { SETCONTACTUS } from '../../reducer/contact';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
export default function ContactUs() {
    const [loader, setLoader] = useState(true)
    const { contact }: any = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

        if (Object.keys(contact).length == 0) {
            getContactUs()
        } else {
            setLoader(false)
        }

    }, [contact])
    const getContactUs = async () => {
        try {
            const data = await stackWrapper.getContactUs('contact_us_page', 'bltf0e119811e800723')


            dispatch(SETCONTACTUS(data))
            setLoader(false)

        } catch (error) {
            setLoader(false)

        }

    }
    return (
        <>
            {!loader ? <>
                <Head>

                    <title>{contact?.seo_tags?.meta_title}</title>
                    <meta name="description" content={contact?.seo_tags?.meta_description} />
                    <meta name="keywords" content={contact?.seo_tags?.keywords} />
                    <meta property="og:title" content={contact?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={contact?.seo_tags?.meta_description} />
                    <meta property="og:image" content={contact?.seo_tags?.image_link?.href} />
                </Head>
                <Stack as='div' direction='column' rowGap={128} className='contact-page'>
                    <Header />
                    <ContactTopBanner />
                    <OurOffice />
                    <PartnerLogo />
                    <Footer />
                </Stack>
            </> :<Loader height='100vh' width='100vw' />}
        </>
    )
}