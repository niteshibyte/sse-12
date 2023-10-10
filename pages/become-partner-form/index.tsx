import React from 'react'
'use client';
import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Container, Spinner } from '@wonderflow/react-components';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import FormView from '../../components/become-partner-form-view/form-view';
export default function index() {
    return (
        <>
            <>
                <Container dimension='full' padding={false} className='dark--theme bg--grey become-partner-page-form'>
                    <Header />
                    <FormView />
                    <Footer />
                </Container>
            </>
        </>
    )
}
