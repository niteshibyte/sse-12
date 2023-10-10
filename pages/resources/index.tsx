'use client';

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Header } from '../../components/header/header';
import { Container, Spinner, Stack, useBreakpointsConfig } from '@wonderflow/react-components';
import { Footer } from '../../components/footer/footer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { axiosWrapper } from '../../helper/fetch-wrapper';
import { ResourcesPageContent } from '../../components/resources/resources--page/resources-page-content';
type config = {
  rowGap: "64" | "128",
}
export default function blog(props: any) {
    const [blogData,setBlogData]=useState();
    const [loader,setLoader]=useState(true)
    const dispatch=useDispatch();
  
    useEffect(() => {
    document.body.classList.remove("mega--menu--open")

    
    }, [])
    

    const {matches, value} = useBreakpointsConfig<config>({
      md: {rowGap: "128"},
      lg: {rowGap: "128"},
      xl: {rowGap: "128"},
      fallback: {rowGap: "64"},
    });
    return (
       
        <>
            <Stack as="div" direction='column' rowGap={value.rowGap} className='white--theme resouces--content--page' >
                <Header />
                <ResourcesPageContent />
                <Footer />
            </Stack>
        </>
    )
}
