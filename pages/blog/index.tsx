'use client';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { useEffect, useState } from 'react';
import { Container, Spinner, Stack } from '@wonderflow/react-components';
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

export default function blog() {
  const [blogData, setBlogData] = useState<any>();
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove("mega--menu--open")

    getAllBlog()
  }, [])
  const getAllBlog = async () => {
    try {
      const data: any = await stackWrapper.getBlogPage('blog_page', 'bltbe55f1d2d97c3bf1')
      setBlogData(data)
      dispatch(SETBLOGDATA(data))
      setLoader(false)
    } catch (error) {
      setLoader(false)

    }
  }

  return (
    <>
      {!loader ? <>
        <Head>

          <title>{blogData?.seo_tags?.meta_title}</title>
          <meta name="description" content={blogData?.seo_tags?.meta_description} />
          <meta name="keywords" content={blogData?.seo_tags?.keywords} />
          <meta property="og:title" content={blogData?.seo_tags?.meta_title} />
          <meta property="og:site_name" content='Wonderflow'></meta>
          <meta property="og:description" content={blogData?.seo_tags?.meta_description} />
          <meta property="og:image" content={blogData?.seo_tags?.image_link?.href} />
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
