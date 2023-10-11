
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
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
import { useRouter } from 'next/router';
export default function BecomePartner({data}:{data:any}) {
    const [loader, setLoader] = useState(true)
  const router=useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")
        dispatch(SETBECOMEAPARTNER(data))
        setLoader(false)

    }, [router])
   
    return (
        <>
            {!loader ? <>
                <Head>

                    <title>{data?.seo_tags?.meta_title}</title>
                    <meta name="description" content={data?.seo_tags?.meta_description} />
                    <meta name="keywords" content={data?.seo_tags?.keywords} />
                    <meta property="og:title" content={data?.seo_tags?.meta_title} />
                    <meta property="og:site_name" content='Wonderflow'></meta>
                    <meta property="og:description" content={data?.seo_tags?.meta_description} />
                    <meta property="og:image" content={data?.seo_tags?.image_link?.href} />
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

export const getServerSideProps = async (context: any) => {
    const data = await stackWrapper.getBecomeAPartner('become_a_partner_page', 'bltbfbf0704cbd72b2a', context.query.lang)
    return {
        props: {
            data,
        },

    };
}