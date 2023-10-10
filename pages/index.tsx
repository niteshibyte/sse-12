

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import "animate.css";
import stackWrapper from '../helper/api'


export default function Home({data}:{data:any}) {

 
  return (
    <>
    <h1>Nitesh</h1>
    <img src={data?.section_8_promotional?.hero_image?.url} alt="Vercel Logo" width={200} height={200} />

    </>
  );
}

export const getServerSideProps = async (context:any) => {
  const data=  await stackWrapper.getHomePage('home_page', 'blt8b06eea0c35a7994')
  return {
   props: {
     data:data,
   },
 };
 }
