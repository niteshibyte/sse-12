'use client';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Stack } from '@wonderflow/react-components';
import { useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { PageNotFound } from '../../components/404/pagenotfoud';
export default function RequestADemo() {
    useEffect(() => {
        document.body.classList.remove("mega--menu--open")

    }, [])
    return (

        <>
            <Stack as='div' className='white--theme bg--grey not-found-page career-page'>
                <Header />
                <PageNotFound />
                <Footer />
            </Stack>
        </>

    )
}