import React from 'react'
import { Container } from "@wonderflow/react-components"; 
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import ThankYou from '../../components/thank-you/thank-you';

export default function index() {
    return (
        <>
            <Container as="div" dimension='full' padding={false} className='white--theme bg--grey thank-you'>
                <Header />
                <ThankYou />
                <Footer />
            </Container>
        </>
    )
}
