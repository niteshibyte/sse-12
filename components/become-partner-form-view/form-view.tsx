import React, { useMemo } from 'react'
import { SectionHead } from '../section-head/section-head'
import { Container, Stack, Text, Toggle } from '@wonderflow/react-components';
import countryList from 'react-select-country-list'

export default function FormView() {
    const options = useMemo(() => countryList().getData(), [])
    return (
        <>
            <>
                <Container dimension="full" padding={false} className="section--with--circle product-top-section overflow-hidden no-radius">
                    <Stack className="circle--highlight circle-left-top">
                        <img src="/form-left-circle.png" alt="Red Circle" />
                    </Stack>
                    <Stack className="circle--highlight circle-right-bottom">
                        <img src="/form-right-circle.png" alt="Red Circle" />
                    </Stack>
                    <Container dimension="extra-large">
                        <Container dimension="full" padding={false}>
                            <Stack as="div" hPadding={24} vPadding={128}>
                                <SectionHead
                                    largeTitleForm="Become a partner"
                                    subTitleForm="Let’s work together. Join our community of partners to better serve mutual customers and grow your business."
                                />

                                {/* Form Content */}
                                <Stack className='formBgColor'>
                                    <form className='mt-4' id="demoForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                                        <Text as="h3" variant='heading-3'>Wonderflow Partner Program Registration Request Form</Text>
                                        <input type="hidden" name="oid" value="00D7Q000000KCPt" />
                                        <input type="hidden" name="retURL" value="https://wonderflow.netlify.app/thank-you-partner" />
                                        <Stack as="div" className='gridItem mt-4' vPadding={16}>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="first_name">First Name</label>
                                                <input required id="first_name" name="first_name" type="text" placeholder='Joe' />
                                            </Stack>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="last_name">Last Name</label>
                                                <input required id="last_name" name="last_name" type="text" placeholder='Doe' />
                                            </Stack>
                                        </Stack>
                                        <Stack as="div" className='gridItem mt-4' vPadding={16}>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="email">Business Email</label>
                                                <input required id="email" name="email" type="text" placeholder='Email' />
                                            </Stack>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="phone">Phone</label>
                                                <input required id="phone" name="phone" type="number" maxLength={10} minLength={10} placeholder='+1' />
                                            </Stack>
                                        </Stack>
                                        <Stack as="div" className='gridItem mt-4' vPadding={16}>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="company">Company</label>
                                                <input required id="company" name="company" type="text" placeholder='Acme Ltd.' />
                                            </Stack>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="website">Website</label>
                                                <input required id="website" name="website" type="text" placeholder='www.website.com' />
                                            </Stack>
                                        </Stack>
                                        <Stack as="div" className='formGroup mt-4' vPadding={16}>
                                            <label htmlFor="country">Country</label>
                                            <select required id="annual-revenue" name="annual-revenue" >
                                                <option value="">--None--</option>
                                                {options?.map((item: any, index: number) => <option value={item?.value}>{item?.label}</option>)}
                                            </select>
                                        </Stack>
                                        <Stack as="div" className='gridItem mt-4' vPadding={16}>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="annual-revenue">Annual Revenue</label>
                                                <select required id="annual-revenue" name="annual-revenue" >
                                                    <option value="">--None--</option>
                                                    <option value="">10</option>
                                                    <option>10 - 50</option>
                                                    <option>50 - 100</option>
                                                    <option>100 millions</option>
                                                </select>
                                            </Stack>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="website">Regional presence</label>
                                                <select required id="00NJz000000K2VV" name="00NJz000000K2VV" title="Regional presence">
                                                    <option value="">--None--</option><option value="Americas ( NA, Central, SA)">Americas ( NA, Central, SA)</option>
                                                    <option value="EMEA (lista paesi)">EMEA (lista paesi)</option>
                                                    <option value="APAC (lista paesi)">APAC (lista paesi)</option>
                                                </select>
                                            </Stack>
                                        </Stack>
                                        <Stack as="div" className='gridItem mt-4' vPadding={16}>
                                            <Stack as="div" className='formGroup'>
                                                <label htmlFor="website">Type of partner</label>
                                                <select required id="00NJz000000K2X7" name="00NJz000000K2X7" title="Type of partner">
                                                    <option value="">--None--</option><option value="Partnership">Partnership</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Service&amp;Channels">Service&amp;Channels</option>
                                                </select>
                                            </Stack>
                                            <Stack as="div" className='formGroup mt-4'>
                                                <label htmlFor="employees">Employees</label>
                                                <select required id="employees" name="employees">
                                                    <option>0 - 50 </option>
                                                    <option>50 - 200</option>
                                                    <option>200 - 500</option>
                                                </select>
                                            </Stack>
                                        </Stack>
                                        <Stack as="div" className='toggleSwitch mt-8' vPadding={16}>
                                            <Toggle required label="I accept the Terms and the Privacy policy" />
                                        </Stack>
                                        <Stack as="div" className='toggleSwitch mt-4' vPadding={16}>
                                            <Toggle label="Subscribe to the Newsletter" />
                                        </Stack>
                                        <Stack as="div" className='formBtn mt-8'>
                                            <input type="submit" name="Request a demo" />
                                        </Stack>
                                    </form>
                                </Stack>
                            </Stack>
                        </Container>
                    </Container>
                </Container>
            </ >
        </>
    )
}
