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
    
     <head>
        <title>{data[0][0]?.seo_tags?.meta_title}</title>
            <meta data-react-helmet="true"  name="description" content={data[0][0]?.seo_tags?.meta_description} />
            <meta data-react-helmet="true" name="keywords" content={data[0][0]?.seo_tags?.keywords} />
            <meta data-react-helmet="true" property="og:title" content={data[0][0]?.seo_tags?.meta_title} />
            <meta data-react-helmet="true" property="og:site_name" content='Wonderflow'></meta>
            <meta data-react-helmet="true" property="og:description" content={data[0][0]?.seo_tags?.meta_description} />
            <meta data-react-helmet="true" property="og:image" content={data[0][0]?.seo_tags?.image_link?.href} />

        <script>
          {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PQ3W82L')
              `}

        </script>

        </head>

      {!loader ?
        <Stack as="div">
        
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