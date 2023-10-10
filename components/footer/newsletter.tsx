import { Button, Stack,  useBreakpointsConfig } from "@wonderflow/react-components"
import React, { useState } from "react";
type config = {
    text: "Get" | "Request a Demo";
}
export const NewsLetter = () => {

    const {matches, value} = useBreakpointsConfig<config>({
        md: {text: "Request a Demo"},
        lg: {text: "Request a Demo"},
        xl: {text: "Request a Demo"},
        fallback: {text: "Get"},
    })

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const onSubmit = () => {

        if (!email) {
            return setEmailError("Email is Required")
        }
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) {
            return setEmailError('Please enter valid email')
        }
        return setEmailError("")

    }
    return (
        <Stack className="footer--newsletter">

            <Stack direction="row">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                    <input type="hidden" name="oid" value="00D7Q000000KCPt" />
                    <input type="hidden" name="retURL" value="https://wonderflow.netlify.app/thank-you-demo" />
                    <select hidden={true} id="lead_source" name="lead_source" >
                        <option value="Inbound">Inbound</option>
                    </select>

                    <input id="00N7Q000004vF1Z" maxLength={100} name="00N7Q000004vF1Z" size={20} type="hidden" value="Newsletter" />


                    <Stack as="div" className='formGroup' direction="row">
                        <input required={true} id="email" name="email" type="email" placeholder='Company E-mail' />
                        <Stack as="div" className='formBtn'>
                            <Button  dimension="big" type='submit' kind="secondary">{value.text}</Button>
                        </Stack>
                    </Stack>
                </form>

            </Stack>

        </Stack>
    );
};