import React, { useState } from 'react'
import { Button, Stack, Text, Toggle, useBreakpointsConfig } from "@wonderflow/react-components";

type config = {
    vPadding: "32" | "16";
    hPadding: "48" | "16";
}
export default function BookDemoForm() {
    const [formFields, setFormFields] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        accept: true,
        subscribe: false
    })

    const [formErrors, setFormErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        accept: "",
        subscribe: ''
    })

    const [formValidate, setFormValidate] = useState(false);

    const handleChange = (event: any, fieldName: any) => {

        setFormFields({ ...formFields, [fieldName]: event.target.value })
    }
    const submit = async (e: any) => {
        e.preventDefault();
        const temp: any = {}

        if (formFields?.first_name) {
            temp["first_name"] = ''
        } else {

            temp["first_name"] = "This field is required"
        }

        if (formFields?.last_name) {
            temp["last_name"] = ""
        } else {
            temp["last_name"] = "This field is required";
        }

        if (formFields?.email == '') {
            temp["email"] = "This field is required"

        } else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formFields?.email))) {
            temp["email"] = "This doens't look like an email"
        } else {
            temp["email"] = ""
        }

        if (formFields?.phone == '') {
            temp["phone"] = "This field is required";

        } else if (!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formFields?.phone))) {
            temp["phone"] = "Is this a valid phone number?"
        } else {
            temp["phone"] = ""
        }

        if (formFields?.company) {
            temp["company"] = "";
        } else {
            temp["company"] = "This field is required";
        }
        if (formFields?.accept) {
            temp['accept'] = ''
        } else {
            temp['accept'] = 'We need your consent in order to proceed.'
        }
        setFormErrors({ ...formErrors, ...temp })
        if (temp.first_name == '' && temp?.last_name == '' && temp.email == '' && temp.company == '' && temp.phone == '' && temp?.accept == '') {
        }

        return true;
    }

    const { matches, value } = useBreakpointsConfig<config>({
        md: { vPadding: "32", hPadding: "48" },
        lg: { vPadding: "32", hPadding: "48" },
        xl: { vPadding: "32", hPadding: "48" },
        fallback: { vPadding: "16", hPadding: "16" },
    });

    return (
        <>
            <Stack as='div' direction='column' rowGap={32} vPadding={value.vPadding} hPadding={value.hPadding}>
                <Stack as="div" columnGap={32}>
                    <Text as="h4" variant="heading-3">Book a demo with our VoC Experts</Text>
                </Stack>
                <form className='mt-4' id="demoForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                    <input type="hidden" name="oid" value="00D7Q000000KCPt" />
                    <input type="hidden" name="retURL" value="https://wonderflow.netlify.app/thank-you-demo" />

                    <input type="hidden" name="Marketing" value="Marketing" />
                    <input type="hidden" name="Campaigns" value="Campaigns" />
                    <input type="hidden" name="BDR" value="BDR" />
                    <input type="hidden" name="Sales Contact" value="Sales Contact" />
                    <input type="hidden" name="Partner" value="Partner" />
                    <input type="hidden" name="SalesNash" value="SalesNash" />
                    <input type="hidden" name="Referral" value="Referral" />
                    <input type="hidden" name="Renewal" value="Renewal" />
                    <input type="hidden" name="Apollo" value="Apollo" />
                    <input type="hidden" name="Other" value="Other" />
                    <input type="hidden" id="00N7Q000004vF1Z" maxLength={100} name="00N7Q000004vF1Z" size={20} value="Demo Form" />
                    <select hidden={true} id="lead_source" name="lead_source">
                        <option value="Inbound">Inbound</option>
                    </select>
                    <Stack as="div" direction='column' rowGap={24}>
                        <Stack as="div" direction='row' className='' rowGap={16} columnGap={16} >
                            <Stack as="div" className='formGroup'>
                                <label htmlFor="first_name">First Name</label>
                                <input required id="first_name" name="first_name" type="text" placeholder='Joe' onChange={(e) => handleChange(e, "first_name")} />
                                <Text as="div" variant="subtitle-2" color="danger">{formErrors?.first_name}</Text>
                            </Stack>
                            <Stack as="div" className='formGroup'>
                                <label htmlFor="last_name">Last Name</label>
                                <input required id="last_name" name="last_name" type="text" placeholder='Doe' onChange={(e) => handleChange(e, "last_name")} />
                                <Text as="div" variant="subtitle-2" color="danger">{formErrors?.last_name}</Text>
                            </Stack>
                        </Stack>
                        <Stack as="div" direction='row' className='' rowGap={16} columnGap={16} >
                            <Stack as="div" className='formGroup'>
                                <label htmlFor="email">Business Email</label>
                                <input required id="email" name="email" type="text" placeholder='Email' onChange={(e) => handleChange(e, "email")} />
                                <Text as="div" variant="subtitle-2" color="danger">{formErrors?.email}</Text>
                            </Stack>
                            <Stack as="div" className='formGroup'>
                                <label htmlFor="phone">Phone</label>
                                <input required id="phone" name="phone" type="number" maxLength={10} minLength={10} placeholder='+1' onChange={(e) => handleChange(e, "phone")} />
                                <Text as="div" variant="subtitle-2" color="danger">{formErrors?.phone}</Text>
                            </Stack>
                        </Stack>
                        <Stack as="div" className='formGroup' vPadding={4}>
                            <label htmlFor="company">Company</label>
                            <input required id="company" name="company" type="text" placeholder='Acme Ltd.' onChange={(e) => handleChange(e, "company")} />
                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.company}</Text>
                        </Stack>

                        <Stack as="div" className='toggleSwitch' vPadding={4}>
                            <Toggle required defaultChecked={formFields.accept} onChange={(e) => setFormFields({ ...formFields, accept: !formFields.accept })} label="I accept the Terms and the Privacy policy" />
                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.accept}</Text>
                        </Stack>
                        <Stack as="div" className='toggleSwitch' vPadding={4}>
                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.accept}</Text>
                            <Toggle required defaultChecked={formFields?.subscribe} onChange={(e) => setFormFields({ ...formFields, subscribe: !formFields?.subscribe })} label="Subscribe to the Newsletter" />
                        </Stack>
                        <Stack as="div" className='' vPadding={4}>
                            <Button dimension='big' type="submit" kind='primary' name="Request a demo">Submit</Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </>
    )
}
