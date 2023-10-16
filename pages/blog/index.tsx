import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { useEffect, useState } from 'react';
import {  Stack } from '@wonderflow/react-components';
import { useDispatch } from 'react-redux';
import { SETBLOGDATA } from '../../reducer/blog';
import { Header } from '../../components/header/header';
import Blogbanner from '../../components/blog/blog-banner/banner';
import { BlogContent } from '../../components/blog/articles/blog-content';
import stackWrapper from '../../helper/api'
import { BlogResources } from '../../components/resources/blog-resources';
import { SubscribeForm } from '../../components/subscribe-form/subscribe-form';
import { Footer } from '../../components/footer/footer';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';

export default function blog({data}:{data:any}) {
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove("mega--menu--open")
    dispatch(SETBLOGDATA(data))
    setLoader(false)

  }, [data])
 

  return (
    <>
      {!loader ? <>
        <Head>

          <title>{data?.seo_tags?.meta_title}</title>
          <meta data-react-helmet="true" name="description" content={data?.seo_tags?.meta_description} />
          <meta data-react-helmet="true" name="keywords" content={data?.seo_tags?.keywords} />
          <meta data-react-helmet="true" property="og:title" content={data?.seo_tags?.meta_title} />
          <meta data-react-helmet="true" property="og:site_name" content='Wonderflow'></meta>
          <meta data-react-helmet="true" property="og:description" content={data?.seo_tags?.meta_description} />
          <meta data-react-helmet="true" property="og:image" content={data?.seo_tags?.image_link?.href} />
          <script>
                        {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PQ3W82L')
              `}

                    </script>
        </Head>
        <Stack as="div" direction='column' rowGap={128} className='blog-page-view'>
          <Header />
          <Blogbanner />
          <BlogContent />

          <SubscribeForm />
          <BlogResources show={4} section="true" classCss={"mt-128"} />
          <Footer />
        </Stack>
      </> : <Loader height='100vh' width='100vw' />}
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const data = await stackWrapper.getBlogPage('blog_page', 'bltbe55f1d2d97c3bf1', `${context.query.lang}`)
  return {
      props: {
          data,
      },

  };
}
