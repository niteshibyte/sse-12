import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack } from '@wonderflow/react-components';
import { useEffect, useState } from 'react';
import { Header } from '../../../components/header/header';
import { SingleBlogView } from '../../../components/blog/single-blog/single-blog-view';
import { Footer } from '../../../components/footer/footer';
import { useRouter } from 'next/router';
import stackWrapper from '../../../helper/api'
import { useDispatch } from 'react-redux';
import { SETBLOGSINGLE } from '../../../reducer/blogsingle';
import Loader from '../../../components/loader/Loader';

export default function blog({ data, recent }: { data: any, recent: any }) {
  const [loader, setLoader] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (data?.length > 0 && data[0]?.length > 0) {
      dispatch(SETBLOGSINGLE(data[0][0]))
      setLoader(false)
    } else {
      router.push('/404')
      setLoader(false)

    }
  }, [router])

  return (
    <>

      {!loader ?
        <Stack as="div">
          {/* <Head>
            <title>{blog?.seo_tags?.meta_title}</title>
            <meta name="description" content={blog?.seo_tags?.meta_description} />
            <meta name="keywords" content={blog?.seo_tags?.keywords} />
            <meta property="og:title" content={blog?.seo_tags?.meta_title} />
            <meta property="og:site_name" content='Wonderflow'></meta>
            <meta property="og:description" content={blog?.seo_tags?.meta_description} />
            <meta property="og:image" content={blog?.seo_tags?.image_link?.href} />
          </Head> */}
          <Stack className="blog--view--page white--theme" rowGap={128}>
            <Header />
            <SingleBlogView data={recent} />
          </Stack>
          <Footer />
        </Stack> : <Loader height='100vh' width='100vw' />}

    </>
  )
}
export const getServerSideProps = async (context: any) => {
  const data = await stackWrapper.getSingleBlog('blog_entries', context.query.title, `${context.query.lang}`)
  const recent = await stackWrapper.getNotInBlog('blog_entries', context.query.title, `${context.query.lang}`)
  return {
    props: {
      data,
      recent: recent
    },

  };
}