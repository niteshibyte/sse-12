'use client';

import '@wonderflow/react-components/core.css';
import '@wonderflow/themes';
import { Container, Stack, Select } from "@wonderflow/react-components";
import { MainNav } from './main-nav';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import stackWrapper from '../../helper/api'
import { useSelector } from 'react-redux';
import { SETHEADERDATA } from '../../reducer/header';
import Link from 'next/link';
import { AuthMenu } from './auth-nav';
import { MobileMenu } from './mobile-menu';
import Script from 'next/script';
import Head from 'next/head';
import htmlToTextConvert from '../../helper/htmlToTextConvert';
import { useRouter } from 'next/router';
import { ChangeLanguage, changeUrl } from '../../helper/ChangeLanguage';


export const Header = () => {
    const language = [{
        lang: 'en-us',
        title: 'English'
    }, {
        lang: 'fr',
        title: 'French'
    },
    {
        lang: 'es',
        title: 'Spanish'
    }
    ];
    const [lang,setLang]=useState('en-us')
    const dispatch = useDispatch();

    // const headerData = useSelector((state: any) => state?.header)
    const [header, setHeader] = useState<any>()
    const router=useRouter()
    
    useEffect(() => {
            getHeader()   
            if(router.query.lang){
                setLang(`${router.query.lang}`)
            }   
    }, [router]);


    const getHeader = async () => {
        try {
            const data: any = await stackWrapper.getHeader('header', 'blt57faf7364d7695cd',`${router.query.lang}`)
            dispatch(SETHEADERDATA(data))
            setHeader(data)
        } catch (error) {
        }
    }
    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <>

            {header && <Container dimension='full' padding className={scroll ? 'header--bg header--fixed--bg' : 'header--bg'} data-aos="fade-down" data-aos-duration="1000">
                <Stack className='site--header' rowGap={32} columnGap={16} direction="row" hAlign="center" vAlign='center' vPadding={8}>
                    <Stack as="div" direction='row' vAlign='center' hAlign='start' className='header--left--part'>
                        <Stack className='site--logo'>
                            <Link href={changeUrl(router.query.lang,`/`)} >
                                {header && <div dangerouslySetInnerHTML={htmlToTextConvert(header?.svg_for_light)} />}
                            </Link>
                        </Stack>
                        <Stack className='site--logo site--logo--dark'>
                            <Link href={changeUrl(router.query.lang,`/`)}>
                                {header && <div dangerouslySetInnerHTML={htmlToTextConvert(header?.svg_for_dark)} />}
                            </Link>
                        </Stack>
                        <Stack className='Language'>
                            <Select name="site--lang" title='Choose Language' defaultValue={lang} 
                            onChange={(e) =>{
                                localStorage.setItem('lang',e.target.value)
                                router.push(ChangeLanguage(router.query.lang,router.asPath,e.target.value))
                                
                            } }
                            >
                                {language?.map((item: any,index:number) => {
                                    return (
                                        <option key={index} value={item.lang}>
                                            {item.title}
                                        </option>
                                    )
                                })}
                            </Select>
                        </Stack>
                    </Stack>

                    <MainNav ></MainNav>
                    <MobileMenu></MobileMenu>

                    <AuthMenu ></AuthMenu>

                </Stack>
            </Container>}






        </>
    );
};